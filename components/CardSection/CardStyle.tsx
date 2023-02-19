import { Card, CardBody, CardFooter, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { theme } from "@/styles/styles";
import React from "react";

const CardStyle = ({
  numOfProperties,
  title,
  bgColor,
  link,
  buttonTitle,
}: any) => {
  return (
    <Card
      w={{ base: "30rem", lg: "35rem" }}
      bgColor={bgColor}
      h={"35rem"}
      textColor={theme.color.primary.white}
    >
      <Flex flexDir={"column"} align={"center"} justify={"center"} h={"100%"}>
        <Text fontSize={"2.7rem"}>{numOfProperties}</Text>
        <Text fontSize={"2.7rem"} mb={"3rem"}>
          {title}
        </Text>

        <Link href={link}>
          <Text
            bgColor={"#fff"}
            textColor={"#000"}
            fontSize={"1.8rem"}
            p={"0.8rem 2rem"}
            _hover={{
              bgColor: "transparent",
              textColor: "#fff",
              boxShadow: "0 0 0 1px white",
            }}
            transition={"all 0.2s ease-out"}
          >
            {buttonTitle}
          </Text>
        </Link>
      </Flex>
    </Card>
  );
};

export default CardStyle;
