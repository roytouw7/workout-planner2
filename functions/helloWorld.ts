import { APIGatewayProxyCallback, APIGatewayProxyEvent } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent, context: any, callback: APIGatewayProxyCallback) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ msg: 'Hello World!'})
    };
};