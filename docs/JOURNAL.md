# Journal

Newest first. Append only.

## 2026-10-03 — VTV mockup visual refresh

- Updated the Electron UI to follow the visual layout and palette in the non-authoritative `docs/concepts_sandbox/mockup.html`, while preserving the disabled Connect button and explicit no-tunnel/no-protection warning.
- Added the supplied splash and icon PNGs as local `src/assets/` resources; removed the UI's procedural/SVG artwork and configured the Electron window icon.
- Consolidated the test preview to render the actual app UI and added coverage for the image assets and safe disabled state.
- `npm test` passed (3 tests); `git diff --check` passed.

## 2026-10-03 — Windows Electron/WireGuard prototype scaffold

- Operator selected Windows via Electron if feasible and authorized selection of a free VPN engine; recorded Electron and official WireGuard for Windows evaluation in ADR-0001.
- Added a runnable Electron UI with context isolation, sandboxing, Node disabled in the renderer, a disabled connect button, and explicit no-protection messaging. No tunnel integration or WireGuard installation was performed.
- Added a locked npm setup, basic automated checks, and Windows NSIS packaging configuration.
- `npm ci` and `npm test` passed (2 tests); Electron and packaged UI launch smoke tests succeeded. Built an unsigned `release/vtv Setup 0.1.0.exe`; signing and release policy remain unresolved.
- Updated the task charter and documented security/product gates. This is not a functional VPN client.

## 2026-10-03 — VVTV-0001 neutral development workspace baseline

- Inspected the proposed development plan and confirmed that OS, VPN engine, framework, and distribution choices are still open; did not generate a platform-specific client or install runtime dependencies.
- Added root EditorConfig and build-output ignores, and documented locally available tool versions and the decision gate in `DEVELOPMENT_WORKSPACE.md`.
- Updated workspace/project navigation and observed status; this does not establish a runnable client or change the open product/security decisions.

## 2026-10-03 — VVTV-0001 docs-first VPN baseline started

- Prepared a Draft task charter to establish and approve a bounded VPN-client product/security baseline; did not claim its ID because this session is not on the default branch.
- Made the product/platform/protocol unknowns explicit and separated product intent, verified behavior, observed status, and decision records.
- No application implementation or runtime behavior was added. Operator decisions and default-branch task-ID claim remain outstanding.

## Bootstrap

- Created by A008 project bootstrap.
