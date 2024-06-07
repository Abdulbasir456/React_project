
/*
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/ask', (req, res) => {
  const { question } = req.body;
  // Simulate AI response
  const response = `This is a simulated response to the question: "${question}"`;
  res.json({ response });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();
const port = 5000;

const OPENAI_API_KEY = 'your-openai-api-key'; // Replace with your OpenAI API key

app.use(cors());
app.use(bodyParser.json());

app.post('/ask', async (req, res) => {
  const { question } = req.body;

  try {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: question,
        max_tokens: 150
      })
    });

    const data = await response.json();
    const aiResponse = data.choices[0].text.trim();
    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Error fetching response from OpenAI:', error);
    res.status(500).json({ response: 'Error fetching response from AI.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
