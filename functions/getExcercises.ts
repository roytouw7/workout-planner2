import { GET_EXCERCISES } from "./utils/excerciseQueries";
import { formattedResponse } from "./utils/formattedResponse";
import { sendQuery } from "./utils/sendQuery";

export const handler = async () => {
  try {
    const response = await sendQuery<any>(GET_EXCERCISES, []);
    return formattedResponse(200, response.allExcersises.data);
  } catch (err) {
    return formattedResponse(500, { err: "Failed fetching excercises!" });
  }
};
