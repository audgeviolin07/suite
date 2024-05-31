import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import fs from 'fs';
import path from 'path';
import { Configuration, OpenAIApi } from 'openai';

// Configure OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (req: NextApiRequest, saveLocally: boolean): Promise<File> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/public/uploads');
    options.filename = (name, ext, path, form) => {
      return `${Date.now().toString()}_${path.originalFilename}`;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;

  const form = new formidable.IncomingForm(options);

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve(files.file as File);
    });
  });
};

const describeImage = async (imagePath: string): Promise<string> => {
  const imageBytes = fs.readFileSync(imagePath).toString('base64');
  const prompt = `Describe the following image in detail:\n\n${imageBytes}`;
  const response = await openai.createCompletion({
    model: 'gpt-4o-2024-05-13',
    prompt: prompt,
    max_tokens: 100,
  });
  return response.data.choices[0].text.trim();
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const file = await readFile(req, true);
    const description = await describeImage(file.filepath);
    res.status(200).json({ description });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
