// Test OpenAI Whisper STT module
const path = require('path');
const { transcribeAudio } = require('./whisper');

async function test() {
  const audioPath = path.join(__dirname, 'recording.wav');
  try {
    const transcript = await transcribeAudio(audioPath);
    console.log('Transcript:', transcript);
  } catch (err) {
    console.error('STT error:', err.message);
  }
}

test();
