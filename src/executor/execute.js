// Terminal command execution module
const { exec } = require('child_process');

function executeCommand(command, callback) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      callback(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      callback(`Stderr: ${stderr}`);
      return;
    }
    callback(stdout);
  });
}

module.exports = { executeCommand };
