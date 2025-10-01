// Basic MCP server (Hello World)
import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello World from MCP server!' }));
});

server.listen(PORT, () => {
  console.log(`MCP server running at http://localhost:${PORT}`);
});
