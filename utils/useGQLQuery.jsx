import { gql, GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";

const apiKey = `https://api-eu-west-2.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`;

const graphQLClient = new GraphQLClient(apiKey);

export const useGQLQuery = (key, query, variables, config) => {
  const fetchData = async () => await graphQLClient.request(query, variables);
  return useQuery(key, fetchData, config);
};
