# Playwright QA Automation Portfolio
Playwright QA automation - Login, To Do List

## Purpose

This repository demonstrates a **practical QA automation approach** using Playwright, focusing on *maintainability, risk-based testing, and fast feedback* rather than maximum test coverage.

The goal of this project is to show **how test automation supports real development teams**, not just how to write tests.

---

## Background

I have over 20 years of experience as a software developer and recently transitioned into **QA Automation / SDET-focused roles**, starting my formal QA responsibilities at POSBANK USA.

This portfolio reflects how I apply a **developer mindset to quality engineering**, emphasizing testability, reliability, and long-term maintenance.

---

## Why Playwright

Playwright was selected as the primary web automation framework because:

* It provides fast and stable execution for modern web applications
* It handles async behavior and waits reliably, reducing flaky tests
* It integrates well with CI pipelines for regression testing

---

## Test Strategy Overview

### Testing Pyramid

* **Manual Testing**: Exploratory testing, UI/UX validation, edge cases
* **Automation (Playwright)**: Core regression scenarios
* **API Validation**: Focused checks for backend data consistency

Automation is used to **support** testing efforts, not replace manual testing.

---

## Automation Scope

### Automated Scenarios

* Login with valid credentials
* Authentication persistence (session / token validation)
* Core user workflows that are stable and business-critical

### Not Automated (Intentionally)

* Frequently changing UI layouts
* Low-risk edge cases better suited for exploratory testing
* Visual-only checks

> Automation decisions are based on **risk, frequency, and maintenance cost**.

---

## Manual to Automation Mapping

| Manual Test Area          | Automated | Rationale                     |
| ------------------------- | --------- | ----------------------------- |
| Login success             | Yes       | High frequency, stable flow   |
| Login validation messages | Partial   | Critical paths only           |
| UI layout / styling       | No        | High maintenance cost         |
| Error edge cases          | No        | Exploratory testing preferred |

---

## Test Design Principles

* Clear separation between test logic and UI interactions (Page Object pattern)
* Meaningful test names that describe user behavior
* Minimal duplication and reusable fixtures
* Tests should be easy to understand and maintain by the team

---

## CI Integration

* Tests are executed using **GitHub Actions**
* Regression tests run automatically on push or pull request
* HTML reports are generated for quick feedback

---

## What This Portfolio Demonstrates

* How automation candidates are selected
* How manual testing and automation coexist
* How a developer background improves test quality and testability
* A realistic SDET-level approach to QA automation

---

## How to Run Tests

```bash
npm install
npx playwright install
npx playwright test --grep @login
```

---

## Closing Statement

> Test automation should reduce risk and improve confidence in releases.
> This portfolio reflects how I design automation to achieve that goal.
