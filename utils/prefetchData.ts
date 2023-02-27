import { QueryClient } from "react-query";

export const fetchData = async () => {
  const res = await fetch(
    "http://localhost:1337/api/property-cards?populate=*"
  );
  const data = await res.json();
  return data.data;
};

export const prefetchData = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["rent"], fetchData);
  await queryClient.prefetchQuery(["sell"], fetchData);

  return queryClient;
};

export const fetchPropBySlug = async (slug: string | string[] | undefined) => {
  try {
    const res = await fetch(
      "http://localhost:1337/api/property-cards/" + slug + "?populate=*"
    );

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
