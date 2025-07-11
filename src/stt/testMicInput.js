// Test for microphone input module
const { startMic } = require('./micInput');
const fs = require('fs');

const { micInstance, micInputStream } = startMic();
const outputFileStream = fs.WriteStream('mic-test.raw');

micInputStream.on('data', function(data) {
  console.log('Received Input Stream: ' + data.length);
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
});

micInstance.start();

setTimeout(() => {
  micInstance.stop();
}, 5000); // Record for 5 seconds
