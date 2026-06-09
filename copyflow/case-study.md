# CopyFlow — School Submission & Print Workflow System

## 1. Overview

CopyFlow is a role-based document workflow system designed to manage lesson submissions, structured review processes, and print lifecycle operations within a single-school environment.

It centralizes academic coordination by enforcing a deterministic workflow where teacher submissions enter a controlled pending state and progress through secretary-managed review and print execution, ending in automated archival.

The system replaces fragmented manual submission and printing processes with a unified execution model for academic document lifecycle management.

## 2. Problem Statement

School administrative workflows suffer from fragmentation due to:

- Manual submission of lesson materials through informal channels
- Lack of structured print instruction handling
- Uncoordinated review and approval processes
- No unified visibility into submission status or lesson schedules
- Inefficient handling of print execution and document tracking
- Lack of role-based workflow enforcement

Existing systems fail to unify submission creation, structured review, print execution, and archival into a single controlled workflow pipeline.

## 3. System Design

CopyFlow is a deterministic workflow execution system that manages academic submissions through a state-driven lifecycle with role-based control.

All submissions begin in a Pending state after teacher creation. The Secretary acts as the primary workflow controller responsible for advancing submissions through review and print execution stages.

The system enforces strict role separation:

- **Admin** → system setup, user creation, class configuration
- **Teacher** → submission creation and document upload
- **Secretary** → workflow transitions, review, and print control
- **Principal** → read-only monitoring of academic activity

At its core, CopyFlow functions as a conditional state machine with branching approval paths, ensuring controlled progression from submission to archival.

### Submission State Machine

```
Pending → Censored → Print → Archived
   ↘────────────→ Print → Archived
```

### Key Rule

- Teacher-created submissions always start in Pending
- Secretary determines next state:
  - Pending → Censored (for review)
  - Pending → Print (direct approval)
- Print → Archived is fully automatic after execution

## 4. Core Modules

- **Role Engine** — enforces role-based access and permissions
- **Workflow Engine** — manages submission state transitions
- **Submission Engine** — handles creation and update of lesson submissions
- **Instruction Engine** — generates structured print instruction documents
- **Print Engine** — executes print workflow and queue processing
- **Scheduling Engine** — manages class assignments and lesson planning
- **Archive Engine** — handles immutable storage of completed submissions

## 5. Key Flows

### A) Teacher Flow

Teacher creates lesson submission → system sets status to Pending → uploads documents → configures print details → submission enters workflow queue

### B) Secretary Flow

Secretary reviews Pending submissions → decides path:
- Move to Censored (review required)
- Or directly approve to Print

From Censored → Print after review completion

System automatically archives submission after print execution

### C) Principal Flow

Principal views daily lesson sheet → toggles weekly calendar → opens submission details → monitors academic progress across classes

### D) Admin Flow

Admin creates school workspace → registers users (Teacher, Secretary, Principal) → assigns roles → configures class structure and lesson schedules → oversees system setup

## 6. System Execution Model

### Role Responsibility Model

CopyFlow enforces strict role boundaries:

- **Teacher** → creates submissions (entry point only)
- **Secretary** → controls all workflow transitions
- **Principal** → monitors system (read-only access)
- **Admin** → manages system structure only

No role can bypass or override another role's workflow authority.

### State Transition Rules

Submissions follow a controlled conditional workflow:

- `Pending → Censored` → Secretary review path
- `Pending → Print` → direct approval path
- `Censored → Print` → post-review approval
- `Print → Archived` → automatic system finalization

### Invariants

- All submissions must originate in Pending state
- Backward transitions are strictly prohibited
- Archived submissions are immutable
- Print execution automatically triggers archival
- Secretary is the only workflow transition authority

### Workflow Execution Logic

1. Teacher creates submission → system assigns Pending state
2. Secretary receives pending queue
3. Secretary selects action path:
   - Review → Censored
   - Direct approve → Print
4. System validates role permissions and executes state transition
5. Print engine executes job when state = Print
6. System automatically transitions submission → Archived
7. Audit event is recorded at every step

### Print Instruction Generation

When a teacher submits content, the system generates a structured print instruction package, including:

- print format specifications
- quantity and material settings
- attached documents
- formatting rules for printing

This instruction package is mandatory before entering the Print state.

## 7. System Boundaries

### System Controls

- submission lifecycle management
- conditional workflow transitions
- print instruction generation
- scheduling and class assignment
- print execution and archival

### System Does NOT Control

- external communication tools (WhatsApp, email, etc.)
- third-party academic/grading systems
- external printing hardware beyond job dispatch
- manual file exports outside workflow rules

## 8. Outcome / Impact

CopyFlow replaces fragmented school administration with a deterministic workflow system where academic submissions follow a controlled conditional lifecycle.

It enables:

- structured submission processing starting from a Pending state
- flexible approval paths controlled by Secretary
- automated generation of print instruction documents
- reliable print execution with automatic archival
- role-based governance of academic workflows
- complete traceability of every submission state change

This transforms school operations from manual coordination into a rule-driven execution system with conditional state transitions and full auditability across all academic workflows.
