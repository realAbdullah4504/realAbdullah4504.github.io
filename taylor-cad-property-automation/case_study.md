# Taylor CAD – Abilene Property Data Extraction System

## Positioning Statement

A fully automated property data extraction system built to collect, normalize, and export structured real estate records from the Taylor CAD public assessment portal into Excel for downstream analysis and reporting.

The system simulates real user interactions, handles dynamic web content, and ensures data consistency using checkpoint-based recovery.

---

## Problem Statement

The Taylor CAD portal does not provide a bulk export API for property records.

Data is distributed across:

* Paginated subdivision search results
* Dynamic JavaScript-driven grids
* Property detail pages loaded in the same tab
* Lazy-loaded tax and valuation sections

Manually collecting this data is slow, error-prone, and not scalable.

---

## Objective

To build a system that:

* Automates end-to-end property data extraction
* Handles dynamic frontend (Kendo UI + JS modals)
* Extracts structured financial and ownership data
* Ensures resumability on failure (checkpointing)
* Exports clean dataset to Excel for analysis

---

## System Overview

The system continuously monitors and extracts property records from the Taylor CAD public assessment portal.

When a subdivision is selected, the workflow searches property listings, navigates to individual property detail pages, extracts structured data, and exports the results to Excel.

The workflow uses checkpoint-based state management to ensure reliable execution and prevent duplicate processing.

---

## Core Workflow

```text
Subdivision Search
      ↓
Property List Extraction
      ↓
Property Detail Scraping
      ↓
Data Parsing
      ↓
Excel Export
      ↓
Checkpoint Save
      ↓
Next Subdivision
```

---

## Workflow State Management

The system tracks processing progress using explicit workflow states.

```text
Start / Resume
      ↓
Processing Subdivision
      ↓
Extracting Properties
      ↓
Scraping Details
      ↓
Saving Checkpoint
      ↓
Completed
```

This approach prevents duplicate data extraction and provides operational visibility into processing status.

---

## Core Capabilities

### Automated Browser Navigation

Built using Playwright to simulate real user interactions including subdivision modal navigation, pagination handling, and click-based property navigation.

### Resilient DOM Parsing

Primary extraction via `onclick` handlers in grid rows with CSS-based fallback selectors for robustness against UI changes.

### Deep Property Scraping

Each property is resolved via direct navigation to detail pages, followed by staged scroll simulation to trigger lazy-loaded sections, and full HTML parsing via BeautifulSoup.

### Structured Data Extraction

Extracts owner details, property metadata, financial data, physical attributes, and deed history from dynamically loaded content.

### Resilient Checkpoint System

Stores `done_property_ids` and `done_subdivisions` in JSON checkpoint files to enable crash recovery, incremental processing, and safe re-runs without duplication.

### Structured Excel Export

Generates styled Excel output with auto column formatting and append-only incremental writes using OpenPyXL.

---

## Engineering Highlights

* Event-driven browser automation workflow
* Metadata-based property identification
* Dynamic Kendo UI grid parsing
* Lazy-loaded content handling
* Adaptive table parsing for inconsistent structures
* Checkpoint-based recovery mechanisms
* Centralized data normalization
* Automated Excel report generation

---

## Results & Impact

The automation eliminated repetitive property data collection tasks and standardized the extraction process.

Benefits include:

* Reduced manual effort
* Faster data collection
* Consistent data formatting
* Reduced risk of missed records
* Improved operational visibility
* Scalable handling of large property datasets

---

## Technologies Used

* Python
* Playwright
* BeautifulSoup
* OpenPyXL
* JSON Checkpointing System

---

## Final Summary

This project demonstrates the automation of large-scale property data extraction workflows by combining browser automation, resilient parsing, checkpoint-based recovery, and structured data export into a repeatable operational process.
