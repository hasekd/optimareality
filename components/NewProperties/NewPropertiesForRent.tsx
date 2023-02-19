import { theme } from "@/styles/styles";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import usePropQuery from "@/hooks/usePropQuery";
import NewPropertyCard from "../PropertyCards/NewPropertyCard";

const NewPropertiesForRent = () => {
  const { data, isLoading, isError, error } = usePropQuery();

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>{JSON.stringify(error)}</Text>;

  const filteredProp = data
    .filter((prop: any) => prop.attributes.rentOrSell === "rent")
    .slice(0, 4);

  return (
    <Flex
      flexDir={"column"}
      align={"center"}
      justify={"center"}
      p={"6rem 1rem"}
      maxW={"130rem"}
      m={"0 auto"}
    >
      <Text
        fontSize={"2.2rem"}
        textAlign={"center"}
        textColor={theme.color.other.grayText}
      >
        Nové nemovitosti
      </Text>
      <Box maxW={"12.9rem"} m={"1.5rem auto 0"}>
        <Heading
          fontSize={"3rem"}
          textAlign={"center"}
          mb={"1.5rem"}
          fontWeight={600}
        >
          Pronájem
        </Heading>
        <Divider borderColor={theme.color.primary.yellow} borderWidth={"2px"} />
      </Box>
      <Flex flexWrap={"wrap"} gap={"2.5rem"} m={"4rem 0"} justify={"center"}>
        {filteredProp.map((prop: any) => (
          <NewPropertyCard
            key={prop.id}
            {...prop.attributes}
            priceType={"Kč /měsíc"}
          />
        ))}
      </Flex>
      <Link href={"/pronajem"}>
        <Text
          fontSize={"1.5rem"}
          fontWeight={600}
          p={"0.9rem 2rem"}
          textColor={theme.color.primary.white}
          bgColor={theme.color.secondary.red}
          _hover={{
            bgColor: "transparent",
            boxShadow: `0 0 0 1px ${theme.color.secondary.red}`,
            textColor: theme.color.secondary.red,
          }}
          transition={"all 0.2s ease-out"}
        >
          Zobrazit více
        </Text>
      </Link>
    </Flex>
  );
};

export default NewPropertiesForRent;
