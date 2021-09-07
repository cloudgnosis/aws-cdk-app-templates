
export const handler = async function(_event: any, _context: any): Promise<object> {
  return {
    body: JSON.stringify({ message: process.env.MESSAGE }),
    statusCode: 200,
  };
};
