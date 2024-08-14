import openai from "../configs/openai";

export const generateBookLayout = async (title: string) => {
   const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
         {
            role: "user",
            content: `Generate a book layout for ${title}`,
         },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      response_format: {
         type: "text",
      },
   });
   console.log(response.choices);
};
