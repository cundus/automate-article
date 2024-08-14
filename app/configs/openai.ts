import OpenAI from "openai";
import envVariables from "../constants/env-variables";
const apiKey = process.env.OPENAI_API_KEY;
console.log(apiKey);

const openai = new OpenAI({
   apiKey: apiKey,
});

export default openai;
