import OpenAI from "openai";

export async function generateHeadline(sport: string, summary: string) {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 20_000,
    maxRetries: 0,
  });
  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-4o-mini",
    input: `Write a short, exciting ${sport} headline about: ${summary}`,
    max_output_tokens: 100,
  });

  if (!response.output_text.trim()) {
    throw new Error("The model returned an empty headline.");
  }
  return response.output_text;
}
