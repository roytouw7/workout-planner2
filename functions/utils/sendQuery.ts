import Axios from "axios";

export const sendQuery = async <T>(query: string, variables: T[]) => {
  const {
    data: { data, errors },
  } = await Axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query: query,
      variables: {},
    },
  });

  if (errors) {
    console.error(errors);
    throw new Error("Failed executing query.");
  }

  return data;
};
