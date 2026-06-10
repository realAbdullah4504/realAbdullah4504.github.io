# Multi-Source AI News Aggregator

## Overview

An AI-powered multi-source news aggregation platform that automatically classifies content into categories and presents a unified timeline for faster discovery and consumption. The system consolidates news from multiple external sources into a single intelligent interface with AI-based categorization, rather than functioning as a generic RSS reader or manual news clipper.

## System Problem

Users consume news from multiple independent platforms, leading to fragmented information across different sources, time-consuming manual browsing, lack of unified categorization or prioritization, and no centralized way to track or save relevant articles.

The system was built to aggregate, classify, and organize news into a single intelligent interface.

## System Architecture

The system follows a layered architecture:

### Input Layer

Web scraping from multiple news sources with structured extraction of article title, content, and metadata.

### Processing Layer

REST APIs for article ingestion and retrieval, with filtering logic for category and source-based queries.

### Intelligence Layer

AI-based classification model normalizing content into consistent categories: General, Sports, and Lifestyle.

### Output Layer

React-based timeline visualization with dynamic filtering, saved articles management, and responsive design for multi-device support.

## State Model

### Article Lifecycle

Raw (scraped) → Classified → Indexed → Displayed → Archived (if superseded)

### Category Assignment

Unclassified → General / Sports / Lifestyle (AI-assigned)

## System Flow

```
External News Sources
    ↓
Web Scraping
    ↓
Structured Extraction
    ↓
AI-Based Classification
    ↓
Indexed Repository
    ↓
Unified Timeline API
    ↓
Client-Side Filtering & Display
```

## Core Components

### Multi-Source Scraper

Web scraping pipeline built for structured metadata extraction from multiple news publishers. Handles heterogeneous page structures and extracts normalized article data.

### Classification Engine

AI-based model classifies articles into standardized categories (General, Sports, Lifestyle) with consistent normalization of content regardless of source.

### Unified Timeline

All articles from multiple sources displayed in a single chronological view with dynamic filtering by category and source.

### Saved Articles

Persistent bookmark system allowing users to save articles for later consumption with cross-device synchronization.

## Engineering Decisions

The system was designed as an intelligent content consolidation layer rather than a reader-only aggregation. AI-based classification was chosen over manual categorization to ensure consistent category assignment across heterogeneous sources. The REST API design supports scalable article ingestion and retrieval without coupling the scraper to the client.

## Outcome

The system reduces effort required to browse multiple news platforms, improves content discoverability through AI-based categorization, provides a unified experience for tracking and saving articles, and enables faster access to relevant news through filtering and timeline structure.

## Technologies

- React
- TypeScript
- Python (AI Classification & Scraping)
- Python Flask (API Layer)
- REST APIs
- Responsive UI Design

## Links

- Live Demo: https://news-consolidater.vercel.app/
