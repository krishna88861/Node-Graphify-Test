# Graph Report - .  (2026-05-29)

## Corpus Check
- Corpus is ~109 words - fits in a single context window. You may not need a graph.

## Summary
- 13 nodes · 10 edges · 3 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 9 · imports_from: 1


## Input Scope
- Requested: all
- Resolved: all (source: configured-default)
- Included files: 4 · Candidates: recursive
- Excluded: 0 untracked · 0 ignored · 0 sensitive · 0 missing committed
## God Nodes (most connected - your core abstractions)
1. `express` - 1 edges
2. `cors` - 1 edges
3. `aiRoutes` - 1 edges
4. `app` - 1 edges
5. `OpenAI` - 1 edges
6. `client` - 1 edges
7. `openai` - 1 edges
8. `router` - 1 edges
9. `{ generateCompletion}` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.40
Nodes (3): client, OpenAI, openai

### Community 1 - "Community 1"
Cohesion: 0.40
Nodes (4): aiRoutes, app, cors, express

### Community 2 - "Community 2"
Cohesion: 0.67
Nodes (2): { generateCompletion}, router

## Knowledge Gaps
- **9 isolated node(s):** `express`, `cors`, `aiRoutes`, `app`, `OpenAI` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 2`** (2 nodes): `{ generateCompletion}`, `router`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `express`, `cors`, `aiRoutes` to the rest of the system?**
  _9 weakly-connected nodes found - possible documentation gaps or missing edges._