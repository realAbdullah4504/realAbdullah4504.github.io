# Handyman Marketplace System (SaaS Product Platform)

## Business Impact

* structured and predictable hiring workflow
* reduced friction in service discovery and negotiation
* improved trust through verification and reviews
* higher quality service matching through system-controlled rules
* reduced spam and low-quality provider interactions
* scalable marketplace behavior through state-driven design

---

## What This System Replaces

* unstructured freelance/service listing platforms
* manual negotiation between clients and providers
* trust-based informal hiring systems
* static directories of service providers

---

# 2. System Overview (Engineering View)

## System Problem

Traditional service marketplaces are CRUD-heavy systems with weak enforcement of:

* trust
* workflow control
* lifecycle management
* provider quality constraints

This system solves that by modeling the marketplace as a:

> **multi-actor state transition engine**

---

## System Architecture

The system operates as a **workflow engine for service fulfillment** , not a listing platform.

### Actors

* Client → creates demand (jobs)
* Craftsman → supplies service offers
* Admin → controls verification and trust
* System → enforces state transitions and rules

---

## Core System Flow

Job Created → Open → Negotiation → Locked → Execution → Completed → Archived

---

## Offer Lifecycle

Created → Pending → Accepted / Rejected → Withdrawn

---

## Craftsman Lifecycle

Unverified → Verified → Blocked / Declined

---

## Subscription Lifecycle

Inactive → Pending → Active → Expired
---

# 3. State Model (Core System Abstraction)

The system is fundamentally a **multi-layer state machine** , where multiple entities interact through controlled transitions.

---

## Job State Machine

* Created → job initialized
* Open → visible to eligible craftsmen
* Negotiating → offers submitted
* Locked → one offer selected
* Completed → service executed
* Archived → lifecycle closed

---

## System Principle

> Every interaction in the system is state-constrained and permission-driven.

No action exists outside a valid state transition.

---

## Why This Matters

This design ensures:

* predictable marketplace behavior
* elimination of invalid interactions
* traceable service lifecycle
* enforcement of trust and subscription rules at system level

---

# 4. System Flow (Execution Behavior)

Client creates job
→ System validates constraints
→ Job enters OPEN state
→ Eligible craftsmen discover job
→ Craftsmen submit offers
→ Job enters NEGOTIATING state
→ Client selects offer
→ Job LOCKED to selected craftsman
→ Execution phase begins
→ Completion + review submitted
→ Trust score updated

---

# 5. Core Components

## Matching System

A rule-based matching engine that filters opportunities based on:

* location
* service category
* craftsman verification state
* subscription status
* trust score

👉 Not search-based — **state-filtered supply-demand evaluation**

---

## Communication System

* messaging is scoped to job/offer context
* communication is state-bound
* messages expire when job closes

👉 prevents uncontrolled off-platform negotiation flow

---

## Subscription System

Subscription is not payment logic — it is a:

> **visibility and prioritization control mechanism**

It affects:

* job exposure priority
* access to opportunities
* marketplace visibility ranking

---

## Trust System

Trust is a **first-class system constraint** , not a UI metric:

* only verified craftsmen can bid
* reviews modify trust score
* trust influences future matching

---

# 6. Engineering Decisions

* state machine over CRUD design for marketplace control
* multi-actor architecture for demand/supply separation
* subscription as visibility control instead of payment layer
* trust system embedded into matching logic
* real-time communication scoped to lifecycle states
* event-driven updates for job state transitions

---

# 7. Outcome

The system delivers:

* structured service marketplace with controlled workflows
* reduced negotiation and discovery friction
* trust-driven service ecosystem
* predictable lifecycle for every service interaction
* scalable multi-actor marketplace architecture
* improved service quality through enforced verification rules

---

# 8. Technologies Used

* Next.js
* TypeScript
* Redux
* Socket.io (Node.js)
* MongoDB
