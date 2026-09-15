---
title: "Book Recommendation System"
summary: "A desktop book-recommendation app that clusters books with k-means and suggests similar titles by cosine similarity, built with a three-person team as a course project."
category: "Software Engineering / Recommender Systems"
technologies: ["Python", "Tkinter", "scikit-learn", "k-means clustering", "Cosine similarity", "pandas"]
repoUrl: "https://github.com/gabreyrom/Programming-Python-Readwise"
featured: false
order: 3
draft: false
caseStudy: false
---

## Problem

Readers browsing a large book catalog often want recommendations based on a title or author they already like, along with a simple way to track what they've read.

## Contribution

Team project (Jasmine Qiang, Shen-Chun Huang, and Gabriel Reynoso) built as a Tkinter desktop application, "Readwise."

## Approach

Books are clustered with k-means on a feature set built during exploratory data analysis. Within a book's cluster, recommendations are produced by cosine similarity against the searched title, author, or ISBN. The app also includes account creation and login, a searchable catalog, a "top 500 books by average rating" view, and a record of books the user has marked as read.

## Limitations

This entry doesn't yet have a full case-study writeup on this site; see the repository for the code and a detailed README.
