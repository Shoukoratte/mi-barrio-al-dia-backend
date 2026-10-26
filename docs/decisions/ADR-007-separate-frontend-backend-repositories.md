# ADR-007: Separate Frontend and Backend Repositories

**Status:** Accepted

**Date:** 2026-10-26

**Project:** Mi barrio al día

**Supersedes:** ADR-003

## Context

Mi barrio al día initially adopted a conventional monorepo under ADR-003.

The project now has an operational Spring Boot backend and a React frontend foundation.

As the team prepares for parallel development, we want clearer repository ownership, independent Pull Request workflows, and simpler contributor onboarding for developers with different experience levels.

The project continues to operate under a zero-cost development budget.

## Decision

Adopt two independent GitHub repositories:

- **mi-barrio-al-dia-backend:** Java, Spring Boot, Maven, backend testing, persistence, and API implementation.
- **mi-barrio-al-dia-frontend:** React, TypeScript, Vite, frontend testing, UI components, and map integration.

Each repository will maintain its own branches, Pull Requests, dependencies, and CI workflows.

Frontend and backend will communicate through documented HTTP API contracts.

A shared GitHub Project may coordinate Issues from both repositories.

Technical documentation will be maintained close to the relevant code, with links between repositories.

## Alternatives Considered

### Retain the conventional monorepo

**Advantages:**
- Centralized documentation and project setup.
- Easier coordination of cross-component changes.
- Shared repository history.

**Disadvantages:**
- Less explicit repository-level ownership.
- Shared Pull Request and repository configuration.
- Additional care required when separating contributor responsibilities.

### Introduce an additional coordination repository

**Advantages:**
- Centralized documentation and planning.

**Disadvantages:**
- A third repository would increase maintenance and contributor navigation overhead.

## Consequences

### Positive

- Clear frontend and backend repository boundaries.
- Independent development and review workflows.
- Easier onboarding focused on one technology stack.
- Independent CI and deployment configuration.

### Negative

- API contract changes require coordination across repositories.
- Shared architectural documentation requires cross-references.
- Cross-repository changes may involve multiple Pull Requests.
- Both repositories require their own contributor documentation.

## Migration

- Preserve the existing frontend and backend work.
- Extract frontend history into the new frontend repository.
- Move the backend application to the root of the renamed backend repository.
- Verify the frontend build and backend tests.
- Update documentation and contributor instructions.
- Keep historical decisions available.

## Current Outcome

**Accepted — 2026-10-26**

The project lead approved transitioning from the conventional monorepo to two independent repositories.

ADR-003 is superseded by this decision.

The project will continue using GitHub Projects for shared planning and coordination.