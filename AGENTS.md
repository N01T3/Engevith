# AGENTS.md

Frontend-first SPA for ENGEVITH (Vue 3 + TS + Vuetify MD3 + Pinia + Vitest). All code lives in `frontend/`; deploy is static via `render.yaml`. Full docs: `README.pt-BR.md` / `README.en.md` (root `README.md` is just a language chooser).

## Commands (run from `frontend/`)

```bash
npm ci                     # install (lockfile present)
npm run dev                # Vite dev server
npm run build              # vue-tsc -b && vite build  (typecheck blocks deploy)
npm run verify             # full gate: typecheck + lint + lint:style + format:check
npm run test               # vitest run (jsdom)
npx vitest run tests/unit/shared/slug.spec.ts   # single test file
```

Node requirement: `^22.13.0 || >=24.0.0` (from lockfile; Vite 8 won't run on older LTS).

## Architecture rules (enforced as lint `error` — do not fight them)

- `src/shared/**` and `src/core/**` must NEVER import from `src/modules/*`. Only `app` may import everything.
- Business modules in `src/modules/site/<mod>/` are consumed ONLY via their barrel `index.ts`. Deep imports like `@modules/site/blog/data/blog.service` fail `boundaries/entry-point`. Cross-module imports (site module → other site module) are also forbidden except via the allowed barrel pattern — importing a different module's code requires routing through `app` or extracting to `shared`.
- Aliases: `@` = `src`, `@modules`, `@shared`, `@core`.

## Data layer (mock-first)

- Views/stores must use `data/*.service.ts`; NEVER import `data/*.mock.ts` directly. Services read mocks through `MockAdapter` (simulated latency/failure) so UIs already handle loading/error.
- `src/core/http/*` (api-client, interceptors) is intentionally inert, reserved for the future REST API + JWT. Don't wire it up now.
- Contact form persists leads to `src/core/mocks/in-memory-db.ts` (in-memory, lost on reload — expected).
- Config via `src/core/env.ts`: `VITE_API_BASE_URL`, `VITE_MOCK_DELAY_MS` (default 250), `VITE_APP_NAME`. No `.env` files exist.

## Lint gotchas

- `npm run lint` runs with `--max-warnings=0`, so ESLint `warn` rules (complexity ≤10, `no-magic-numbers`, `max-lines-per-function` ≤60/80, `max-params` ≤4, `max-depth` ≤3, perfectionist import order) are effectively failures on `verify`. Fix them, don't disable.
- `eslint.config.ts` uses type-aware `projectService`; only `eslint.config.*`/`commitlint.config.*` are allowed outside tsconfig projects.
- Components must be multi-word in templates (PascalCase) except the allowed singles: Home, About, Blog, Contact, Gallery, Lightbox. SFC `<script>` blocks must have `lang="ts"`.
- Stylelint + Prettier also run in `verify`; style enforces no `!important`, ordered declarations, LF endings.
- Theme colors are validated by `tests/unit/shared/contrast.spec.ts` (WCAG AA). Changing palette tokens can break tests — run `npm run test` after theme edits.

## Git / workflow

- Branch: `dev`. Commit from repo root (hooks `cd frontend` internally). Hooks need `frontend/node_modules`.
- `pre-commit` runs lint-staged (ESLint/Stylelint autofix + Prettier); `commit-msg` enforces Conventional Commits with types limited to: `feat fix refactor style docs test chore`.
- `.gitattributes` forces LF repo-wide (CRLF breaks the Husky shebang hooks).

## Misc

- UI copy is Brazilian Portuguese (pt-BR); don't translate user-facing strings.
- Vuetify is configured with the MD3 blueprint and global defaults in `src/app/plugins/vuetify.ts` (pill buttons, rounded-xl cards, outlined fields). Custom theme/tokens in `src/app/theme.ts`; do not hardcode colors that exist as tokens.
- Mock service-catalog data is large (6 categories / 42 services) — that's content, not duplication; update `service-catalog.mock.ts` in place.
