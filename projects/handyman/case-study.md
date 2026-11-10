# Handyman Marketplace System (SaaS Product Platform)

## Business Impact

- Structured and predictable hiring workflow reducing transaction friction
- Improved trust through verification systems and review mechanisms
- Higher quality service matching through system-controlled rules
- Reduced spam and low-quality provider interactions
- Scalable marketplace behavior through state-driven design
- Subscription-based visibility and prioritization control

## Engineering Challenges

- Traditional listing platforms lacking workflow control and trust enforcement
- Need for multi-actor coordination between clients, providers, and system
- Lack of quality control mechanisms for service matching
- Missing trust signals for provider verification
- Inefficient communication scoped to job/offer context

## Architecture Overview

The system is a multi-actor state transition engine with four primary actors: Client (creates demand), Craftsman (supplies service offers), Admin (controls verification and trust), and System (enforces state transitions).

The job state machine enforces controlled progression: Created → Open → Negotiation → Locked → Execution → Completed → Archived. Additional lifecycles include Offer (Created → Pending → Accepted/Rejected → Withdrawn), Craftsman (Unverified → Verified → Blocked/Declined), and Subscription (Inactive → Pending → Active → Expired).

## Key Engineering Decisions

- State-driven design modeling service fulfillment as controlled workflow
- Rule-based matching engine (location, service category, verification state, subscription status, trust score)
- Subscription as visibility and prioritization control mechanism
- Trust system as first-class constraint embedded into matching logic
- Communication system scoped to job/offer context with state-bound messaging
- Real-time communication via Socket.io with event-driven updates

## Technologies

Next.js, TypeScript, Redux, Socket.io (Node.js), MongoDB
