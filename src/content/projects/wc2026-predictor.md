---
title: "FIFA World Cup Forecasting"
summary: "A two-stage probabilistic forecasting system for the 2026 World Cup, combining a Dixon-Coles match model with a LightGBM calibrator and a Monte Carlo tournament simulation."
category: "Forecasting / Applied ML"
technologies: ["Python", "Dixon-Coles model", "LightGBM", "scikit-learn", "Elo ratings", "Monte Carlo simulation"]
repoUrl: "https://github.com/gabreyrom/wc2026_predictor"
highlights:
  - "0.8711 test log-loss, +20.7% vs. uniform baseline"
  - "Evaluated on 4,552 held-out matches (2022+)"
  - "100,000-run Monte Carlo tournament simulation"
featured: true
order: 1
draft: false
---

## Problem

International football outcomes are hard to forecast: teams play few matches a year, strength shifts between tournaments, and draws happen more often than a naive scoring model predicts. This project builds a forecasting system for the 2026 FIFA World Cup designed to be evaluated on held-out matches, not judged by how a narrative reads after the fact.

## Contribution

Personal project, designed and built solo: data pipeline, statistical model, calibration layer, and tournament simulation.

## Approach

A two-stage pipeline:

1. **Dixon-Coles bivariate Poisson model**, fit by maximum likelihood on roughly 32,000 international matches (1990 onward), with a context-dependent correction for low-scoring outcomes and a fitted home-advantage term.
2. **LightGBM calibrator** layered on top, using squad market values (Transfermarkt) and a confederation-aware Elo rating to correct for team-strength shifts the core model is slow to pick up.
3. **Monte Carlo tournament simulation** (100,000 runs) over the official 48-team bracket — groups, third-place qualification, extra time, and penalties — to produce round-by-round advancement probabilities.

## Supported results

Evaluated on a held-out test set of international matches from 2022 onward (n = 4,552) that no part of the model saw during fitting, scored by mean per-match log-loss against a uniform three-outcome baseline (log-loss 1.0986):

| Model | Test log-loss | vs. uniform baseline |
|---|---|---|
| Dixon-Coles alone | 0.9261 | +15.7% |
| Dixon-Coles + LightGBM calibrator | 0.8711 | +20.7% |

The improvement from adding the calibrator was statistically significant under a paired bootstrap test on per-match log-loss.

## Limitations

- Forecasts are probabilistic; a well-calibrated model still misses individual matches.
- Squad market values and Elo ratings lag real-time roster news (injuries, late call-ups).
- The baseline is a uniform random guess, not a betting-market or expert benchmark.
