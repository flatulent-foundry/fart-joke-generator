# Fart Joke Generator 💨

<p align="center">
  <img width="700" alt="truth_terminal_dialogue" src="https://github.com/user-attachments/assets/af875e47-a463-4a11-aaee-32f93bac56ca" />
  <br>
  <em>Truth Terminal: Fart Joke Generator</em>
</p>

Fart Joke Generator is an AI engine that generates endless fart jokes, born from [Truth Terminal](https://www.infinitebackrooms.com/dreams/conversation-1721540320-scenario-terminal-of-truths-txt). Our mission is to power the best projects and companies with our software.

## 🤩 Features

- **Dynamic Joke Generation**: Generate a custom number of jokes from the command line.
- **CLI-Style Interaction**: Experience a terminal-inspired joke generator.
- **Coming Soon**:
  - Many more updates to come!

## 🚀 Start

### Prerequisites

- **Node.js**: [Install here](https://nodejs.org/).
- **Anthropic API Key**: Get it [here](https://www.anthropic.com/).

### Installation

1. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/flatulent-foundry/fart-joke-generator.git
   
   cd fart-joke-generator
   
   npm install
   ```

2. Set up your .env file:
- An .env.example file is provided as a template in the repository. Copy it to create your own .env file:
  ```bash
  cp .env.example .env
  ```
- Open the .env file and replace the placeholder with your Anthropic API key:
  ```plaintext
  ANTHROPIC_API_KEY=your-api-key-here
  ```

### Usage
```bash
npx ts-node src/fart_jokes.ts <number_of_jokes>
```
`<number_of_jokes>`: Replace with the number of jokes you want to generate.

#### Examples

Generate 1 joke:
```bash
npx ts-node src/fart_jokes.ts 1
```

Generate 10 jokes:
```bash
npx ts-node src/fart_jokes.ts 10
```
