# Editorial checklist (internal — not published)

Open questions and missing facts to resolve with Gabriel before content review is final. Nothing below is rendered on the site; it exists so no gap gets silently filled with an invented fact.

## Homepage / bio
- Homepage tagline and intro paragraph are the handoff's suggested copy verbatim — confirm wording or provide edits.
- Phone number from the CV is intentionally omitted from the public site (handoff: "use email and social links for contact"). Confirm that's correct.

## Experience
- Klar/Ford/Ben & Frank bullets are copied close to the CV wording. Confirm no metric needs updating since the CV was written (e.g., MAU base, LTV figures).
- Ben & Frank sales figures kept as MXN per the handoff instruction not to infer currency conversion — confirm no USD equivalent should be added.

## Education
- MS in Data Science at Stevens is marked "in progress" / "Expected Dec 2026" per the handoff instruction not to describe it as completed. Confirm this is still accurate as of publish date.

## Projects — FIFA World Cup Forecasting
- Log-loss figures (0.9261 raw, 0.8711 calibrated, baseline 1.0986, n=4,552) were pulled directly from `wc2026_predictor/README.md` and `evaluations/eval_2026-06-24.md`. Confirm these are still the numbers you want quoted (they may shift if the model is rerun).

## Projects — Traffic Optimization
- The handoff describes this as a "team course project." GitHub shows only `gabreyrom` as a contributor/committer on the repo, so the contribution line says "completed as a team assignment... this repository... reflects my portion of the code." Confirm the actual team size and whether that phrasing is fair to teammates.
- No finalized results table (vehicle-hours by config) is published in the repo, so the project page intentionally doesn't claim comparative numbers. Let me know if you want specific figures pulled from `outputs/agents_*` and cited with method/config.

## Projects — Book Recommendation System (new)
- Description and tags were written from the repo's README (team: Jasmine Qiang, Shen-Chun Huang, Gabriel Reynoso). No case-study page is published yet (`caseStudy: false` in `src/content/projects/book-recommendation-system.md`), so the card title renders as plain text with no link — confirm before flipping `caseStudy: true`.

## Projects — Statistical Analysis of La Liga Shot Events (new)
- Solo course project (MA 541, Stevens). Per instruction, the card and body text deliberately omit the README's numeric results (AUC-ROC, accuracy, chi-square/ANOVA figures, odds ratios) pending review of the underlying evaluation. No case-study page is published yet (`caseStudy: false`) — the numbers live only in the repo for now.

## Projects — adding the three upcoming projects
- Not added yet, per instruction. See the comment block at the top of `src/content.config.ts` for the steps (next open `order` slots are 6-9; set `draft: true` until ready to publish; `featured` is independent of Projects-page order and never changes automatically; `caseStudy: false` if no full writeup is ready).

## Projects — Teleoperation thesis
- The linked repo's README is a one-line description; the CV only gives the thesis title and award name. The project page is limited to those facts. If you have the thesis document or more detail you're comfortable sharing (system architecture, technologies actually used), send it and I'll expand the page — currently "technologies" lists only the two degree fields since I don't have a real tech stack to cite.

## Design / assets
- About page portrait lives at `src/assets/images/portrait.png` and is wired into `src/pages/index.astro` via Astro's `<Image>` component (optimized to 200×250, served as WebP). Replace that file with a new photo of the same rough aspect ratio to swap the portrait — no code changes needed.
- Currently using system font stacks (serif headings via Georgia-style stack, sans body via system-ui) rather than a custom webfont, to keep the page fast and dependency-free. Confirm if you'd like a specific Google Font pairing instead.
- No Open Graph image is set yet (og:title/description/url are present, no og:image). Consider a simple image for link previews.
- Favicon is still the default Astro placeholder (`public/favicon.svg`). Replace with a personal mark/initials if desired.

## Deferred to Prompt 3 (launch)
- GitHub Actions deploy workflow, Pages configuration check, and production build verification are intentionally not done yet per the handoff's staged plan.
