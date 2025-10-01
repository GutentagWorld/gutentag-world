# Gutentag World MCP Server

This is a basic Model Context Protocol (MCP) server built with TypeScript and Node.js.

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Build the project:

   ```sh
   npm run build
   ```

3. Start the server:

   ```sh
   npm start
   ```

## MCP Endpoint

- POST `/mcp` — responds with `{ "message": "Gutentag World" }`

```sh
> curl -X POST http://localhost:3000/mcp -H "Content-Type: application/json" -d '{"input":"test"}'
```

## Development

- Source code: `src/server.ts`
- TypeScript config: `tsconfig.json`
