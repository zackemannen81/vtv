# System Document

Durable behavior verified for vtv (Very thin VPN): a Windows Electron window can load the local UI. Its renderer runs with context isolation, Node integration disabled, and sandboxing enabled. The UI shows a disconnected state, disables Connect, and states that no VPN tunnel is configured and traffic is not protected. No WireGuard process, tunnel, privileged operation, or network traffic handling is implemented. See `DEVELOPMENT_WORKSPACE.md` for run/test commands and `adr/ADR-0001-windows-electron-wireguard.md` for the prototype decision and constraints.
