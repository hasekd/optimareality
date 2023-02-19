import { Box, Button, chakra, Flex, Input, Text } from "@chakra-ui/react";
import { theme } from "@/styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const Icon = chakra(FontAwesomeIcon);
  return (
    <Box bgColor={theme.color.primary.yellow}>
      <Flex
        maxW={"130rem"}
        m={"0 auto"}
        height={"13rem"}
        align={"center"}
        justify={"space-between"}
        p={"0 2rem"}
      >
        <Link href={"/"}>
          <Image
            src={require("../../public/images/optima-logo.png")}
            alt="optima reality"
            width={0}
            height={0}
          />
        </Link>
        <Text fontSize={"1.6rem"}>Na trhu s nemovitostmi od roku 1995</Text>
        <form>
          <Flex>
            <Input
              placeholder="Hledat nemovitost"
              maxW={"20rem"}
              h={"3.5rem"}
              bgColor={theme.color.primary.white}
              fontSize={"1.5rem"}
              borderRadius={"none"}
            />
            <Button
              type="submit"
              h={"3.5rem"}
              fontSize={"1.3rem"}
              textColor={theme.color.primary.white}
              bgColor={theme.color.secondary.red}
              borderRadius={"none"}
              _hover={{ bgColor: "none" }}
              transition={"all 0.2s ease-out"}
            >
              <Icon icon={faMagnifyingGlass} />
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default Header;
