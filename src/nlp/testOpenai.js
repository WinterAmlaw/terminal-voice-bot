// Test for OpenAI command parsing
const { parseCommand } = require('./openai');

(async () => {
  const transcript = 'list all files in the current directory';
  const command = await parseCommand(transcript);
  console.log('Parsed command:', command);
})();
