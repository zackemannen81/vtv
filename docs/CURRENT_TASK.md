# Current Task

Task ID: VVTV-0001 (Draft; claim on the default branch before Ready)
Parent Task: None
Status: Draft
Owner: Rickard
Created: 2026-10-03
Last updated: 2026-10-03
Charter frozen at: Not frozen

## Task Summary

Establish the local workspace baseline and begin the operator-requested Windows Electron client scaffold, evaluating the official WireGuard for Windows implementation as the free VPN engine. This is a UI prototype only; no VPN behavior or protection claim is in scope.

## Task Charter

### Goal

Prepare a runnable, conservative Windows desktop development scaffold with a testable UI shell styled to the approved-for-this-mockup concept, while evaluating the official WireGuard for Windows implementation as the free VPN engine. This is a UI prototype only; no VPN behavior or protection claim is in scope.

### Primary Deliverable

Root workspace conventions, `docs/DEVELOPMENT_WORKSPACE.md`, a reproducible Electron project with testable UI shell and Windows packaging configuration, plus an ADR documenting stack choice and limits.

### In Scope

- Record the operator's selection of Windows/Electron and a free VPN engine in the plan/ADR.
- Set up Node/Electron local dependencies and lockfile; provide run, test, and Windows packaging scripts.
- Create a minimal Swedish UI that clearly states no VPN tunnel is configured and keeps Connect disabled.
- Use Electron context isolation, sandboxing, and disabled renderer Node integration; do not expose privileged operations or arbitrary commands.
- Update observed status, system behavior, workspace docs, file index, and journal.

### Out of Scope

- WireGuard installation, profile provisioning, tunnel management, privileged automation, credentials, DNS/routing control, kill switch, or claims of VPN protection.
- Final threat model, product/service model, public distribution, code signing, or production readiness.
- Custom VPN protocols or cryptographic code.

### Definition of Done

- `npm ci`, `npm test`, and packaged Electron UI launch are verified on the current Windows workspace.
- `npm run dist:win` produces a Windows NSIS installer; installer signature state and prototype-only limitations are documented.
- Build and run commands and integration limitations are documented.
- The UI does not present itself as protecting traffic; the connection action is disabled.
- An ADR records Electron and official WireGuard Windows evaluation with explicit integration and security gates.
- `git diff --check` and ignore-rule checks pass; task remains Draft because this branch is not the default branch.

### Minimum Verification Gates

- [x] Inspect development plan, repo guidance, and existing task state.
- [x] Verify Windows, Node/npm, Electron/WireGuard official sources and package availability.
- [x] Install locked local dependencies and verify reproducible `npm ci` setup.
- [x] Run automated tests and packaged Electron launch smoke test.
- [x] Build Windows NSIS installer; verify artifact is unsigned and not release-ready.
- [x] Update docs/status/index/journal and run whitespace/ignore-rule checks.
- [x] Run `npm test` after the visual refresh; verify PNG use and disabled Connect behavior.
- [x] Set up the repository baseline and prepare the Windows Electron UI shell with isolated/sandboxed renderer defaults.
- [x] Restyle the UI to the sandbox mockup reference using local PNG splash artwork and app icon, keeping the Connect control disabled and the no-protection limitation clear.
- [x] Record test results, current behavior, and the asset layout in relevant project docs.
