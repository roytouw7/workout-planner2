import { APIGatewayProxyEvent } from "aws-lambda";
import axios from 'axios';

export const handler = async(event: APIGatewayProxyEvent) => {
    const GET_EXCERCISES = `
        query {
            allExcersises {
                data {
                    name
                    description
                }
            }
        }`;
    
    const { data } = await axios({
        url: 'https://graphql.fauna.com/graphql',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`
        },
        data: {
            query: GET_EXCERCISES,
            variables: {}
        }
    });

    console.log(data);

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};