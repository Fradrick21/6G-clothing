# 6G Clothing frontend

React / Vite storefront with ten pages, connected to the Express / MongoDB API in `../Backend`.

Run `npm.cmd run dev` from the project root to start both applications. For configuration, API documentation, tests and production hosting, see [the project README](../README.md) and [project review](../PROJECT_ANALYSIS.md).

The local frontend runs at http://127.0.0.1:5173 and proxies `/api` to port 5000. Guest cart and wishlist use local storage; signed-in data is persisted by the API. No secrets belong in frontend environment variables.

Use `npm.cmd run lint`, `npm.cmd run build`, and `npm.cmd test` in this directory for frontend checks. Browser tests use installed Google Chrome and an isolated MongoDB test database; the backend `.env` must contain a reachable `MONGO_URI` with permission to create and drop test databases.

The historical visual comparison suite requires original HTML files absent from this repository and is excluded from the normal test suite.
