# Handyman Marketplace System (State-Driven Service Marketplace Engine)

A multi-actor service marketplace that manages demand and supply through structured state transitions of jobs, offers, trust signals, and subscriptions. It solves the core marketplace failures of unstructured discovery, weak trust, and manual negotiation by enforcing verified craftsman participation, subscription-gated visibility, and state-controlled workflows for service fulfillment.

## System Goal

A multi-actor service marketplace that manages service demand and supply through structured state transitions of jobs, offers, trust signals, and subscriptions.

The system is designed as a workflow engine for service fulfillment, not a listing platform.

## Core System Problem

Service marketplaces fail when:

- service discovery is unstructured
- hiring decisions are manual and trust is weak
- job negotiation is not state-controlled
- provider quality is not enforced
- there is no lifecycle for service execution

This system solves this by introducing:

A controlled lifecycle system for matching service demand with verified service providers.

## Actors in the System

The system is driven by four interacting actors:

- **Client** → creates demand (jobs)
- **Craftsman** → responds with offers
- **Admin** → controls trust and access
- **System** → enforces state transitions and visibility rules

## System State Model (CORE OF DESIGN)

This is the most important part.

### Job State
Created → Open → Negotiating → Locked (accepted offer) → Completed → Archived

### Offer State
Created → Pending → Accepted / Rejected → Withdrawn

### Craftsman State
Unverified → Verified → Blocked / Declined

### Subscription State
Inactive → Pending → Active → Expired

### Key Insight

The marketplace is not a CRUD system — it is a state transition engine over jobs and offers

## Core System Flow (Behavioral View)

### Demand Creation Flow

Client creates job → system validates → job enters OPEN state → job becomes discoverable to eligible craftsmen

### Supply Response Flow

Craftsmen observe open jobs → submit offers → system attaches offers to job → job enters NEGOTIATING state

### Matching Decision Flow

Client evaluates offers → selects one offer → system locks job → all other offers become inactive

### Execution Flow

Accepted offer becomes active contract → job transitions to COMPLETED after execution → review phase begins

### Trust Flow

After completion:
- client submits review
- system updates craftsman trust score
- future job visibility is affected by trust state

## Trust as a System Constraint

A key design decision:

Not all craftsmen are equal participants in the system

The system enforces constraints:

- only VERIFIED craftsmen can participate in job bidding
- subscription state affects visibility and opportunity access
- reviews modify future matching probability

This makes trust a first-class system state, not a UI feature.

## Matching System Logic (Core Behavior)

The system matches:

- job location (geo constraint)
- service category
- craftsman verification state
- rating history
- subscription eligibility

So matching is not search — it is:

a filtered state evaluation over supply and demand graphs

## Communication System Behavior

Messaging is not just chat.

It is:

a negotiation channel bound to job state

### Rules

- messages only exist within job or offer context
- message visibility depends on job state
- communication is invalid after job closure

## Subscription System Behavior

Subscription is not payment logic.

It is:

a gating mechanism that controls marketplace visibility

### Effects

- unlocks job access priority
- influences listing visibility
- affects matching exposure

## System Lifecycle Summary

The entire marketplace behaves as:

Demand Creation  
↓  
Supply Discovery  
↓  
Offer Negotiation  
↓  
State Lock (Contract)  
↓  
Execution  
↓  
Trust Update  
↓  
Future Matching Influence

## Core System Insight

This system is not:

- a job board
- a listing platform
- a CRUD marketplace

It is:

a state-driven marketplace engine where trust, availability, and negotiation continuously reshape system behavior

## Final System Design Summary

The Handyman Marketplace operates as a multi-actor state machine system where:

- Jobs represent demand states
- Offers represent negotiation states
- Craftsmen represent supply states
- Reviews and subscriptions modify future system behavior

The system's core complexity is not UI or APIs — it is:

maintaining consistent state transitions across distributed user interactions under trust constraints

## 🔗 Links

- Live Demo: https://handyman-service-esp.vercel.app/