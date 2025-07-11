// Record mic input, save to file, and play back with TTS
const { startMic } = require('./micInput');
const fs = require('fs');
const { speak } = require('../tts/tts');

const { micInstance, micInputStream } = startMic();
const outputFile = 'mic-to-tts.raw';
const outputFileStream = fs.createWriteStream(outputFile);

micInputStream.on('data', function(data) {
  outputFileStream.write(data);
});

micInputStream.on('error', function(err) {
  console.error('Error in Input Stream: ' + err);
});

micInputStream.on('startComplete', function() {
  console.log('Microphone recording started');
});

micInputStream.on('stopComplete', function() {
  console.log('Microphone recording stopped');
  outputFileStream.end();
  speak('Microphone test complete. Your voice assistant is working!');
});

micInstance.start();

setTimeout(() => {
  micInstance.stop();
}, 5000); // Record for 5 seconds
