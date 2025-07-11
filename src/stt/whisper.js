// OpenAI Whisper STT module
require('dotenv').config();
const OpenAI = require('openai');
const fs = require('fs');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Transcribe an audio file using OpenAI Whisper API
 * @param {string} filePath - Path to WAV/MP3 audio file
 * @returns {Promise<string>} Transcript text
 */
async function transcribeAudio(filePath) {
  const audioStream = fs.createReadStream(filePath);
  const response = await openai.audio.transcriptions.create({
    file: audioStream,
    model: 'whisper-1',
    response_format: 'text',
    language: 'en', // Change if needed
  });
  return response;
}

module.exports = { transcribeAudio };
