
// Microphone input using 'arecord' (Linux only)
// Usage: node micInput.js

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const OUTPUT_FILE = path.join(__dirname, 'recording.wav');
const RECORD_SECONDS = 5;

function recordMic(duration = RECORD_SECONDS, outputFile = OUTPUT_FILE) {
  return new Promise((resolve, reject) => {
    // arecord -d <seconds> -f cd -t wav <outputFile>
    const arecord = spawn('arecord', ['-d', String(duration), '-f', 'cd', '-t', 'wav', outputFile]);

    arecord.stderr.on('data', (data) => {
      process.stderr.write(data);
    });

    arecord.on('error', (err) => {
      reject(new Error('Failed to start arecord. Is ALSA installed?'));
    });

    arecord.on('close', (code) => {
      if (code === 0) {
        resolve(outputFile);
      } else {
        reject(new Error(`arecord exited with code ${code}`));
      }
    });
  });
}

async function main() {
  console.log(`Recording ${RECORD_SECONDS} seconds of audio...`);
  try {
    const file = await recordMic();
    console.log(`Audio saved to: ${file}`);
    // Next: pass file to STT module
  } catch (err) {
    console.error('Mic input error:', err.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { recordMic };
