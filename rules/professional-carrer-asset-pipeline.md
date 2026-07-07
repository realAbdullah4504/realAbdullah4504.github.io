# Professional Career Asset Pipeline

> **Objective**
>
> Maintain a single canonical source of truth for all professional information and automatically generate every career asset from it.

---

# Phase 0 — Professional Experience (Reality)

## Purpose

This is the real world.

Nothing should exist in your career system that did not originate here.

Examples:

* New job
* New freelance project
* New technology learned
* New certification
* New achievement
* New metric
* New architecture
* New business domain

### Source of Truth

**You**

---

# Phase 1 — Professional Profile Index (PPI)

## Purpose

The Professional Profile Index (PPI) is the **human-readable canonical document**.

Think of it as the documentation of your engineering career.

It should contain every professional fact.

Examples:

* Professional identity
* Positioning
* Engineering philosophy
* Engineering capabilities
* Technical skills
* Employment history
* Projects
* Business impact
* Engineering highlights
* Education
* Certifications
* Contact information
* Professional links
* Soft skills

## Rules

* Human-readable
* Comprehensive
* Well-structured
* Easy to update
* No missing information
* No invented information

### Owner

Human + AI

---

# Phase 2 — Master Resume JSON

## Purpose

Convert the PPI into a structured machine-readable database.

This becomes the **canonical career database**.

Every future asset is generated from this file.

The PPI is no longer used directly.

## Rules

* Structured JSON
* Machine-readable
* Presentation-independent
* Normalized
* Version-controlled
* Reusable
* Extensible

Examples of stored entities:

* Identity
* Positioning
* Skills
* Technologies
* Employment
* Projects
* Companies
* Certifications
* Education
* Contact
* Links
* Capabilities
* Achievements

### Owner

AI Generator

---

# Phase 3 — Validation

## Purpose

Verify the canonical database before using it.

## Validation Checklist

* Valid JSON
* Schema validation
* Required fields exist
* No duplicate entries
* Consistent IDs
* Correct references
* Valid dates
* No invented information
* Consistent formatting
* Stable structure

Never generate downstream assets from invalid data.

---

# Phase 4 — Asset Generation

## Purpose

Every professional asset is generated from the Master Resume JSON.

Never manually duplicate information across platforms.

Generated assets include:

* Resume / CV
* ATS Resume
* Portfolio Website
* LinkedIn Profile
* GitHub Profile
* GitHub README
* Upwork Profile
* Fiverr Profile
* Freelancer Profile
* Guru Profile
* Cover Letters
* Client Proposals
* Capability Statements
* Project Showcases
* Architecture Showcases
* Case Studies
* Professional Biography
* Executive Biography
* Service Pages

### Principle

One source.

Many outputs.

---

# Phase 5 — Portfolio Website

## Purpose

The portfolio is a presentation layer.

It is **not** the source of truth.

The website should consume the Master Resume JSON.

Example mapping:

Home
→ Identity

About
→ Positioning

Experience
→ Employment

Projects
→ Projects

Skills
→ Skills

Capabilities
→ Engineering Capabilities

Contact
→ Contact Information

The React components should simply render the structured data.

No duplicated content.

---

# Phase 6 — Platform Customization

## Purpose

Every platform presents the same professional identity differently.

Examples:

Resume

* Concise
* ATS-friendly
* Job-specific

Portfolio

* Rich project details
* Engineering depth
* Architecture

LinkedIn

* Professional branding
* Networking

GitHub

* Engineering focus
* Open source
* Technical credibility

Upwork

* Client outcomes
* Service offerings
* Trust

Fiverr

* Productized services
* Fast communication

Client Proposal

* Relevant experience
* Matching projects
* Business value

Cover Letter

* Motivation
* Relevant achievements
* Positioning

All content comes from the Master Resume JSON.

---

# Phase 7 — Deployment

## Purpose

Publish the generated assets.

Examples:

Portfolio
→ GitHub Pages

Resume
→ PDF

LinkedIn
→ Profile Update

GitHub
→ README Update

Freelance Platforms
→ Profile Update

Deployment should never require manual rewriting.

---

# Phase 8 — Maintenance Workflow

Whenever something changes professionally:

Examples:

* New job
* New project
* New certification
* New achievement
* New technology
* Promotion
* New architecture

Follow this sequence:

Professional Experience
↓

Update PPI
↓

Generate Master Resume JSON
↓

Validate JSON
↓

Generate Professional Assets
↓

Deploy

Never edit generated assets first.

Always update the source.

---

# Recommended AI Workflow

## ChatGPT

Use for:

* Maintaining the PPI
* Designing schemas
* Engineering documentation
* Career architecture
* Generating Master Resume JSON
* Reviewing generated assets
* Improving positioning

---

## Cursor

Use for:

* Portfolio development
* React implementation
* JSON integration
* TypeScript updates
* Component generation
* Refactoring
* Multi-file repository changes

---

## Claude (Optional)

Use for:

* Reviewing large documents
* Long-form analysis
* Alternative implementations
* Prompt validation
* Second-opinion reviews

---

# Engineering Philosophy

Treat your career like a software system.

The PPI is your documentation.

The Master Resume JSON is your database.

The portfolio is your frontend.

Your generators are your backend services.

Your professional platforms are deployment targets.

Never maintain multiple sources of truth.

Maintain one canonical source.

Generate everything else.

---

# Complete Pipeline

```text
Professional Experience
        │
        ▼
Professional Profile Index (PPI)
        │
        ▼
Master Resume JSON
        │
        ▼
Validation
        │
        ▼
Asset Generators
        │
        ├── Resume / CV
        ├── Portfolio Website
        ├── LinkedIn Profile
        ├── GitHub README
        ├── Upwork Profile
        ├── Fiverr Profile
        ├── Freelancer Profile
        ├── Guru Profile
        ├── Cover Letters
        ├── Client Proposals
        ├── Capability Statements
        ├── Project Showcases
        ├── Architecture Showcases
        └── Future AI Systems
        │
        ▼
Deployment
        │
        ▼
Maintenance
        │
        ▼
Repeat
```

---

# Core Principle

> **Update once. Generate everywhere.**

Every professional fact should exist only once.

Every professional asset should be generated from the canonical career database.

This eliminates duplication, maintains consistency across platforms, and allows your professional presence to evolve systematically as your career grows.
