# pitline.dev

Marketing site for [Pitline](https://pitline.dev). Static HTML, CSS and JavaScript, served via GitHub Pages from `master`; no build step or package dependencies.

This checkout is the launch draft on `draft/operating-company-pages`. Keep it unpublished until the [release checklist](RELEASE-CHECKLIST.md) passes. Download links are prepared for the launch binaries; their current availability is not a readiness claim. Homebrew is omitted until a formula is available.

Pitline’s source repository is private. Do not add public source-repository links or open-source licensing claims without separate authorization. Binary downloads use the public release repository.

## Preview

Run `python3 -m http.server 8769 --bind 127.0.0.1` from this directory and open `http://127.0.0.1:8769`.

## Content

- `index.html`: agent supervision, workflow, product screenshots, integrations, terminal support, quick start and FAQ.
- `install.html`: platform-specific installation and first session.
- `guide.html`: integration details, private network access, troubleshooting and updates.
- `site.js`: keyboard-accessible platform tabs and command copying with error feedback.
- `contact.html`, `privacy.html`, `terms.html`: company and support information.

The product screenshots show the real compiled Pitline interface with fictional sample sessions. They are not evidence of live vendor behavior. See `assets/SCREENSHOTS.md` for provenance and `RELEASE-CHECKLIST.md` for final validation.
