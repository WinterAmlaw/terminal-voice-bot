
// Entry point for the voice-controlled terminal assistant
require('dotenv').config();
const path = require('path');
const { recordMic } = require('./stt/micInput');
const { transcribeAudio } = require('./stt/whisper');
const { parseCommand } = require('./nlp/openai');
const { isSafe } = require('./executor/safety');
const { executeCommand } = require('./executor/execute');
const { speak } = require('./tts/tts');

async function assistantWorkflow() {
  try {
    // 1. Record audio
    speak('Listening for your command.');
    const audioFile = await recordMic();
    speak('Transcribing your command.');

    // 2. Transcribe audio
    const transcript = await transcribeAudio(audioFile);
    console.log('Transcript:', transcript);
    speak(`You said: ${transcript}`);

    // 3. Parse command intent
    const command = await parseCommand(transcript);
    console.log('Parsed command:', command);
    speak(`Parsed command: ${command}`);

    // 4. Safety check
    if (!isSafe(command)) {
      speak('Warning: This command may be dangerous. Please confirm.');
      console.log('Dangerous command detected. Confirmation required.');
      // For now, skip execution. Implement confirmation flow later.
      return;
    }

    // 5. Execute command
    speak('Executing your command.');
    executeCommand(command, (output) => {
      console.log('Command output:', output);
      speak(`Command output: ${output}`);
    });
  } catch (err) {
    console.error('Assistant error:', err.message);
    speak(`Error: ${err.message}`);
  }
}

if (require.main === module) {
  assistantWorkflow();
}
