import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Basic MCP endpoint
app.post('/mcp', (req, res) => {
  res.json({ message: 'Gutentag World' });
});

app.listen(port, () => {
  console.log(`MCP server listening on port ${port}`);
});
