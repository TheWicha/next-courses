import { useMutation } from "react-query";
import { GraphQLClient } from "graphql-request";

const apiKey = `https://api-eu-west-2.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`;

const graphQLClient = new GraphQLClient(apiKey);

export const useGQLMutation = (mutation, config) => {
  const mutateData = async (variables) =>
    await graphQLClient.request(mutation, variables);

  return useMutation(mutateData, config);
};
