# Contributing Guidelines

These guidelines define the development conventions and quality standards used throughout the project.

## Development Setup

### Prerequisites

- Node.js
- npm
- Git

### Getting Started

```bash
npm install
npm run dev
```

## Coding Standards

### General

- Write clear, readable and maintainable code.
- Prefer simple solutions over unnecessary abstraction.
- Keep functions and components focused on a single responsibility.
- Avoid duplicating logic where a shared solution is appropriate.
- Remove unused code, imports and dependencies.
- Do not commit secrets, credentials or environment-specific configuration containing sensitive values.

### TypeScript

- Prefer explicit, meaningful types for component props, function parameters and structured data.
- Avoid `any`; use safer alternatives such as `unknown` where appropriate.
- Prefer type inference when the type is already clear.
- Handle potentially missing or undefined values explicitly.

### React

- Use functional components and React hooks.
- Keep components focused and reusable where appropriate.
- Use `PascalCase` for component names and `camelCase` for variables, functions and hooks.
- Keep component-specific logic close to the component unless it needs to be shared.
- Avoid unnecessary state and derived state where values can be calculated directly.

### Styling

- Use consistent naming and formatting conventions.
- Keep styles organised and avoid unnecessary duplication.
- Ensure layouts work across mobile, tablet and desktop screen sizes.
- Use semantic HTML and accessible interactive elements.
- Provide visible keyboard focus states and maintain sufficient colour contrast.

## Naming Conventions

| Element                 | Convention                  | Example             |
| ----------------------- | --------------------------- | ------------------- |
| React components        | PascalCase                  | `ProjectCard.tsx`   |
| Variables and functions | camelCase                   | `getProjectDetails` |
| Custom hooks            | camelCase with `use` prefix | `useProjects`       |
| Types and interfaces    | PascalCase                  | `ProjectDetails`    |
| CSS classes             | kebab-case                  | `project-card`      |
| Constants               | camelCase by default        | `featuredProjects`  |

## Git Workflow

### Branches

Use descriptive branch names with a type prefix:

- `feat/project-showcase`
- `fix/mobile-navigation`
- `docs/update-readme`
- `refactor/shared-components`

For small changes, committing directly to the main branch may be acceptable while working solo. Use feature branches for larger or riskier changes.

### Commit Messages

Follow the Conventional Commits format:

```text
type: short description
```

Examples:

- `feat: add project showcase`
- `fix: correct mobile navigation`
- `style: improve project card spacing`
- `refactor: extract reusable button`
- `docs: update development guidelines`
- `chore: update dependencies`

Use the imperative form where practical and keep the summary concise.

## Quality Checks

Before considering a change complete, run:

```bash
npm run lint
npm run build
```

Resolve errors introduced by the change before committing. Do not suppress lint rules without a clear reason.

## Dependencies

- Prefer existing dependencies and native browser capabilities when suitable.
- Add packages only when they provide meaningful value.
- Avoid unnecessary or unmaintained dependencies.
- Review dependency changes before committing them.

## Accessibility and Responsiveness

- Use semantic HTML elements.
- Ensure interactive elements are keyboard accessible.
- Provide appropriate labels for form controls.
- Include meaningful alternative text for informative images.
- Test layouts at mobile and desktop sizes.

## Documentation

- Update the README when setup instructions or project-level information changes.
- Update relevant documentation when significant design or architectural decisions change.

## Definition of Done

A change is considered complete when:

- The implementation meets its intended requirements.
- Code is readable and follows these conventions.
- Relevant lint checks and the production build pass.
- The interface remains responsive and accessible where applicable.
- Related documentation is updated when necessary.
