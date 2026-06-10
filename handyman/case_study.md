# Handyman Marketplace System

## Overview

A multi-actor service marketplace that manages demand and supply through structured state transitions of jobs, offers, trust signals, and subscriptions. The system solves core marketplace failures of unstructured discovery, weak trust, and manual negotiation by enforcing verified craftsman participation, subscription-gated visibility, and state-controlled workflows for service fulfillment. It is designed as a workflow engine for service fulfillment, not a listing platform.

## System Problem

Service marketplaces fail when service discovery is unstructured, hiring decisions are manual with weak trust, job negotiation is not state-controlled, provider quality is not enforced, and there is no lifecycle for service execution. This introduces friction in matching service demand with verified service providers, leading to inconsistent outcomes, trust degradation, and poor customer experience.

## System Architecture

The marketplace operates as a multi-actor workflow engine with four interacting roles:

- **Client** — creates demand (jobs)
- **Craftsman** — responds with offers
- **Admin** — controls trust and access
- **System** — enforces state transitions and visibility rules

The marketplace is not a CRUD system — it is a state transition engine over jobs and offers.

## State Model

### Job State

Created → Open → Negotiating → Locked (accepted offer) → Completed → Archived

### Offer State

Created → Pending → Accepted / Rejected → Withdrawn

### Craftsman State

Unverified → Verified → Blocked / Declined

### Subscription State

Inactive → Pending → Active → Expired

The marketplace's core complexity is maintaining consistent state transitions across distributed user interactions under trust constraints.

## System Flow

### Demand Creation

Client creates job → system validates → job enters OPEN state → job becomes discoverable to eligible craftsmen.

### Supply Response

Craftsmen observe open jobs → submit offers → system attaches offers to job → job enters NEGOTIATING state.

### Matching Decision

Client evaluates offers → selects one offer → system locks job → all other offers become inactive.

### Execution

Accepted offer becomes active contract → job transitions to COMPLETED after execution → review phase begins.

### Trust Update

After completion, client submits review, system updates craftsman trust score, and future job visibility is affected by trust state.

## Core Components

### Matching System

The system matches jobs across geo constraints, service category, craftsman verification state, rating history, and subscription eligibility. Matching is not search — it is a filtered state evaluation over supply and demand graphs.

### Communication System

Messaging is a negotiation channel bound to job state. Messages only exist within job or offer context. Message visibility depends on job state. Communication is invalid after job closure.

### Subscription System

Subscription is a gating mechanism that controls marketplace visibility. It unlocks job access priority, influences listing visibility, and affects matching exposure rather than acting as payment logic.

### Trust System

Trust is a first-class system state, not a UI feature. Only verified craftsmen can participate in job bidding. Subscription state affects visibility and opportunity access. Reviews modify future matching probability.

## Engineering Decisions

The marketplace's core complexity is not UI or APIs — it is maintaining consistent state transitions across distributed user interactions under trust constraints. The system is designed as a state machine where jobs represent demand states, offers represent negotiation states, craftsmen represent supply states, and reviews and subscriptions modify future system behavior.

## Outcome

The system delivers a multi-actor state machine marketplace where state transitions across jobs, offers, craftsmen, reviews, and subscriptions continuously reshape platform behavior. Service execution becomes verifiable and traceable, reducing negotiation friction, enforcing quality standards, and building systemic trust through state-driven constraints rather than manual enforcement.

## Technologies

- Next.js
- TypeScript
- Redux
- Socket.io (Node.js)
- MongoDB

## Links

- Live Demo: https://handyman-service-esp.vercel.app/
