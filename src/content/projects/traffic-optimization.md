---
title: "Traffic Optimization via Collective Intelligence"
summary: "Comparing greedy routing, marginal-cost assignment, and a Q-learning agent trained by expert imitation on a real Manhattan street network."
category: "Reinforcement Learning / Optimization"
technologies: ["Python", "Reinforcement learning (Q-learning)", "Graph algorithms", "NetworkX", "Jupyter"]
repoUrl: "https://github.com/gabreyrom/traffic_optimization_applied_ml"
featured: true
order: 2
draft: false
---

## Problem

Given vehicles with origin-destination pairs on the Manhattan street network, find routes that minimize *total system travel time* — the social optimum — rather than each vehicle selfishly minimizing only its own travel time, which drives the network toward congested Nash-equilibrium routing.

## Contribution

Course project for Applied Machine Learning at Stevens Institute of Technology (Fall 2025), completed as a team assignment. The repository linked below, and the implementation described here, reflect my portion of the code.

## Approach

Three routing strategies are compared on a real Manhattan network, using the standard Bureau of Public Roads travel-time function:

1. **Shortest Path Assignment (SPA):** each vehicle greedily runs Dijkstra on the current flow-weighted graph — fast, but uncoordinated and congestion-prone.
2. **Ford-Fulkerson COIN (FF):** each vehicle routes by *marginal system cost* — how much delay it would add for everyone else — producing a near-socially-optimal assignment. Used as the "expert" for the RL agent below.
3. **FF-RL:** a Q-learning agent trained with difference rewards (the Collective Intelligence framework of Wolpert & Tumer, 2002), warm-started and reward-shaped by imitating the FF expert's routing decisions, with Boltzmann exploration and experience replay.

## Supported results

The project reports total system travel time (in vehicle-hours) as its comparison metric across the three strategies, at configurable agent counts (100 / 1,000 / 3,000). No finalized, publishable comparison table across configurations is included here; the runnable configs and notebooks that produce those figures are in the repository.

## Limitations

- Static traffic assignment on one city's street network, not validated against observed real-world traffic.
- Outcomes are sensitive to reward-weight and agent-count configuration; results live in the project's own notebooks rather than an independently reviewed benchmark.
