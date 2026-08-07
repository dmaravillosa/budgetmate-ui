# Next.js Directory Best Practices

This guide describes industry-standard directory organization for modern Next.js applications using the App Router.

## 1. Base decision: root vs `src/`

- Use either a root-level `app/` folder or a `src/app/` folder.
- Prefer `src/` when the repository includes more than the application itself, such as packages, scripts, or backend services.
- Do not mix `src/` and root-level routing directories.

## 2. `app/` folder structure

The `app/` directory is the source of truth for routes.

- `app/layout.tsx` — shared layout for the app.
- `app/page.tsx` — application home route.
- `app/error.tsx` — global error boundary.
- `app/loading.tsx` — global loading UI for async routes.
- `app/not-found.tsx` — global 404 page.

### Route segments

Use folders for route segments:

- `app/about/page.tsx`
- `app/dashboard/layout.tsx`
- `app/blog/[slug]/page.tsx`

Each route folder can also include:

- `head.tsx` for route-specific metadata.
- `error.tsx` for route-specific error handling.
- `loading.tsx` for route-specific loading states.
- `template.tsx` for controlling route templates and rendering.

## 3. Co-locate page assets where it makes sense

- Keep route-specific React components, styles, and static helpers close to the route if they are not reused elsewhere.
- Example: `app/dashboard/` can contain its own components, styles, or helpers used only by dashboard pages.

## 4. Shared directories

Use shared top-level directories for reusable code and crosscutting concerns.

- `components/` — reusable UI components and presentational pieces.
- `lib/` — shared libraries, API clients, data-fetching helpers, and constants.
- `hooks/` — custom React hooks.
- `types/` — shared TypeScript types and interfaces.
- `config/` — runtime constants, environment adapters, feature flags.
- `utils/` — generic helpers, formatters, and utilities.
- `styles/` — global CSS, Tailwind config, theme tokens, CSS modules.
- `tests/` or `__tests__/` — integration and unit tests.
- `mocks/` — fixtures and mock data for tests.

## 5. `public/` assets

- Place static assets in `public/`.
- Serve them via absolute paths like `/images/logo.svg`.
- Avoid placing assets in `app/` or `src/` unless they are imported directly and built by Webpack.

## 6. Styling conventions

- Use `app/globals.css` or `src/app/globals.css` for global styles.
- Use CSS modules for component-specific styles when needed.
- Keep theme tokens, design tokens, and shared style utilities in `styles/`.
- Prefer Tailwind or CSS-in-JS consistently across the project.

## 7. Naming and structure guidelines

- Use clear, descriptive folder names: `components/ui/`, `components/layout/`, `hooks/`, `lib/api/`, `types/`.
- Avoid overly deep folder nesting unless it reflects a true domain boundary.
- Keep the app’s root layout and routing files easy to find.
- Prefer smaller, composable components in `components/` instead of large one-off components inside a route folder.

## 8. Example folder structure

```text
app/
  layout.tsx
  page.tsx
  error.tsx
  loading.tsx
  not-found.tsx
  dashboard/
    layout.tsx
    page.tsx
    loading.tsx
    widgets/
      page.tsx
  blog/
    page.tsx
    [slug]/
      page.tsx
      loading.tsx
components/
  ui/
    button.tsx
    card.tsx
  layout/
    header.tsx
    footer.tsx
hooks/
  useAuth.ts
  useMediaQuery.ts
lib/
  api.ts
  fetcher.ts
  constants.ts
styles/
  globals.css
  theme.css
types/
  app.ts
  api.ts
public/
  favicon.ico
  images/
    logo.svg
tests/
  app.test.ts
  components/
    button.test.tsx
```

## 9. Practical rules

- Co-locate files only when the route tightly owns them.
- Keep shared code in reusable directories.
- Use route folders for App Router features and page composition.
- Name UI components by role, not by route.
- Keep `public/` for static serving only.

## 10. When to create `src/`

If you adopt a `src/` root, move the application folders there:

```text
src/
  app/
  components/
  hooks/
  lib/
  styles/
  types/
```

This is a common industry pattern for larger repos and cleaner source isolation.

## 11. Keep it consistent

- Pick a directory strategy and stick with it.
- Prefer a shallow, meaningful folder tree.
- Organize around feature and route ownership, not around technical implementation alone.
- Document your conventions in a root-level guide so collaborators can follow the same structure.
