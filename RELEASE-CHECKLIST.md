# Website release gate

The website draft assumes release binaries will be published. This checklist is the final validation gate; editing the draft does not establish download availability or authorize publication.

## Release artifacts and public destinations

- [ ] Publish the intended release, then verify the shell installer URL used on `install.html` returns the intended script and installs that release.
- [ ] Verify every advertised OS/architecture archive exists, downloads successfully, and matches the published checksum. Test the advertised Linux libc variants as applicable.
- [ ] Confirm release notes state actual platform requirements, signing/notarization status, known limitations, and upgrade instructions. Add tested OS/agent versions only after recording evidence.
- [ ] Reconcile installer destination/PATH output with the installation instructions. Verify manual archive installation and checksum instructions against the final assets.
- [ ] Confirm source, Apache-2.0 license, release history, contact, privacy and terms links are publicly accessible. Resolve any private repository links before publication.
- [ ] Keep Homebrew off the public instructions unless a working formula is published and independently tested.

## Clean-machine installation

- [ ] On clean macOS environments for the released architectures, install, handle any actual Gatekeeper prompt, start the launchd services, and run `pitline doctor`.
- [ ] On clean Linux environments for the released architectures, install, confirm PATH, start systemd user services, run `pitline doctor`, and verify the linger success/warning path.
- [ ] Verify browser startup, config paths, authentication defaults, and agent executable discovery when installed through common local tool managers.
- [ ] Test updating an existing installation and reconnecting to a keeper-backed native terminal. Test uninstall-service and document what remains on disk; check agent-hook cleanup.

## Real agent workflow

- [ ] Install and authenticate each advertised agent version, then validate New agent → Launch folder → Chat → Start → message → response.
- [ ] Exercise a real supported approval and denial; confirm work resumes or stops as expected. Verify interrupt/steer controls only where advertised.
- [ ] Recheck the managed/external compatibility table, including Codex shared-server versus standalone TUI, external Claude hook opt-in and fallback, Grok ownership, and OpenCode external visibility.
- [ ] Confirm the known external Claude plan-approval limitation against the release agent version and adjust the guide if behavior has changed.
- [ ] Validate Pi lifecycle monitoring in a terminal without promising structured Chat or standalone agent-card membership.
- [ ] Verify ordinary native shell launch, workspace/tab/pane controls and local Herdr discovery/terminal access. Keep tmux labeled coming soon.
- [ ] Verify reconnect after browser closure, a daemon restart and a temporary network interruption. Do not describe keeper restart or host reboot as preserving live sessions.

## Phone access and access control

- [ ] Follow the guide verbatim with two devices on an encrypted private network, a private-address bind and token auth.
- [ ] Verify browser sign-in and HTTP/WebSocket rejection without valid credentials. Confirm credentials do not appear in page URLs or screenshots.
- [ ] Confirm network access controls restrict the intended devices and the chosen bind does not unintentionally expose a LAN interface.
- [ ] Test phone Chat, approval/denial, navigation, terminal input and terminal resizing. Verify expected behavior while the host sleeps or goes offline.
- [ ] Keep plain HTTP, encrypted private-network transport and any separately configured HTTPS proxy distinct in the instructions; a port number never implies TLS.

## Website and product proof

- [ ] Check desktop and phone layouts, keyboard navigation, OS-tab arrow/Home/End controls, focus visibility and command-copy feedback, including unavailable clipboard handling.
- [ ] Check all local links, anchors, external destinations, metadata, icons and any sitemap/robots settings on the final public origin.
- [ ] Replace or supplement any labeled product-preview fixture with captures of the release build showing an actual task, permission request, browser response and resumed work; include a phone capture.
- [ ] Keep fixture or illustrative images visibly labeled until replaced. Never present a staged preview as a recorded live run or test evidence.
- [ ] Reconcile all homepage and guide claims with the release build; agent supervision remains primary, terminals/Herdr supporting, and tmux/relay/mobile apps/push planned.
- [ ] Review business/legal details and support destination. Record the tested release tag, date, platforms and agent versions below.

## Draft verification — September 7, 2026

Completed locally before release artifacts exist:

- All seven HTML pages: local links, fragment targets, referenced assets, unique IDs and one main heading validated; sitemap XML parsed.
- Shared JavaScript syntax and git whitespace checks passed.
- Homepage inspected at 320px, 390px, 768px and desktop widths without page overflow; installation and guide inspected at phone width. Supporting pages also checked for phone-width overflow.
- OS-tab ArrowLeft/End navigation and selected-panel state, sample approval walkthrough state changes, FAQ keyboard disclosure, and copy success feedback exercised in the browser. Independent clipboard contents and permission-denied behavior remain final checks.
- Product screenshots captured from the actual app UI with fictional fixtures; every saved asset visually inspected. No real vendor session was run.

These checks do not replace final public-origin checks, real phone testing or the release gates above.

## Sign-off

- Release tag:
- Validation date:
- Tested platforms / architectures:
- Tested agent versions:
- Known limitations / follow-ups:
- Reviewer:

Publish only after the release gates above are satisfied and publication is authorized.
