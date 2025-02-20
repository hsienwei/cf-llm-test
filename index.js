export default {
  async fetch(request, env) {

    // prompt - simple completion style input
    let simple = {
      messages: [
        { role: 'system', content: 'You are a helpful assistant. speaking using chinese.' },
        { role: 'user', content: 'Who won the world series in 2020? NO explanations. NO notes.' }
      ],
      stream: false,
      max_tokens: 2048
    };
    let response = await env.AI.run('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b', simple);
    // tasks.push({ inputs: simple, response });


    return Response.json(response);
  }
};
