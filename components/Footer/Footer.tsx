import {
  Box,
  chakra,
  Flex,
  FlexProps,
  Grid,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { theme } from "@/styles/styles";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

const ListStyle: FlexProps = {
  flexDir: "column",
  gap: "1.5rem",
  fontSize: "1.4rem",
};

const LinkStyle: TextProps = {
  _hover: { color: theme.color.primary.yellow },
  transition: "all 0.2s ease-out",
};

const IconLink = styled.a`
  :hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const Icon = chakra(FontAwesomeIcon);

  return (
    <Box bgColor={theme.color.other.bgGray2}>
      <Flex maxW={"130rem"} m={"0 auto"} flexDir={"column"}>
        <Grid
          gap={"4rem"}
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          justifyItems={{ base: "unset", sm: "center" }}
          alignItems={"center"}
          p={{ base: "4rem", sm: "2rem" }}
        >
          <Flex flexDir={"column"} gap={"2rem"}>
            <Link href={"/"}>
              <Image
                src={"/images/optima-logo.png"}
                alt="optima reality"
                width={100}
                height={0}
              />
            </Link>
          </Flex>
          <Grid {...ListStyle} gridTemplateColumns={"1fr 1fr"}>
            <Link href={"/o-nas"}>
              <Text {...LinkStyle}>Chci najmout</Text>
            </Link>
            <Link href={"/pelisky"}>
              <Text {...LinkStyle}>Chci koupit</Text>
            </Link>
            <Link href={"/kontakt"}>
              <Text {...LinkStyle}>Chci prodat</Text>
            </Link>
            <Link href={"/kontakt"}>
              <Text {...LinkStyle}>Chci pronajmout</Text>
            </Link>
            <Link href={"/kontakt"}>
              <Text {...LinkStyle}>O nás</Text>
            </Link>
          </Grid>
          <Flex {...ListStyle}>
            <Text fontSize={"2rem"} mb={"1rem"}>
              Kontakt
            </Text>
            <IconLink
              href="tel: 608880420"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "1.8rem",
              }}
            >
              <Flex
                justify={"center"}
                align={"center"}
                bgColor={theme.color.primary.yellow}
                borderRadius={"50%"}
                w={"4rem"}
                h={"4rem"}
              >
                <Icon
                  icon={faPhone}
                  w={"2rem"}
                  h={"2rem"}
                  color={theme.color.secondary.lightRed}
                  _hover={{ color: theme.color.primary.white }}
                  transition={"all 0.2s ease-out"}
                />
              </Flex>
              +420 608 880 420
            </IconLink>
            <IconLink
              href="mailto:info@optimareality.cz"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "1.8rem",
              }}
            >
              <Flex
                justify={"center"}
                align={"center"}
                bgColor={theme.color.primary.yellow}
                borderRadius={"50%"}
                w={"4rem"}
                h={"4rem"}
              >
                <Icon
                  icon={faEnvelope}
                  w={"2rem"}
                  h={"2rem"}
                  color={theme.color.secondary.lightRed}
                  _hover={{ color: theme.color.primary.white }}
                  transition={"all 0.2s ease-out"}
                />
              </Flex>
              info@optimareality.cz
            </IconLink>
          </Flex>
        </Grid>
        <Box alignSelf={"center"} pb={"2rem"} fontSize={"1.5rem"}>
          Made by{" "}
          <Link href={"https://danielhasek.co"} target="_blank">
            <Text
              display={"inline"}
              _hover={{ color: theme.color.primary.yellow }}
              transition={"all 0.2s ease-out"}
            >
              Daniel Hasek
            </Text>
          </Link>
        </Box>
        <Box textAlign={"center"} pb={"2rem"}>
          <Text fontSize={"1.3rem"}>
            Všechna práva vyhrazena &copy; {new Date().getFullYear()} Optima
            reality
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
