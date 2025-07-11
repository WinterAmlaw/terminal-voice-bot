// Text-to-Speech module using 'say'
const say = require('say');

function speak(text, voice = null, speed = 1.0) {
  say.speak(text, voice, speed, (err) => {
    if (err) {
      console.error('TTS error:', err);
    }
  });
}

module.exports = { speak };
