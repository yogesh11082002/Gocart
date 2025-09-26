import OpenAI from "openai";

export const openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL
});
