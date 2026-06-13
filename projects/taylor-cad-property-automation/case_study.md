# Taylor CAD – Property Data Extraction & Automation System

---

# 1. Client-Facing Summary (Business View)

## Problem This System Solves

Real estate and property assessment data from public portals is often:

* spread across paginated and dynamic web interfaces
* not available via bulk export APIs
* hidden inside JavaScript-driven UI components
* difficult to extract consistently at scale
* time-consuming and error-prone when done manually

This makes large-scale property data collection inefficient and unreliable.

---

## Solution Delivered

I built a **fully automated property data extraction system** that collects structured real estate records from the Taylor CAD public assessment portal.

The system:

* navigates dynamic web interfaces like a real user
* extracts property data from listing and detail pages
* handles JavaScript-heavy UI components
* processes deeply nested property information
* converts unstructured web data into structured datasets
* exports clean data into Excel for analysis

It transforms a manual inspection process into a **repeatable data pipeline system** .

---

## Business Impact

* eliminated manual property data collection effort
* enabled large-scale structured dataset generation
* improved data consistency and accuracy
* reduced time required for property record compilation
* enabled downstream analytics and reporting workflows
* made previously inaccessible data usable at scale

---

## What This System Replaces

* manual browsing and copying of property records
* spreadsheet-based data entry workflows
* repetitive inspection of government property portals
* ad-hoc scraping scripts with no recovery mechanism

---

# 2. System Overview (Engineering View)

## System Problem

The Taylor CAD portal presents structural challenges:

* no bulk export API
* dynamic JavaScript-based rendering (Kendo UI grids)
* paginated subdivision-level navigation
* lazy-loaded property details
* inconsistent DOM structure across pages

This system solves it through a **state-driven browser automation pipeline** .

---

## System Architecture

The system operates as a multi-stage extraction pipeline:

Subdivision Search
→ Property List Extraction
→ Property Detail Navigation
→ Data Parsing
→ Normalization
→ Excel Export
→ Checkpoint Update

---

# 3. State Model (Core System Abstraction)

## Processing State Lifecycle

Start / Resume
→ Processing Subdivision
→ Extracting Property List
→ Scraping Property Details
→ Saving Checkpoint
→ Completed

---

## Core State Mechanism

The system maintains:

* processed subdivisions
* processed property IDs
* checkpoint persistence layer

This ensures:

* no duplicate extraction
* safe recovery from failures
* resumable execution across runs

---

## Why State Model Matters

This transforms the system from:

> simple scraping script

into:

> fault-tolerant data extraction pipeline

---

# 4. System Flow (Execution Behavior)

Subdivision Selection
→ Listing Page Parsing
→ Property Row Extraction
→ Detail Page Navigation
→ Lazy Load Triggering
→ Structured Data Extraction
→ Excel Write Operation
→ Checkpoint Save
→ Next Subdivision

---

# 5. Core Components

## Browser Automation Engine

* built using Playwright
* simulates real user navigation
* handles modal interactions and pagination
* manages dynamic UI behavior

---

## Resilient Parsing Layer

* extracts data from`onclick` handlers and DOM events
* fallback CSS selector strategies
* handles Kendo UI grid structures

---

## Deep Detail Scraper

* navigates to individual property pages
* triggers lazy-loaded sections via scroll simulation
* extracts structured financial and ownership data

---

## Data Normalization Engine

* standardizes inconsistent field formats
* structures property metadata
* aligns financial + physical attributes into unified schema

---

## Checkpoint System

* JSON-based state persistence
* tracks completed subdivisions and properties
* enables crash recovery and incremental execution

---

## Excel Export System

* structured spreadsheet generation
* column formatting and alignment
* incremental append-safe writes using OpenPyXL

---

# 6. Engineering Decisions

* browser automation chosen over API simulation due to UI restrictions
* checkpoint-based recovery to handle long-running extraction jobs
* deep navigation approach instead of shallow listing scraping
* DOM-event-based extraction for reliability over static selectors
* structured normalization layer to handle inconsistent data formats
* incremental Excel writing to avoid memory and data loss issues

---

# 7. Outcome

The system enables:

* automated extraction of large-scale property datasets
* reliable handling of dynamic government web portals
* consistent structured dataset generation
* elimination of manual data collection workflows
* fault-tolerant long-running scraping operations
* scalable data pipeline for real estate intelligence use cases

---

# 8. Technologies Used

* Python
* Playwright
* BeautifulSoup
* OpenPyXL
* JSON-based checkpoint system
