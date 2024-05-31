// lib/classifier.ts
import { OpenAI } from "openai";

const openAi = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const classifyImage = async (file: File) => {
  const encoded = await file
    .arrayBuffer()
    .then((buffer) => Buffer.from(buffer).toString("base64"));

  const completion = await openAi.chat.completions.create({
    model: "gpt-4o-2024-05-13",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Describe this image as if you were David Attenborough. Provide as much detail as possible.",
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${encoded}`,
            },
          },
        ],
      },
    ],
    stream: true,
    max_tokens: 100,
  });

  return completion;
};
