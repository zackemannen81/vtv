# Current Task

Task ID: VVTV-0001 (draft; claim on the default branch before Ready)
Parent Task: None
Status: Draft
Owner: Rickard
Created: 2026-10-03
Last updated: 2026-10-03
Charter frozen at: Not frozen

## Task Summary

The repository is an empty docs-first starter for vtv (Very thin VPN). Before implementation, establish a product brief and an evidence-based security baseline for a VPN client. Platform, protocol, deployment model, and user requirements are not yet known and must be confirmed rather than guessed.

## Task Charter

### Goal

Agree on a bounded first-release target and the security, privacy, and operational requirements that implementation must satisfy.

### Primary Deliverable

An approved product/security baseline in `docs/PROJECT_BRIEF.md`, with consequential technology and trust-boundary choices recorded as ADRs.

### In Scope

- Confirm target operating system(s), intended users, use cases, distribution model, and MVP UX.
- Evaluate VPN protocol/service options and document the selected approach and rationale; do not invent a protocol or cryptography.
- Define the threat model, trust boundaries, privacy/data-handling rules, and security requirements, including tunnel lifecycle, DNS/IP leak handling, credentials/key storage, updates, and failure behavior where applicable.
- Identify platform-specific privileges, service/helper requirements, and constraints.
- Record unknowns, rejected options, risks, and decisions with sources/evidence.

### Out of Scope

- Implementing the client, server, tunnel, installer, or management backend.
- Committing to a platform, protocol, provider, or privacy claim without operator approval and supporting evidence.
- Designing custom cryptography or making unsupported anonymity/security guarantees.

### Definition of Done

- The operator has approved the initial target users, platforms, use cases, and MVP boundary.
- The selected protocol/deployment approach and major trust boundaries are documented with rationale and references, or explicitly left as blocking open decisions.
- Security and privacy requirements are specific enough to become implementation and test criteria; unresolved risks have owners or follow-up tasks.
- `PROJECT_BRIEF.md`, `SYSTEMDOC.md`, `CURRENT_STATUS.md`, and relevant ADR/backlog indexes agree and distinguish facts, decisions, and open questions.
- The task identity is claimed in `TASK_IDS.md` on the default branch before the task transitions to Ready.

### Minimum Verification Gates

- [ ] Check every project/platform/protocol assertion against primary documentation or label it an assumption/open question.
- [ ] Review the threat model for traffic, DNS, IPv4/IPv6, credentials, logs/telemetry, crash/failure states, and update trust.
- [ ] Verify referenced docs and ADRs exist, indexes are current, and there are no contradictory decisions.
- [ ] Obtain operator approval of the product boundary and security baseline before marking Ready or Complete.
