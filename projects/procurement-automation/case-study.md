# Tender Discovery & Procurement Intelligence Platform

## Business Impact

- Automated discovery of procurement opportunities across multiple government portals
- Significant reduction in manual monitoring effort through continuous operation
- Faster identification of relevant tenders with improved classification accuracy
- Centralized procurement intelligence database for scalable querying
- Continuous operation with minimal human intervention

## Engineering Challenges

- Inconsistent portal structures and unstructured, dynamic listings
- Lack of standard data formats across heterogeneous procurement sources
- High manual effort required for classification and filtering
- Difficulty scaling monitoring across large number of portals
- Need for fault-tolerant distributed processing of high-volume data

## Architecture Overview

The system operates as a multi-stage pipeline where procurement data flows through controlled processing states: Portal Registry → Seed URL Discovery → Page Crawling → Page Classification → Tender Detection → Data Extraction → PCI & Relevance Scoring → Document Enrichment → Intelligence Repository.

The system is structured into five execution planes: Control Plane (job creation and scheduling), Execution Plane (Celery distributed task queues on AWS ECS), Data Ingestion Plane (Playwright-based crawling engine), Processing Plane (tender classification and extraction), Intelligence Plane (relevance scoring), and Persistence Plane (MongoDB document storage).

## Key Engineering Decisions

- Distributed worker architecture using Celery and AWS ECS for horizontal scaling
- Strategy-based extraction system with pluggable portal-specific parsing strategies
- State-driven job lifecycle model (PENDING → PROCESSING → COMPLETED/FAILED) for fault tolerance
- Separation of control plane, execution plane, and data plane for modularity
- Checkpoint-based recovery for resumable processing without full pipeline re-execution

## Technologies

Python, Celery, AWS ECS, Playwright, MongoDB, Streamlit, Docker
