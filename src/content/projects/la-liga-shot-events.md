---
title: "Statistical Analysis of La Liga Shot Events"
summary: "A statistical analysis of shot event data from La Liga's 2017/18 season, using hypothesis testing and logistic regression to examine which factors are associated with a shot becoming a goal."
category: "Statistical Analysis / Sports Analytics"
technologies: ["Python", "pandas", "SciPy", "statsmodels", "scikit-learn", "Logistic Regression"]
repoUrl: "https://github.com/gabreyrom/Statistical-Analysis-of-Shot-Events-in-La-Liga-2017-18"
featured: false
order: 4
draft: false
caseStudy: false
---

## Problem

Which geometric, contextual, and tactical factors are associated with a shot resulting in a goal, using match-level shot event data?

## Contribution

Solo course project for MA 541 (Statistical Methods) at Stevens Institute of Technology, using the open StatsBomb event dataset for La Liga's 2017/18 season.

## Approach

Shot events are examined with descriptive statistics, normality assessment (Shapiro-Wilk, Q-Q plots), and hypothesis testing (chi-square tests of independence, a one-sample t-test, one-way ANOVA with Tukey HSD post-hoc comparisons, and a power analysis). A logistic regression model is then fit to estimate the association between shot distance, angle, pressure, and first-touch status and the probability of a goal.

## Limitations

Results and model performance figures are reported in the repository's notebooks; this entry doesn't yet have a full case-study writeup with those figures on this site pending a closer review of the evaluation.
