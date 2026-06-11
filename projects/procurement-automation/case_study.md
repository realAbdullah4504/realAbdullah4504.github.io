# Tender Discovery & Procurement Intelligence Platform

## Overview

A distributed procurement intelligence system that continuously discovers, monitors, extracts, and enriches tender opportunities from heterogeneous government and institutional procurement portals. The system transforms unstructured procurement data into structured, searchable intelligence using horizontally scalable worker-based execution.

## System Problem

Procurement monitoring across multiple government and institutional portals is fragmented due to inconsistent portal structures and layouts, distributed and unstandardized procurement listings, high noise from irrelevant content, manual effort required for classification and filtering, difficulty extracting structured data from dynamic pages and PDFs, and scalability limitations in manual monitoring workflows. This creates inefficiency in identifying relevant procurement opportunities and tracking them consistently at scale.

## System Architecture

The system operates as a multi-stage distributed pipeline where procurement data flows through controlled processing states.

```
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
```

Execution is organized into four functional planes:

- **Control Plane** — portal registry management, job creation and scheduling, execution tracking and monitoring
- **Execution Plane** — Celery distributed task queues, AWS ECS worker clusters, parallel task execution
- **Data Ingestion Plane** — Playwright-based crawling engine, incremental portal discovery, link traversal and filtering
- **Processing Plane** — tender classification engine, structured extraction system, portal-specific parsing strategies
- **Intelligence Plane** — PCI DSS relevance scoring, keyword-based classification, opportunity prioritization
- **Persistence Plane** — MongoDB document storage, normalized tender intelligence records

## State Model

### Job Lifecycle

PENDING → PROCESSING → COMPLETED

### Failure Lifecycle

PENDING → PROCESSING → FAILED

Each job passes through stages tracked for observability and recovery: portal discovery, listing detection, extraction, PCI scoring, and enrichment.

## System Flow

Horizontal scalability is achieved through independent worker execution units:

Job Creation → Celery Queue → ECS Worker Pool → Parallel Processing → Result Storage

Each worker operates independently, enabling parallel portal processing, concurrent listing page extraction, and distributed detail-page enrichment.

## Core Components

### Strategy-Based Extraction System

Portal-specific extraction logic is isolated into interchangeable strategies, enabling extensibility without modifying the core pipeline.

### Distributed Worker Architecture

Celery + ECS enables horizontal scaling and independent execution of crawling and processing tasks.

### State-Driven Pipeline Design

Each tender moves through explicit processing states, enabling traceability and fault tolerance.

### Control vs Data Plane Separation

Execution logic is decoupled from data storage and portal configuration, improving system modularity.

## Engineering Decisions

Extensibility is prioritized through strategy-based extraction, allowing new portal types to be supported without pipeline changes. Horizontal scaling is preferred over vertical for handling variable portal load. State tracking at every processing stage enables failure recovery and observability without replaying entire crawls.

## Outcome

The system delivers automated procurement discovery across multiple portals with significant reduction in manual monitoring effort, scalable processing of large-volume procurement data, improved accuracy in tender classification and filtering, and a centralized intelligence repository for procurement opportunities. Reliable distributed processing with failure recovery mechanisms supports continuous operation across heterogeneous portal sources.

## Technologies

- Python
- Celery
- AWS ECS
- Playwright
- MongoDB
- Streamlit
- Docker

