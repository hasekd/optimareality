import { Text, Flex } from "@chakra-ui/react";
import React from "react";
import { theme } from "@/styles/styles";
import CardStyle from "./CardStyle";
import usePropQuery from "@/hooks/usePropQuery";

const CardSection = () => {
  const { data, isLoading, isError, error } = usePropQuery();

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>{JSON.stringify(error)}</Text>;

  const rentProp = data.filter(
    (prop: any) => prop.attributes.rentOrSell === "rent"
  );

  const sellProp = data.filter(
    (prop: any) => prop.attributes.rentOrSell === "sell"
  );

  return (
    <Flex flexDir={"column"} justify={"center"} minH={"50rem"} p={"2rem 1rem"}>
      <Text fontSize={"2.5rem"} textAlign={"center"} mb={"2rem"}>
        Co hledáte?
      </Text>
      <Flex
        maxW={"130rem"}
        m={"0 auto"}
        justify={"space-around"}
        gap={"3rem"}
        flexWrap={"wrap"}
      >
        <CardStyle
          numOfProperties={sellProp.length}
          title={
            sellProp.length > 1 && sellProp.length < 5
              ? "Nemovitosti k prodeji"
              : "Nemovitostí k prodeji"
          }
          bgColor={theme.color.other.blue}
          link={"/prodej"}
          buttonTitle={"Zobrazit nabídku"}
        />
        <CardStyle
          numOfProperties={"Chci"}
          title={"prodat | pronajmout"}
          bgColor={theme.color.other.black}
          link={"/prodat-pronajmout"}
          buttonTitle={"Nabídnout nemovitost"}
        />
        <CardStyle
          numOfProperties={rentProp.length}
          title={
            rentProp.length > 1 && rentProp.length < 5
              ? "Nemovitosti k pronájmu"
              : "Nemovitostí k pronájmu"
          }
          bgColor={theme.color.secondary.lightRed}
          link={"/pronajem"}
          buttonTitle={"Zobrazit nabídku"}
        />
      </Flex>
    </Flex>
  );
};

export default CardSection;
