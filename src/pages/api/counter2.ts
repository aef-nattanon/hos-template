import type { NextApiHandler } from "next";

const countHandler: NextApiHandler = async (request, response) => {
  const { amount = 33 } = request.body;

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  response.json({ data: 3333 });
};

export default countHandler;
