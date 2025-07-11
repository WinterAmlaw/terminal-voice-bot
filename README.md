# Voice-Controlled Terminal Assistant

A Node.js project to control your terminal using spoken commands. Features modular architecture for speech-to-text, NLP (OpenAI), command execution, and optional text-to-speech feedback.

## Features
- Microphone input and speech-to-text (Vosk/DeepSpeech)
- Command parsing via OpenAI API
- Terminal command execution with safety checks
- Optional text-to-speech feedback
- Modular, extensible design

## Project Structure
- `src/`
  - `main.js` (entry point)
  - `stt/` (speech-to-text)
  - `nlp/` (OpenAI integration)
  - `executor/` (terminal command execution)
  - `tts/` (optional text-to-speech)
  - `config/` (configuration)
- `.github/copilot-instructions.md`
- `.vscode/tasks.json`

## Setup
1. Install dependencies: `npm install`
2. Configure OpenAI API key in `.env`
3. Run: `node src/main.js`

## Task List
- [ ] Microphone input & STT integration
- [ ] OpenAI command parsing
- [ ] Terminal command execution
- [ ] Safety checks
- [ ] Optional TTS feedback
- [ ] Modularize codebase

## Requirements
- Node.js
- OpenAI API key
- Vosk/DeepSpeech models (for STT)

## License
MIT
