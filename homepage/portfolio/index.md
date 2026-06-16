# Portfolio — System Design & Production Engineering

## Backend & DevOps Engineer
Scalable systems, cloud infrastructure, event-driven architectures. 5 years building production-grade platforms for real-world loads. Currently targeting senior-level roles and high-value architecture engagements.

---

## Engineering Summary

I design and operate production systems end-to-end — from distributed backend services to containerized infrastructure with full observability. My work consistently focuses on horizontal scalability, explicit failure handling, and operational clarity.

Rather than stacking tools, I choose architecture decisions that reduce operational burden while meeting actual reliability requirements. Every system I build is designed to be observed, recovered, and iterated on under real traffic.

---

## Flagship Systems

**1. DevSecOps CI/CD Pipeline**
State-driven delivery pipeline unifying Redmine, GitLab, Jenkins, security validation, and Docker-based isolated environments. Enforces quality gates before production release with full SDLC traceability.
_Tech: Jenkins, GitLab, Cypress, Newman, JMeter, SonarQube, Snyk, Docker_

**2. Distilled Content Intelligence Platform**
Distributed extraction platform processing 50+ government portals. Queue-based Playwright workers with ETL pipelines yield automated ~5-minute processing cycles with 20 parallel workers — replacing hours of manual effort.
_Tech: Node.js, Playwright, Redis, BullMQ, ETL_

**3. Cloud Infrastructure Stack — AWS IaC**
Production environment provisioned as a single-command deployment. CloudFormation-based definition of ECS Fargate, networking, IAM, Secrets Manager, and observability pipeline — reproducible across dev, staging, and production.
_Tech: AWS CloudFormation, ECS Fargate, Terraform, Docker_

**4. Event-Driven Processing Platform**
Asynchronous event pipeline with SNS/SQS buffering, background ECS workers, Redis pub/sub for real-time push, and full trace chain from API to worker via OpenTelemetry. Built with explicit failure isolation, circuit breakers, and DLQ handling.
_Tech: Node.js, Express, ECS Fargate, SNS, SQS, MongoDB, Redis, OpenTelemetry, X-Ray, Prometheus, Loki_

---

## Application & Product Systems

**Tax Rebate Processing Platform**
Workflow engine handling identity verification, document processing, configurable tax calculations, multi-stage approval, and refund reconciliation — replacing forms and spreadsheet tracking.

**Handyman Marketplace**
Full-stack platform with real-time workflows, authentication, payments, and scalable backend infrastructure.

**Virtual Office — Real-Time Collaboration**
Presence-based workspace with dynamic user states and WebSocket event delivery across distributed clients.

**Nutrifactor — Mobile Commerce**
Headless Shopify integration with React Native, real-time inventory sync, and order management.

**SaaS Systems (Specialized)**
_Briefly_ (multi-tenant workspace) and _CopyFlow_ (document lifecycle with strict state transitions and role-based access control).

**Supporting Engineering Work**
Automation utilities, internal tooling, Lighthouse-optimized Gatsby sites, Google Apps Script automations, and Figma-to-code implementations.

---

## Engineering Capabilities

**Cloud & Platforms**
AWS (ECS Fargate, Lambda, EKS, VPC, IAM, Secrets Manager, CloudWatch, X-Ray), Linux infrastructure

**Backend & Distributed Systems**
Node.js / Express / NestJS, Python / FastAPI, REST & GraphQL, queue-driven worker fleets, idempotent processing, circuit breakers, SQS/EventBridge/Kafka

**Infrastructure & Delivery**
Docker, Kubernetes, Terraform, CloudFormation, GitHub Actions, GitLab CI/CD, zero-downtime deployment

**Data & Observability**
MongoDB, PostgreSQL, DynamoDB, Redis, Prometheus, OpenTelemetry, Loki, distributed tracing

**Frontend Integration**
React, Next.js, TypeScript, React Native, Server-Sent Events, real-time client patterns

---

## How I Design Systems

* Architecture decisions are load-driven, not tool-driven.
* Start lean, scale horizontally only when the traffic pattern justifies it.
* Explicit failure handling is a first-class concern — idempotency, DLQs, bounded retries, and circuit breakers from day one.
* Observability is designed in at every boundary, not retrofitted.
* Infrastructure is expressed as code — reproducible, version-controlled, and reviewable.

---

## Measurable Impact

- Designed distributed scraping platform with **20 parallel workers** — **~5-minute batch cycles**
- Reduced environment provisioning to a **single-command deployment** using IaC
- Built stateless architectures enabling **seamless horizontal scaling** with zero downtime
- Implemented unified observability stack that **reduced mean time to detection**

---

## Engage

Available for senior backend/DevOps contracts, system design consulting, and AWS architecture reviews.

**Upwork** — Direct engagement for architecture and platform work  
**LinkedIn** — Professional background and endorsements  
**Contact** — Open to senior-level full-time roles and select retainer engagements
