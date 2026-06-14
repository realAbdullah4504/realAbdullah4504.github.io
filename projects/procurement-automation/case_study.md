# Tender Discovery & Procurement Intelligence Platform

## Business Impact

* automated discovery of procurement opportunities across multiple portals
* significant reduction in manual monitoring effort
* faster identification of relevant tenders
* improved accuracy in filtering and classification
* centralized procurement intelligence database
* scalable monitoring across large number of sources
* continuous operation with minimal human intervention

---

## What This System Replaces

* manual tender tracking across portals
* spreadsheet-based opportunity monitoring
* fragmented scraping scripts per portal
* inconsistent procurement discovery workflows
* reactive instead of real-time monitoring systems

---

# 2. System Overview (Engineering View)

## System Problem

Procurement monitoring is fragmented due to:

* inconsistent portal structures
* unstructured and dynamic listings
* lack of standard data formats
* high manual effort for classification
* difficulty scaling across multiple portals

This system solves it using a **distributed, state-driven ingestion and processing pipeline** .

---

## System Architecture

The system operates as a multi-stage pipeline where procurement data flows through controlled processing states.

Portal Registry
↓
Seed URL Discovery
↓
Page Crawling
↓
Page Classification
↓
Tender Detection
↓
Data Extraction
↓
PCI & Relevance Scoring
↓
Document Enrichment
↓
Intelligence Repository

---

## Execution Planes

### 🔹 Control Plane

* portal registry management
* job creation and scheduling
* execution tracking and monitoring

### 🔹 Execution Plane

* Celery distributed task queues
* AWS ECS worker clusters
* parallel task execution system

### 🔹 Data Ingestion Plane

* Playwright-based crawling engine
* incremental portal discovery
* link traversal and filtering

### 🔹 Processing Plane

* tender classification engine
* structured data extraction system
* portal-specific parsing strategies

### 🔹 Intelligence Plane

* PCI-based relevance scoring system
* keyword classification engine
* opportunity prioritization layer

### 🔹 Persistence Plane

* MongoDB document storage
* normalized procurement intelligence records

---

# 3. State Model (Core System Abstraction)

The system uses a **job-based state lifecycle model** to track execution and ensure fault tolerance.

## Job Lifecycle

PENDING → PROCESSING → COMPLETED

## Failure Lifecycle

PENDING → PROCESSING → FAILED

---

## State Breakdown

Each job passes through structured stages:

* portal discovery
* listing detection
* data extraction
* relevance scoring
* enrichment
* storage

---

## State Enforcement Logic

* each job state is explicitly tracked
* failed jobs are isolated without breaking pipeline
* processing is resumable and observable
* no full pipeline re-execution required on failure

---

## Why State Model Matters

This allows the system to behave as:

* a**fault-tolerant distributed pipeline**
* not just a scraping script system
* but a**controlled execution engine for procurement intelligence**

---

# 4. System Flow

Job Creation → Celery Queue → ECS Worker Pool → Parallel Processing → Result Storage

---

## Execution Behavior

* each worker operates independently
* multiple portals processed in parallel
* listing and detail pages processed concurrently
* results aggregated into centralized repository

---

# 5. Core Components

## Strategy-Based Extraction System

Each portal uses a **pluggable extraction strategy** , allowing:

* support for heterogeneous portal structures
* extensibility without modifying core pipeline
* isolated parsing logic per portal type

---

## Distributed Worker Architecture

* Celery handles task distribution
* AWS ECS provides horizontal scaling
* workers process jobs independently

---

## State-Driven Pipeline

* every tender follows a defined lifecycle
* enables traceability and failure recovery
* supports partial reprocessing

---

## Control vs Data Separation

* control plane manages execution logic
* data plane handles storage and retrieval
* improves modularity and system clarity

---

# 6. Engineering Decisions

* horizontal scaling over vertical scaling for portal load variability
* strategy pattern for portal-specific extraction logic
* state tracking for fault tolerance and observability
* distributed worker execution for parallel processing
* separation of ingestion and processing layers for scalability

---

# 7. Outcome

The system enables:

* automated discovery of procurement opportunities across multiple portals
* scalable processing of high-volume unstructured data
* centralized procurement intelligence system
* reduced manual monitoring workload
* improved classification and filtering accuracy
* resilient distributed execution with failure recovery

---

# 8. Technologies Used

* Python
* Celery
* AWS ECS
* Playwright
* MongoDB
* Streamlit
* Docker
