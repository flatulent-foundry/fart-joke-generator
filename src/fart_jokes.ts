import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

dotenv.config();

/**
 * Validates the number of jokes provided by the user.
 * @returns {string} The validated number of jokes as a string.
 */
function getValidatedNumJokes(): string {
    const numJokes = process.argv[2];

    if (!numJokes || isNaN(Number(numJokes)) || Number(numJokes) <= 0) {
        console.error("Please provide a valid positive number of jokes as a command-line argument.");
        process.exit(1);
    }

    return Number(numJokes).toString();
}

/**
 * Generates the AI prompt based on the number of jokes.
 * @param {string} numJokesText - The number of jokes to generate as a string.
 * @returns {string} The formatted input content for the AI.
 */
function generateInputContent(numJokesText: string): string {
    const inputContent = `You are a Fart Joke Generator AI. Your task is to generate humorous fart-related jokes based on the user's input. Follow these instructions carefully:

1. Begin your output with the following header:
   FART JOKE GENERATOR v1.0
   ========================
   Warning: Prolonged exposure may cause uncontrollable giggling and/or eye-rolling.

2. The user will provide an input for the number of jokes to generate. This input will be in the following format:
   <num_jokes>
   ${numJokesText}
   </num_jokes>

3. Generate **exactly** the number of jokes specified by the input: ${numJokesText}. You must not generate more or fewer jokes.

4. Format your output as follows:
   - Number each joke sequentially (e.g., 1., 2., 3.).
   - Write each joke on one line only.
   - Leave a blank line between each joke for readability.

5. If the input specifies only 1 joke, begin your response with:
   - "Generating 1 fart joke..."
   If the input specifies multiple jokes, begin with:
   - "Generating [X] fart jokes..." (replace [X] with the number of jokes).

6. Joke content guidelines:
   - Focus entirely on fart-related humor and wordplay.
   - Be as creative and varied as possible.
   - Include a mix of puns, one-liners, and mini-stories.
   - Incorporate references to pop culture, science, or common life scenarios for added humor.
   - Do not include inappropriate or offensive content.

7. Once all jokes are generated:
   - Do not add anything after the jokes. End your response cleanly after the final joke.

8. Your goal is to maximize humor, creativity, and entertainment. Ensure each joke is unique and playful.

Remember, your goal is to be humorous and entertaining while focusing on fart-related content. Don't hold back on the silliness!`;

    return inputContent
}

/**
 * Initializes the Anthropic stream and handles the output.
 * @param {string} inputContent - The AI input content.
 */
async function runFartJokeGenerator(inputContent: string): Promise<void> {
    const anthropic = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const stream = await anthropic.messages.stream({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 8000,
        temperature: 0.5,
        stream: true,
        messages: [
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: inputContent,
                    },
                ],
            },
        ],
    });

    stream
        .on("text", (chunk: string) => {
            for (const char of chunk) {
                process.stdout.write(char);
            }
        })
        .on("end", () => {
            console.log(`
\n[SIMULATION COMPLETE]`
            );
        })
        .on("error", (error: Error) => {
            console.log(`
\nTerminating process due to error...

[████████████████████████] 100%

Generator stopped successfully.

Cleanup complete. All excess gas has been released safely into the atmosphere.

Remember: He who smelt it, dealt it. But he who denied it, supplied it.
                `);
        });
}

/**
 * Main function to orchestrate the flow.
 */
(async function main() {
    const numJokesText = getValidatedNumJokes();
    const inputContent = generateInputContent(numJokesText);
    await runFartJokeGenerator(inputContent);
})();
