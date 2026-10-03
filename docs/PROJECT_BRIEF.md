# Project Brief

Status: Draft — product and security baseline not yet approved.
Authority: Product direction and approved requirements only. Implemented behavior belongs in `SYSTEMDOC.md`; observed repository state belongs in `CURRENT_STATUS.md`.

## Purpose

vtv (Very thin VPN) is a working project name. The product purpose and claims remain to be confirmed by the operator.

## Intended Users and Use Cases

- Status: Open.
- Confirm target users, environments, accessibility needs, and primary problem to solve.

## Product Boundary

- Target platforms: Open; do not assume desktop or mobile OS.
- MVP user experience and required features: Open.
- Distribution, update, and support model: Open.
- VPN protocol, service/provider, and deployment model: Open; assess maintained, documented options and record the decision in an ADR.

## Security and Privacy Baseline

Before implementation, approve a threat model and requirements covering at least: traffic and DNS routing/leaks (including IPv4/IPv6 where supported), tunnel startup/reconnect/shutdown and failure behavior, credential/key handling, privileged components, logs/telemetry, software updates and supply chain, and the service/provider trust boundary. State what the client can and cannot protect against. Do not make anonymity, no-logs, or leak-prevention claims without evidence and testable criteria. Do not design custom cryptography.

## Open Questions (Blocking Product Decisions)

- Which operating systems and minimum supported versions are required?
- Who are the intended users, and which concrete use cases define the MVP?
- Is this a client for an existing VPN service, a self-hosted deployment, or another model?
- What protocol/service constraints, account flows, and distribution requirements apply?
- What are the operator's privacy promises, threat assumptions, and unacceptable risks?

Track answers and sources in this brief or decision records. Unresolved items stay explicit; no platform, provider, protocol, or security guarantee is implied by the project name.
