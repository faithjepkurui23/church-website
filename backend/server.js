const express = require('express');
const cors = require('cors'); // 👈 important for frontend to connect
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Example route
app.get('/api/sermons', (req, res) => {
  const sermons = [
    { id: 1, title: 'Sunday Service', preacher: 'Pastor John', date: '2025-10-17' },
    { id: 2, title: 'Youth Revival', preacher: 'Pastor Mary', date: '2025-10-20' },
  ];
  res.json(sermons);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
