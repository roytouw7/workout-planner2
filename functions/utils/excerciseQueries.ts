export const GET_EXCERCISES = `
    query {
        allExcersises {
            data {
                _id
                name
                description
            }
        }
    }`;

export const CREATE_EXCERCISE = (name: string, description: string) => `
    mutation {
        createExcersise(data: {name: "${name}", description: "${description}"}) {
            _id
            name
            description
        }
    }
    `;
