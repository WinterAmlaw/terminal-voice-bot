// Test for terminal command execution
const { executeCommand } = require('./execute');

executeCommand('ls', (output) => {
  console.log('Command output:', output);
});
