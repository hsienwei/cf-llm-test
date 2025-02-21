export default {
  async fetch(request, env) {
    // prompt - simple completion style input

    const requestBody = await request.json()

    let simple = {
      model:"deepseek-chat",
      ...requestBody,
      stream: false,
      max_tokens: 2048,
      temperature: 0
    };
    let response = await env.AI.run('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b', simple);
    // tasks.push({ inputs: simple, response });
    

    return Response.json(response);
  }
};
// {
//   "model": "deepseek-chat",
//   "temperature": 0,
//   "messages": [
//     {
//       "role": "system",
//       "content": "You are a professional, authentic machine translation engine."
//     },
//     {
//       "role": "user",
//       "content": ";; Treat next line as plain text input and translate it into Traditional Chinese Language, output translation ONLY. If translation is unnecessary (e.g. proper nouns, codes, etc.), return the original text. NO explanations. NO notes. Input:\n include_usage"
//     }
//   ]
// }