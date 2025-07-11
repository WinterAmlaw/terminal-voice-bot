// Command safety checks for terminal execution
const dangerousPatterns = [
  /rm\s+-rf\s+\//, // Remove root
  /:(){:|:&};:/,   // Fork bomb
  /dd\s+if=/,      // Disk overwrite
  /mkfs/,          // Format disk
  /shutdown|reboot/, // System shutdown
  /:>|:>>/,        // Overwrite files
  /wget\s+.*\s+-O\s+\/dev\/sda/, // Download to disk
  /curl\s+.*\s+\|\s+sh/, // Pipe to shell
  /chmod\s+777\s+\//, // Change permissions on root
];

function isSafe(command) {
  return !dangerousPatterns.some(pattern => pattern.test(command));
}

module.exports = { isSafe };
