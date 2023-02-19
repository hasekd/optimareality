import { useQuery } from "react-query";

const usePropQuery = () => {
  const fetchData = async () => {
    const res = await fetch(
      "http://localhost:1337/api/property-cards?populate=*"
    );
    const data = await res.json();
    return data.data;
  };

  const productsQuery = useQuery(["properites"], fetchData);

  return productsQuery;
};

export default usePropQuery;
