const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// 簡単な計算 API
app.post('/calculate-profit', (req, res) => {
    console.log('Request body:', req.body); // 追加: リクエストボディのログ
    const { revenue, cost } = req.body;
    if (revenue === undefined || cost === undefined) {
        return res.status(400).json({ error: 'Revenue and cost are required' });
    }
    const profit = revenue - cost;
    res.json({ profit });
});

// GET リクエストのハンドラー
app.get('/', (req, res) => {
    res.send('Welcome to the Profit Calculator API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});