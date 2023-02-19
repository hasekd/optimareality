import Layout from "@/components/Layout/Layout";
import React, { useState } from "react";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { theme } from "@/styles/styles";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { GetServerSideProps, GetStaticProps } from "next";
import PropertyCard from "@/components/PropertyCards/PropertyCard";
import { fetchData, prefetchData } from "@/utils/prefetchData";
import Filter from "@/components/Filter/Filter";

const SalePage = () => {
  const [selectedProp, setSelectedProp] = useState("");
  const [selectedPrice, setSelectedPrice] = useState([0, 0]);
  const [selectedBeds, setSelectedBeds] = useState(0);
  const [selectedBaths, setSelectedBaths] = useState(0);

  const { data, isLoading, isError, error } = useQuery(["sell"], fetchData);

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>{JSON.stringify(error)}</Text>;

  const handlePropChange = (propType: string) => {
    setSelectedProp(propType);
  };

  const handlePriceChange = (price: number[]) => {
    setSelectedPrice(price);
  };

  const handleBedsChange = (beds: number) => {
    setSelectedBeds(beds);
  };

  const handleBathsChange = (baths: number) => {
    setSelectedBaths(baths);
  };

  const handleClearFilter = () => {
    setSelectedProp("");
    setSelectedBeds(0);
    setSelectedBaths(0);
    setSelectedPrice([0, 0]);
  };

  const filteredProp = data.filter(
    (prop: any) =>
      (prop.attributes.propType === selectedProp || selectedProp === "") &&
      (prop.attributes.price >= selectedPrice[0] || selectedPrice[0] === 0) &&
      (prop.attributes.price <= selectedPrice[1] || selectedPrice[1] === 0) &&
      (prop.attributes.bedrooms === selectedBeds || selectedBeds === 0) &&
      (prop.attributes.bathrooms === selectedBaths || selectedBaths === 0)
  );

  return (
    <Layout>
      <Box maxW={"130rem"} m={"0 auto"} p={"0 2rem"}>
        <Box maxW={"8.8rem"} m={"3rem auto 0"}>
          <Heading
            fontSize={"3rem"}
            textAlign={"center"}
            mb={"1.5rem"}
            fontWeight={600}
          >
            Prodej
          </Heading>
          <Divider
            borderColor={theme.color.primary.yellow}
            borderWidth={"2px"}
          />
        </Box>
        <Flex justify={"center"} gap={"5rem"}>
          <Filter
            prop={data}
            filteredProp={filteredProp}
            propType={"sell"}
            selectedProp={selectedProp}
            onHandlePropChange={handlePropChange}
            onHandlePriceChange={handlePriceChange}
            selectedBeds={selectedBeds}
            onHandleBedsChange={handleBedsChange}
            selectedBaths={selectedBaths}
            onHandleBathsChange={handleBathsChange}
            onHandleClearFilter={handleClearFilter}
          />

          <Flex
            flexWrap={"wrap"}
            gap={"2.5rem"}
            m={"4rem 0"}
            justify={"center"}
          >
            {filteredProp.map((prop: any) => {
              if (prop.attributes.rentOrSell === "sell") {
                return (
                  <PropertyCard
                    key={prop.id}
                    {...prop.attributes}
                    priceType={"Kč"}
                  />
                );
              }
            })}
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { dehydratedState: dehydrate(await prefetchData()) },
  };
};

export default SalePage;
