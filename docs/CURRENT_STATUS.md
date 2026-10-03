# Current Status

Reality as of 2026-10-03. This document records observed state, not intended or approved product behavior.

## What exists

- Git repository with the docs-first starter for vtv (Very thin VPN).
- Root EditorConfig/ignore conventions and a Windows Electron UI scaffold with npm lockfile and security-focused renderer defaults.
- The Electron UI now follows the layout and color direction of `docs/concepts_sandbox/mockup.html` and uses local PNG art for the splash illustration and app icon. The Connect action remains disabled and no VPN engine is integrated.
- Initial prototype direction (Windows + Electron + official WireGuard for Windows evaluation) is recorded in `adr/ADR-0001-windows-electron-wireguard.md`; product/security and distribution decisions remain open.
- `npm ci` and `npm test` pass (2 tests); both the Electron app and packaged Windows app passed local launch smoke tests. `npm run dist:win` produced `release/vtv Setup 0.1.0.exe`; Authenticode status is NotSigned.
- `VVTV-0001` remains Draft; its identity has not been claimed on the default branch.

## Active work

See `CURRENT_TASK.md` for the active scaffold task. Remaining product boundaries and security requirements are recorded in `PROJECT_BRIEF.md` and the ADR.

## Known gaps

No tunnel lifecycle, profile provisioning, credential storage, actual connection-state verification, DNS/routing controls, leak/failure handling, code signing, or production installer validation exists. Do not describe the prototype as a VPN client or imply traffic protection.
