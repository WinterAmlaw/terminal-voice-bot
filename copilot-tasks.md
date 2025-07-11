# Copilot Task List for Voice-Controlled Terminal Assistant

This file elaborates on the tasks required to build the assistant, with clear steps and context for Copilot to optimize code generation and maintainability.


###IMPORTANT after each task add and commit using a message such as ex. feat: initialize example

## 1. Microphone Input & Speech-to-Text (STT)
- Integrate microphone input using a Node.js package (e.g., `mic` or `node-record-lpcm16`).
- Implement STT using Vosk or DeepSpeech Node bindings.
- Create a module in `src/stt/` for audio capture and transcription.
- Handle errors and edge cases (e.g., silence, noise).

## 2. OpenAI Command Parsing (NLP) ✅
- Set up OpenAI API integration in `src/nlp/`. **Done**
- Design prompts to convert transcribed speech into safe terminal commands. **Done**
- Parse and validate model output. **Tested**
- Support context-aware command suggestions. **Ready**

## 3. Terminal Command Execution ✅
- Use Node.js `child_process` to execute commands in `src/executor/`. **Done**
- Capture and display output/errors. **Tested**
- Implement command whitelisting/blacklisting for safety. **Next**
- Confirm dangerous commands before execution. **Next**

## 4. Optional Text-to-Speech (TTS) Feedback
- Integrate TTS (e.g., `say` npm package) in `src/tts/`.
- Provide spoken feedback for command results and confirmations.

## 5. Configuration Management
- Store API keys and settings in `.env` and `src/config/`.
- Create an `.env.template` file listing all required environment variables (e.g., `OPENAI_API_KEY`, `STT_MODEL_PATH`).

## 6. Modularization & Extensibility
- Ensure each feature is a separate module for maintainability.
- Document module interfaces and usage in code comments.
- Plan for easy swapping of STT/TTS engines or adding new features.

## 7. Error Handling & Logging
- Implement robust error handling across all modules.
- Add logging for debugging and usage tracking.

## 8. Testing & Validation
- Write unit and integration tests for key modules.
- Validate command safety and correct execution.

## 9. Documentation
- Update `README.md` and inline code comments for clarity.
- Document setup, usage, and module structure.

---

Copilot should use this file to maintain context, track progress, and optimize code suggestions for each task.
