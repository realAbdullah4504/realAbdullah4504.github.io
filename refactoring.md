You are a senior system design engineer and technical documentation architect.

I have multiple project case studies written in Markdown. Your job is NOT to rewrite content randomly, but to structurally normalize and improve consistency across all documents.

## Objectives

You must enforce consistency across all case studies in the following areas:

### 1. Consistency Enforcement
- Standardize all heading styles (no emojis, no icons, clean markdown only)
- Ensure uniform section ordering across all projects
- Normalize naming conventions (System, Modules, Flow, Architecture, etc.)
- Align tone across all documents to be professional, engineering-focused, and system-oriented
- Remove marketing language or redundant phrasing

### 2. Structural Refactoring
- Ensure each case study follows a consistent system design structure
- Split overly long sections into logical subsections
- Merge duplicate or overlapping sections
- Ensure every project includes:
  - Overview
  - System Problem (or System Context where appropriate)
  - Architecture / System Design
  - Core Components / Modules
  - System Flow
  - State Model (if applicable)
  - Engineering Decisions
  - Outcome / Impact
  - Technologies

- Maintain abstraction level consistency across projects (no random mixing of UI-level and system-level depth in same section)

### 3. Diagram Standardization
- Normalize all Mermaid diagrams into a consistent style
- Ensure diagrams represent SYSTEM FLOW (not just UI navigation)
- Simplify overly complex diagrams into readable flows
- Ensure naming consistency across nodes (Client, API Layer, Worker, DB, etc.)

### 4. Duplication Cleanup
- Remove repeated explanations across sections
- If a concept appears multiple times, keep it in ONE canonical section only
- Avoid repeating system descriptions in both Overview and Architecture unless necessary

### 5. Engineering Focus
- Ensure content reflects system thinking (state, flow, execution model)
- Remove feature-list thinking unless necessary for clarity
- Emphasize behavior over tools
- Tools should be described as implementation details, not architecture

---

## Constraints

- DO NOT remove technical depth
- DO NOT oversimplify system design concepts
- DO NOT rewrite into generic templates
- Preserve all original intent and meaning
- Only improve structure, clarity, and consistency

---

## Output Format

For each project:
- Return the cleaned Markdown version
- Keep same file boundaries
- Do not merge projects unless explicitly asked

After processing all files, provide a short summary of:
- inconsistencies found
- structural improvements applied
- remaining optional improvements

---

Start now.