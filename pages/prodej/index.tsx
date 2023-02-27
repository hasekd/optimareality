import Layout from "@/components/Layout/Layout";
import React, { useState } from "react";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { theme } from "@/styles/styles";
import { dehydrate, useQuery } from "react-query";
import { GetServerSideProps } from "next";
import PropertyCard from "@/components/PropertyCards/PropertyCard";
import { fetchData, prefetchData } from "@/utils/prefetchData";
import Filter from "@/components/Filter/Filter";

const SellPage = () => {
  const [selectedProp, setSelectedProp] = useState("");
  const [selectedPrice, setSelectedPrice] = useState([0, 0]);
  const [selectedDisposition, setSelectedDisposition] = useState<string[]>([]);

  const { data, isLoading, isError, error } = useQuery(["sell"], fetchData);

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>{JSON.stringify(error)}</Text>;

  const handlePropChange = (propType: string) => {
    setSelectedProp(propType);
  };

  const handlePriceChange = (price: number[]) => {
    setSelectedPrice(price);
  };

  const handleDispositionChange = (e: any) => {
    if (e.target.checked) {
      setSelectedDisposition([...selectedDisposition, e.target.value]);
    } else {
      setSelectedDisposition(
        selectedDisposition.filter(
          (filterDisposition: any) => filterDisposition !== e.target.value
        )
      );
    }
  };

  const handleClearFilter = () => {
    setSelectedProp("");
    setSelectedDisposition([]);
    setSelectedPrice([0, 0]);
  };

  const filteredProp = data.filter(
    (prop: any) =>
      (prop.attributes.propType === selectedProp || selectedProp === "") &&
      (prop.attributes.price >= selectedPrice[0] || selectedPrice[0] === 0) &&
      (prop.attributes.price <= selectedPrice[1] || selectedPrice[1] === 0) &&
      (selectedDisposition.length === 0 ||
        selectedDisposition.includes(prop.attributes.disposition))
  );

  return (
    <Layout>
      <Box maxW={"130rem"} m={"0 auto"} p={"0 1rem"}>
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
            selectedDisposition={selectedDisposition}
            onHandleDispositionChange={handleDispositionChange}
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
                    href={"prodej"}
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

export default SellPage;
