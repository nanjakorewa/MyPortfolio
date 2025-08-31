# Repository Guidelines

## Project Structure & Module Organization
- Code lives under `src/`; tests under `tests/`. Static assets in `public/` or `assets/`. Utility scripts in `scripts/`.
- Keep modules small and cohesive. Prefer feature-based folders (e.g., `src/auth/`, `src/ui/`).
- Follow existing patterns; don’t introduce new top‑level folders without discussion.

## Build, Test, and Development Commands
- Node (if `package.json` exists): `npm ci`, `npm run dev`, `npm run build`, `npm test`.
- Python (if `pyproject.toml`): `poetry install`, `poetry run pytest`.
- Rust (if `Cargo.toml`): `cargo build`, `cargo test`, `cargo fmt`.
- Make/Just (if present): `make help` or `just --list` to discover tasks.
- Quick discovery: try `npm run`, `make help`, `just --list` to see available commands.

## Coding Style & Naming Conventions
- Use the repo’s formatter/linter config if present.
  - JS/TS: Prettier + ESLint; 2‑space indent; camelCase for variables/functions, PascalCase for React/components.
  - Python: Black + isort + flake8; 4‑space indent; snake_case for modules/functions, PascalCase for classes.
  - Rust: rustfmt + clippy; snake_case for items, PascalCase for types.
- Filenames: align with module/type names; avoid abbreviations.

## Testing Guidelines
- Keep tests alongside code (`__tests__/` or `tests/`).
- Name tests by unit under test (e.g., `tests/test_user_service.py`, `__tests__/date.util.test.ts`).
- Aim for meaningful coverage on core logic; prefer fast, isolated tests. Use fixtures/fakes over live services.
- Run locally before pushing (see commands above).

## Commit & Pull Request Guidelines
- Prefer Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`. Keep subject ≤ 72 chars; add a clear body when needed.
- PRs: include purpose, summary of changes, screenshots for UI, and linked issues (`Closes #123`).
- Keep PRs small and focused; add tests and update docs when behavior changes.

## Security & Configuration Tips
- Store secrets in environment variables (`.env` locally, never committed). Example: `MY_APP_API_KEY=...`.
- Avoid committing generated files or credentials; respect `.gitignore`.
- Validate inputs and handle errors at boundaries (API, IO).
