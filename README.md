# eslint-config-eaht

## Anti-slop lint

Use Node 24. Install the isolated lint dependencies with `npm ci --prefix tools/oxlint`, then run `npm run lint:anti-slop` from the repository root. CI runs the same check on pushes and pull requests. Application dependencies are not needed for this check.

All 18 generic anti-slop rules and `oxc/no-accumulating-spread` are errors. This checks the configuration package's own JavaScript; it does not change the ESLint rules exported to consumers. Source revision and licenses are recorded in [UPSTREAM.md](tools/oxlint/anti-slop/UPSTREAM.md).
