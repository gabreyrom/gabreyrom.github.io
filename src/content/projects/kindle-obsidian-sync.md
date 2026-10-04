---
title: "Kindle Highlights to Obsidian"
summary: "Turns Kindle highlights into organized Obsidian notes, using AI to group ideas by theme and semantic matching to reduce duplicate content."
category: "Applied AI / Personal Knowledge Management"
technologies: ["Python", "Streamlit", "Gemini API", "ChromaDB", "Sentence Transformers", "Pydantic"]
repoUrl: "https://github.com/gabreyrom/kindle-obsidian-sync"
highlights:
  - "Book overview and linked thematic notes"
  - "Semantic duplicate detection scoped to each book"
  - "Structured AI outputs with rate limiting and retries"
featured: true
order: 6
draft: false
caseStudy: true
---

## Problem

Kindle highlights accumulate as fragmented excerpts, making them difficult to organize and revisit. Exported as a single running file, they mix books together, repeat passages that were highlighted more than once, and lose the connections between related ideas.

## Contribution

Personal project for turning reading highlights into a usable Obsidian knowledge base: a pipeline that parses Kindle exports, organizes highlights by theme, and writes linked Markdown notes into a local vault.

## Approach

1. **Parsing:** reads Kindle's `My Clippings.txt` export, normalizes book titles, and groups highlights by book.
2. **Thematic synthesis:** on a book's first sync, Gemini groups its highlights into a small set of themes and generates an overview note plus one linked Markdown note per theme.
3. **Book-scoped semantic matching:** on later syncs, the book's existing notes are embedded locally with Sentence Transformers and indexed in ChromaDB. Each incoming highlight is compared only against that book's notes, not the whole vault.
4. **Similarity routing:** based on its closest match, a highlight is discarded as a likely duplicate, added as new content, or — when it partly overlaps an existing note — sent to Gemini for an incremental merge.
5. **Structured outputs:** model responses are requested as JSON and validated with Pydantic before anything is written to the vault.
6. **API safeguards:** calls to Gemini go through a rate limiter, with retries and backoff when the API returns quota errors.
7. **Interface:** a Streamlit app for choosing a vault, importing highlights, selecting books, and reviewing generated notes.

## Supported functionality

For each book, the tool creates a folder in the vault containing:

- An `00 - Overview.md` note with metadata, a short synopsis, and a table of contents linking to each theme note with Obsidian `[[wikilinks]]`.
- Theme notes with a core concept summary, key takeaways, and the source highlights quoted with their Kindle locations.

When highlights describe formulas or quantitative definitions, the generated notes can include equations in Obsidian-compatible LaTeX (`$inline$` and `$$display$$`). These are reconstructed by the model from the highlight text, so they should be checked against the source.

## Limitations

- AI-generated summaries and reconstructed equations require review.
- Similarity thresholds can misclassify related or duplicate content.
- Operation requires a local Obsidian vault and a Gemini API key.
- API availability and quotas depend on the provider.
