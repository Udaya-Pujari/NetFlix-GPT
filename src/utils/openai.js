import OpenAI from "openai";
import { OPENAI_KEY } from "./constatnts";

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default to  process.env['OPENAI_API_KEY']
  dangerouslyAllowBrowser: true,
});

export default openai;
