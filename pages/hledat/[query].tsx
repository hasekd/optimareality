import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Layout from "@/components/Layout/Layout";
import React from "react";
import { useSearchInput } from "@/context/SearchInputContext";
import PropertyCard from "@/components/PropertyCards/PropertyCard";

const FindProperty = () => {
  const { searchQuery, filteredProp } = useSearchInput();

  return (
    <Layout>
      <Box maxW={"130rem"} m={"0 auto"} p={"0 2rem"}>
        <Center>
          <Text fontSize={"3rem"} mt={"3rem"}>
            Výsledky vyhledávnání &quot;{searchQuery}&quot;
          </Text>
        </Center>
        <Flex flexWrap={"wrap"} gap={"2.5rem"} m={"4rem 0"} justify={"center"}>
          {filteredProp.map((prop: any) => {
            return (
              <PropertyCard
                key={prop.id}
                {...prop.attributes}
                priceType={"Kč"}
                href={"prodej"}
              />
            );
          })}
        </Flex>
      </Box>
    </Layout>
  );
};

export default FindProperty;
