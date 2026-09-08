(function () {
  'use strict';
  var demoImage = document.getElementById('approval-demo');
  var demoCaption = document.getElementById('demo-caption');
  var demoButtons = document.querySelectorAll('[data-demo]');
  demoButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var result = button.dataset.demo === 'result';
      demoImage.src = result ? '/assets/pitline-resumed.png' : '/assets/pitline-approval.png';
      demoImage.alt = result ? 'Sample Pitline conversation after approval, showing the response sent and the agent reporting passing tests' : 'Sample Pitline conversation with a pending tool approval and response controls';
      demoCaption.textContent = result ? 'After approval, the agent continues and reports its result.' : 'Review the requested command before deciding.';
      demoButtons.forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
    });
  });
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.os-tab'));
  function showOS(os, focus) {
    tabs.forEach(function (tab) {
      var active = tab.dataset.os === os;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      var panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.hidden = !active;
      if (active && focus) tab.focus();
    });
    try { localStorage.setItem('pitline-install-os', os); } catch (_) {}
  }
  if (tabs.length) {
    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () { showOS(tab.dataset.os, false); });
      tab.addEventListener('keydown', function (event) {
        var next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        showOS(tabs[next].dataset.os, true);
      });
    });
    var preference;
    try { preference = localStorage.getItem('pitline-install-os'); } catch (_) {}
    if (!tabs.some(function (tab) { return tab.dataset.os === preference; })) {
      preference = /Mac|iPhone|iPad/.test(navigator.platform || '') ? 'macos' : 'linux';
    }
    showOS(preference, false);
  }
  function fallbackCopy(text) {
    var active = document.activeElement;
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.cssText = 'position:fixed;top:0;left:-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    var copied = false;
    try { copied = document.execCommand('copy'); } catch (_) {}
    textarea.remove();
    if (active && active.focus) active.focus();
    return copied;
  }
  document.querySelectorAll('.cmd[data-copy]').forEach(function (wrap) {
    var button = wrap.querySelector('.copy-btn');
    var code = wrap.querySelector('code');
    if (!button || !code) return;
    var status = document.createElement('span');
    status.className = 'copy-status';
    status.setAttribute('role', 'status');
    wrap.appendChild(status);
    var reset;
    button.addEventListener('click', async function () {
      var text = code.textContent.replace(/\n$/, '');
      var copied = false;
      button.disabled = true;
      clearTimeout(reset);
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
          copied = true;
        }
      } catch (_) {}
      if (!copied) copied = fallbackCopy(text);
      button.disabled = false;
      button.textContent = copied ? 'Copied' : 'Try again';
      button.classList.toggle('is-copied', copied);
      status.textContent = copied ? 'Command copied.' : 'Could not copy. Select and copy the command manually.';
      if (copied) reset = setTimeout(function () {
        button.textContent = 'Copy';
        button.classList.remove('is-copied');
        status.textContent = '';
      }, 2200);
    });
  });
})();
