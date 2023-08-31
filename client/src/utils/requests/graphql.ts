import client from "@/graphql/apollo-client";

export const clientMutator = async (mutation: any, variables: any) => {
  const { data } = await client.mutate({
    mutation: mutation,
    variables: variables,
    fetchPolicy: "network-only",
  });

  return { data, errors: null };
};

export const clientQuerier = async (query: any, variables: any) => {
  const { data, error } = await client.query({
    query: query,
    variables: variables,
    fetchPolicy: "network-only",
  });

  return { data, errors: error?.graphQLErrors };
};
