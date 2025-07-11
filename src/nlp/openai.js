// OpenAI command parsing module
require('dotenv').config();
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function parseCommand(transcript) {
  const messages = [
    { role: 'system', content: 'You are a helpful assistant. Convert spoken commands into safe Linux terminal commands. Only output the command, not explanations.' },
    { role: 'user', content: transcript }
  ];
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    max_tokens: 50,
    temperature: 0.2,
  });
  let content = response.choices[0].message.content.trim();
  // Extract command from code block if present
  const codeBlockMatch = content.match(/```(?:sh|bash)?\n([\s\S]*?)```/);
  if (codeBlockMatch) {
    return codeBlockMatch[1].trim();
  }
  // Otherwise, try to extract first line as command
  const firstLine = content.split('\n')[0].trim();
  return firstLine;
}

module.exports = { parseCommand };
