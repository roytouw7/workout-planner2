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
