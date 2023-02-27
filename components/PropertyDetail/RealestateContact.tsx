import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { theme } from "@/styles/styles";

const RealestateContact = () => {
  return (
    <>
      <Text mb={"1rem"} fontSize={"1.8rem"}>
        Kontaktujte makléře
      </Text>
      <Flex
        flexDir={"column"}
        p={"1.5rem"}
        bgColor={theme.color.primary.yellow}
      >
        <Flex align={"center"} gap={"1rem"}>
          <Image
            src={"/images/header-house.jpeg"}
            alt={"house"}
            width={100}
            height={0}
          />
          <Flex flexDir={"column"}>
            <Text fontSize={"1.7rem"}>Tatiana Hašková</Text>
            <Text fontSize={"1.4rem"}>608 880 420</Text>
            <Link href="mailto:haskova@optimareality.cz" fontSize={"1.4rem"}>
              haskova@optimareality.cz
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default RealestateContact;
