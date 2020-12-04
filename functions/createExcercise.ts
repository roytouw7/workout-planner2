import { APIGatewayProxyEvent } from "aws-lambda";
import { CREATE_EXCERCISE } from "./utils/excerciseQueries"
import { formattedResponse } from "./utils/formattedResponse";
import { sendQuery } from "./utils/sendQuery"

export const handler = async (event: APIGatewayProxyEvent) => {
    try {
        const { name, description } = JSON.parse(event.body);
        const response = await sendQuery<any>(CREATE_EXCERCISE(name, description), []);
        return formattedResponse(200, response.createExcersise);
    } catch (err) {
        return formattedResponse(500, { err: 'Failed creating excercise!'});
    }
}