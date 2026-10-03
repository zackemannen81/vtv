# ADR-0001: Initial Windows prototype stack

- Status: Accepted for prototype only
- Date: 2026-10-03
- Decider: Operator (Rickard)

## Context

The operator directed that the initial target be Windows, Electron if feasible, and any free VPN engine. This permits creation of a UI/dev scaffold, but it does not settle user persona, service/deployment, configuration provisioning, threat model, privacy defaults, or public distribution.

## Decision

Use Electron with Node.js for the initial Windows desktop prototype. Evaluate the official WireGuard for Windows client/runtime as the VPN engine; do not implement a WireGuard protocol stack. Electron's UI must not invoke arbitrary shell commands or handle privileged tunnel operations directly. Any later engine integration must use a narrow, validated interface and preserve explicit disconnected/error states.

The official WireGuard installer is the initial integration/proof-of-concept route, not an engine bundled or controlled by this app. The prototype shall not claim that traffic is protected. Bundling, automating, or redistributing the engine requires separate privilege, licensing, signing, update, and threat-model review.

## Rationale

Windows and Electron were explicitly requested. WireGuard is a free, established VPN technology; the WireGuard for Windows project describes its Windows implementation and provides a signed installer. The project is licensed MIT. Using its official client avoids writing custom protocol or cryptographic code. No fee does not imply that the engine is already integrated or that this app provides VPN service.

## Consequences

- Electron/Node project setup can proceed on Windows.
- This scaffold is a UI shell only; it creates no tunnel and the connect action stays disabled.
- Before privileged automation, define how profiles are provisioned, how service lifecycle/errors are observed, credential/key storage and redaction, and reliable DNS/routing/failure behavior.
- Before distribution, decide whether to depend on an installed WireGuard client or bundle components; review licensing notices, administrator elevation, code signing, update provenance, and rollback.
- The existing security and product questions in `PROJECT_BRIEF.md` remain open.

## Sources

- WireGuard installation / official Windows download: https://www.wireguard.com/install/
- WireGuard for Windows project and MIT license: https://github.com/WireGuard/wireguard-windows
- Electron security guidance: https://www.electronjs.org/docs/latest/tutorial/security
