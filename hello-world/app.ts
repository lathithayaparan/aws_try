import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
 
export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const method = event.httpMethod;
 
    if (method === 'POST') {
 
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Hello from Lambda!'
        }),
      };
 
    } else {
      return {
        statusCode: 405,
        body: JSON.stringify({
          message: `Method ${method} not allowed`,
        }),
      };
    }
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error sending WhatsApp message',
        error: err.response?.data || err.message,
      }),
    };
  }
};