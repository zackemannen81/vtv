# vtv — Very thin VPN

A Windows desktop UI prototype built with Electron. **This is not a working VPN client:** it does not create a tunnel or protect network traffic. The Connect button is intentionally disabled. WireGuard for Windows is only an evaluated engine candidate; it is not installed, bundled, invoked, or integrated.

## Requirements

- Windows
- Node.js and npm

## Run locally

```powershell
npm ci
npm start
```

## Tests and Windows installer

```powershell
npm test
npm run dist:win
```

The installer is written to `release/` and is unsigned; use it only for local prototype testing. Signing and distribution requirements are not established.

## Project notes

- [Current status](docs/CURRENT_STATUS.md)
- [Development setup and integration gates](docs/DEVELOPMENT_WORKSPACE.md)
- [Product brief and open decisions](docs/PROJECT_BRIEF.md)
- [Architecture decision](docs/adr/ADR-0001-windows-electron-wireguard.md)

Do not use this prototype to infer VPN protection. Tunnel management, profiles, credentials, routing/DNS controls, and leak/failure handling are not implemented.
