// Microphone input module using 'mic' package
const mic = require('mic');

function startMic(options = {}) {
  const micInstance = mic({
    rate: options.rate || '16000',
    channels: '1',
    debug: false,
    exitOnSilence: 6
  });
  const micInputStream = micInstance.getAudioStream();
  return { micInstance, micInputStream };
}

module.exports = { startMic };
