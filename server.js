const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'https://antenna-front.vercel.app' })); // CORS設定
app.use(express.json());

// 簡単な計算 API
app.post('/calculate', (req, res) => { // エンドポイントを/calculateに変更
    console.log('Request body:', req.body);
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

// Herokuの指定ポートにバインド
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

