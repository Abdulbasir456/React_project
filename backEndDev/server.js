/*
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample response to demonstrate how backend works
app.post('/ask', async (req, res) => {
    const { question } = req.body;

    // Mock AI response
    const aiResponse = `This is a mocked response for the question: ${question}`;

    res.json({ response: aiResponse });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
*/

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import aiRoutes from './routes/aiRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/ai', aiRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
