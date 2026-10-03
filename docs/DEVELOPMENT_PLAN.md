# vtv Development Plan

Status: Proposed; product/platform decisions remain open.

## Product intent

Build a genuinely small VPN client: a clear connect/disconnect experience around a
proven VPN engine, with as little custom networking code and operational
complexity as possible. “Thin” means a small, auditable client—not reduced
security, privacy, or failure handling.

## Decisions required before implementation

1. Choose one initial target OS and distribution model.
2. Confirm the threat model, user persona, and whether this is personal, team,
   or managed access.
3. Select a VPN protocol and existing implementation. Prefer a maintained,
   independently reviewed engine (evaluate WireGuard first); do not invent a
   protocol or cryptography.
4. Decide how users obtain credentials/configuration, how endpoints are
   operated, and who is responsible for availability and support.
5. Define telemetry/privacy defaults, update/signing policy, and licensing
   constraints for any bundled engine.

Record consequential choices as ADRs before they become implementation
assumptions. Until resolved, protocol, OS, backend, and account model are not
committed decisions.

## Proposed delivery sequence

### 0. Discovery and constraints

- Interview representative users and define the primary use case.
- Document supported platform, network environments, expected user expertise,
  and explicit non-goals.
- Write a concise threat model and privacy/data-retention statement.
- Compare candidate engines for platform support, privilege requirements,
  maintenance, licensing, configuration format, and testability.
- **Gate:** approve one OS, protocol/engine, configuration flow, and operational
  owner; capture decisions in ADRs.

### 1. Technical proof of concept

- Verify tunnel establishment, routing, DNS behavior, and disconnect cleanup
  using the selected engine on the target OS.
- Exercise sleep/wake, network changes, captive portals, and repeated connect /
  disconnect cycles.
- Confirm the minimum required OS privileges and installation footprint.
- **Gate:** demonstrate reliable tunnel lifecycle and document remaining risks;
  no custom packet transport or cryptographic implementation.

### 2. Thin-client MVP

- Deliver a focused UI with explicit connection state, connect/disconnect,
  endpoint/profile selection, and actionable error messages.
- Import or provision a profile through the approved flow; store secrets using
  the platform’s secure storage and never log credentials or private keys.
- Delegate tunnel creation to the selected engine / OS integration.
- Handle reconnect and shutdown predictably. Show whether traffic is protected;
  never present a failed or partial tunnel as connected.
- Add a kill switch only if required by the approved threat model and supported
  reliably by the target OS; otherwise disclose the protection boundary clearly.
- Provide signed installation/update artifacts and a minimal support bundle that
  excludes secrets and traffic contents.
- **Gate:** a new user can install, configure, connect, verify protected traffic,
  disconnect, and recover from a failed connection using documented steps.

### 3. Security, reliability, and release readiness

- Review privilege boundaries, secret handling, configuration validation,
  update integrity, dependency provenance, and log redaction.
- Test DNS and IPv4/IPv6 routing for leaks during connect, reconnect, failure,
  and disconnect; test the stated kill-switch behavior where applicable.
- Run automated lifecycle, malformed-config, network-transition, and regression
  tests on the supported OS versions, plus a manual release checklist.
- Publish privacy/support documentation, known limitations, rollback steps, and
  a vulnerability-reporting contact.
- **Gate:** resolve release-blocking security findings, verify signed artifacts,
  and pass the agreed platform test matrix.

### 4. Operate and improve

- Monitor only the minimum operational signals approved in the privacy policy.
- Triage security reports and compatibility regressions; keep the VPN engine and
  dependencies within supported versions.
- Revisit platform expansion only after the first platform is stable and the
  support/update burden is understood.

## Initial acceptance criteria

- One explicitly supported OS and one documented setup path.
- Uses an established, maintained VPN implementation; no custom protocol or
  cryptographic primitives.
- Connection state reflects the actual tunnel state, with understandable errors.
- No credentials, private keys, or traffic content in logs or support bundles.
- DNS/routing and failure behavior are tested against the approved threat model.
- Signed release artifacts, dependency/license inventory, and rollback procedure
  exist before public distribution.
- Known limitations and privacy behavior are visible to users.

## Out of scope for the first release

- Building a VPN service/network or account-management backend unless discovery
  proves it is necessary for the chosen use case.
- Multi-platform support, team administration, billing, analytics, and advanced
  policy controls.
- Custom transport protocols, cryptography, stealth/censorship circumvention,
  or claims of anonymity.
- Promising a kill switch on platforms where it cannot be verified reliably.

## Principal risks and mitigations

| Risk | Mitigation |
| --- | --- |
| “Thin” scope omits essential leak/failure behavior | Agree threat model and failure-state requirements before implementation. |
| OS privilege and DNS/routing differences expand scope | Start with one OS; prove lifecycle and leak behavior in the prototype. |
| Engine, licensing, or packaging constraints emerge late | Evaluate maintenance, license, signing, and distribution in discovery. |
| Users infer stronger privacy than the client provides | State what the VPN protects, what it does not, and operator visibility. |
| Secret leakage through diagnostics or support | Redact by default; test logs and exported bundles for sensitive values. |

## Proposed completion evidence

The plan is ready for execution when the open decisions are resolved, the threat
model and MVP boundaries are approved, milestones have named owners, and each
release gate has an observable test or review artifact. This document is a
proposal, not evidence that a client or VPN service has been implemented.
