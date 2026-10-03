# Development workspace

## Current state

The repository has a Windows Electron UI scaffold, a committed npm lockfile, and security-focused renderer defaults. The screen explicitly states that no VPN tunnel is configured; Connect is disabled. The official WireGuard for Windows client/runtime is the selected engine candidate, but it is not automated, bundled, or invoked by this application. No service control, profile import, tunnel state, DNS/routing, credential storage, or protected-traffic behavior exists yet.

The product/security decisions that remain open are recorded in `PROJECT_BRIEF.md`; the initial stack direction and limits are in `adr/ADR-0001-windows-electron-wireguard.md`. The development plan remains the milestone reference. This prototype selection does not settle user, service/provider, account/configuration flow, threat model, privacy requirements, or distribution/update model.

## Local tool observations

Versions observed on 2026-10-03 before project setup:

| Tool | Version | Status |
| --- | --- | --- |
| Git | 2.53.0.windows.2 | Available |
| Node.js | v24.14.1 | Available |
| npm | 11.11.0 | Available |
| .NET SDK | 10.0.302 | Available (not used by this client) |
| Rust | 1.98.1 | Available (not used by this client) |
| Cargo | 1.98.0 | Available (not used by this client) |

Electron 44.5.1 and electron-builder 26.15.3 are project-local npm development dependencies, pinned by `package-lock.json`. No global tool was installed. The official WireGuard installer is available from the upstream download page; it has not been installed as part of this project setup.

## Commands

- `npm ci` — install exact dependencies from the lockfile.
- `npm start` — run the Electron UI locally.
- `npm test` — run the Node built-in test suite.
- `npm run dist:win` — build a Windows x64 NSIS installer in `release/`.

The current NSIS artifact is unsigned and is for local prototype testing only. Signing credentials, a release trust/update policy, and distribution requirements have not been established.

## Before VPN integration or distribution

1. Approve user/use case, service and profile-provisioning flow, threat model, privacy and support boundaries.
2. Decide whether the app requires a pre-installed official WireGuard client or redistributes controlled engine components; resolve licensing notices, elevation, update/signing, and rollback policy.
3. Design a least-privilege integration; never enable a renderer-triggered arbitrary shell command. Use a validated, narrow main/preload API and establish how actual tunnel state/errors are verified.
4. Implement and test credential/key handling and redaction, DNS/routing/leak behavior, connect/disconnect/reconnect, sleep/wake, network changes, shutdown and failure states before enabling Connect or making protection claims.
5. Define minimum supported Windows versions, code signing, reproducible release builds, and the release security checklist.

This is a runnable Windows UI prototype, not a VPN client and does not protect network traffic.
