# Task Workflow

Draft -> Ready -> In Progress -> Complete

- Every task starts in `docs/CURRENT_TASK.md`. Keep its summary, charter, status, dates, and checklist current; one bounded outcome per task.
- Draft is for discovery and negotiation. Resolve the goal, primary deliverable, scope, out-of-scope, definition of done, and minimum verification gates before Ready.
- Before Ready, claim the next identity in `docs/TASK_IDS.md` on the main branch. commit your claim and push directly to remote main. Do not reuse IDs. Record the frozen charter date and do not silently weaken gates after Ready.
- In Progress means implementation or agreed task work has begun. Update the task checklist as work proceeds; update `CURRENT_STATUS.md` for observed project state and `SYSTEMDOC.md` only for verified durable behavior.
- On completion, run and record the required checks, update relevant authoritative docs/indexes and `JOURNAL.md`, archive the completed task under `docs/finished/`, then reset `CURRENT_TASK.md` from its template for the next task. If blocked, document the condition and resume criteria in `docs/paused/`.
- Keep `PROJECT_BRIEF.md` as product intent/approved requirements, `SYSTEMDOC.md` as actual behavior, and ADRs as rationale for consequential decisions. Do not treat sandbox concepts as authority.
- VPN-specific gates should address threat model, traffic/DNS leak behavior, lifecycle/failure handling, secrets, privileges, telemetry, and update trust as relevant to the selected platforms. Validate claims against implementation and tests; never infer protection from intent.
