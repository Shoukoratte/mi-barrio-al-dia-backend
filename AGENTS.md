# Mi barrio al día — Backend Agent Instructions

## Project Context

Mi barrio al día is an open-source community reporting platform initially focused on Barranquilla, Colombia.

This repository contains the backend application.

Frontend repository:
https://github.com/Shoukoratte/mi-barrio-al-dia-frontend

The application is in early development and is not available for public use.

## Technology Stack

- Java 21
- Spring Boot 4
- Maven
- JUnit
- Spring MVC and MockMvc

PostgreSQL and PostGIS are planned but not yet implemented.

Use the existing technology stack unless changes are justified and approved.

## Architecture and Code Organization

- Keep the backend organized as a modular monolith.
- Use clear package names under `com.mibarrioaldia.backend`.
- Prefer simple implementations over unnecessary abstractions.
- Keep controllers focused on HTTP responsibilities.
- Place business logic in services when real business requirements justify them.
- Introduce persistence layers only when needed.
- Avoid premature microservices or messaging infrastructure.
- Do not create speculative entities, endpoints, or integrations.

## API Development

- Use RESTful HTTP conventions.
- Document endpoint paths, request bodies, response bodies, and status codes.
- Validate incoming data.
- Return meaningful HTTP status codes.
- Coordinate API contract changes with the frontend.
- Do not expose sensitive implementation details in error responses.

## Privacy and Safety

- Treat community reports as unverified information.
- Apply privacy-by-design principles.
- Avoid exposing precise sensitive locations or personal information.
- Do not introduce personal-data collection without an approved requirement.
- Do not present community reports as official government information.
- Consider moderation and abuse prevention before accepting public submissions.

## Testing and Validation

Run backend tests from the repository root:

```powershell
.\mvnw.cmd test
```

- Add unit tests for meaningful business logic.
- Add HTTP-level tests for REST endpoints.
- Do not claim a test passed unless it was executed successfully.
- Report failures and limitations clearly.

## Git and Collaboration

- Start each task from an updated `main` branch.
- Use a dedicated branch for each Issue.
- Keep Pull Requests small and focused.
- Do not commit, push, merge, or modify remote repositories without explicit contributor approval.
- Do not commit credentials, local IDE configuration, or generated build artifacts.
- Explain significant technical decisions.
- Do not modify unrelated files without justification.

## Learning-Oriented Assistance

Contributors may have different experience levels.

When assisting contributors:

- Explain unfamiliar Java and Spring Boot concepts.
- Prefer small implementation steps.
- Help contributors understand the code they submit.
- Avoid generating entire complex features without explanation.
- Identify assumptions and architectural trade-offs.
- Encourage testing and code review.

## Scope Control

Follow the assigned GitHub Issue and its acceptance criteria.

Do not expand implementation scope without discussing the change.

When a task requires modifying frontend behavior or an API contract, coordinate with the frontend repository.