// OpenAI command parsing module
require('dotenv').config();
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function parseCommand(transcript) {
  const messages = [
    { role: 'system', content: 'You are a helpful assistant. Convert spoken commands into safe Linux terminal commands.' },
    { role: 'user', content: transcript }
  ];
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    max_tokens: 50,
    temperature: 0.2,
  });
  return response.choices[0].message.content.trim();
}

module.exports = { parseCommand };
