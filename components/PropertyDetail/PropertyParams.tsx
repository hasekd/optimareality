import { Flex, Text, TextProps } from "@chakra-ui/react";
import React from "react";

const PropertyParamStyle: TextProps = {
  fontSize: "1.4rem",
};

const PropertyParams = ({ data }: any) => {
  return (
    <Flex flexDir={"column"} gap={"1rem"} mt={"3rem"}>
      <Text fontSize={"1.8rem"} fontWeight={500}>
        Parametry nemovitosti
      </Text>
      <Text {...PropertyParamStyle}>
        Druh stavby: {data.attributes.druhStavby}
      </Text>
      <Text {...PropertyParamStyle}>
        Vlastnictví: {data.attributes.vlastnictvi}
      </Text>
      <Text {...PropertyParamStyle}>
        Stav nemovitosti: {data.attributes.stavNemovitosti}
      </Text>
      <Text {...PropertyParamStyle}>
        Číslo podlaží: {data.attributes.podlazi}
      </Text>
      <Text {...PropertyParamStyle}>
        Parkování: {data.attributes.parkovani}
      </Text>
      <Text {...PropertyParamStyle}>Výtah: {data.attributes.vytah}</Text>
      <Text {...PropertyParamStyle}>Vytápění: {data.attributes.vytapeni}</Text>
      <Text {...PropertyParamStyle}>Vybavení: {data.attributes.vybaveni}</Text>
      <Text {...PropertyParamStyle}>
        Energetický štítek: {data.attributes.energetickyStitek}
      </Text>
    </Flex>
  );
};

export default PropertyParams;
