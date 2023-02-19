import { Box, Flex, Text, TextProps } from "@chakra-ui/react";
import { theme } from "@/styles/styles";
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import Header from "./Header";

const LinkStyle: TextProps = {
  fontSize: "1.7rem",
  cursor: "pointer",
  color: theme.color.primary.white,
  textTransform: "uppercase",
  pos: "relative",
  _hover: {
    _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
  },
  _after: {
    content: '""',
    pos: "absolute",
    w: "100%",
    transform: "scaleX(0)",
    h: "0.15rem",
    bottom: "-0.1rem",
    left: "0",
    bgColor: theme.color.primary.white,
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-out",
  },
};

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Navbar = () => {
  const [width, height] = useWindowSize();

  return (
    <>
      {width > 800 ? (
        <>
          <Header />
          <Box
            bgColor={theme.color.secondary.red}
            pos={"sticky"}
            top={0}
            zIndex={10}
          >
            <Flex
              justify={"center"}
              align={"center"}
              h={"5rem"}
              maxW={"130rem"}
              m={"0 auto"}
            >
              <Box p={"1rem"}>
                <Link href={"/"}>
                  <Text {...LinkStyle}>Úvod</Text>
                </Link>
              </Box>
              <Box p={"1rem"}>
                <Link href={"/pronajem"}>
                  <Text {...LinkStyle}>Chci najmout</Text>
                </Link>
              </Box>
              <Box p={"1rem"}>
                <Link href={"/prodej"}>
                  <Text {...LinkStyle}>Chci koupit</Text>
                </Link>
              </Box>
              <Box p={"1rem"}>
                <Link href={"/prodat-pronajmout"}>
                  <Text {...LinkStyle}>Chci prodat | pronajmout</Text>
                </Link>
              </Box>
              <Box p={"1rem"}>
                <Link href={"/"}>
                  <Text {...LinkStyle}>O nás</Text>
                </Link>
              </Box>
              <Box p={"1rem"}>
                <Link href={"/"}>
                  <Text {...LinkStyle}>Kontakt</Text>
                </Link>
              </Box>
            </Flex>
          </Box>
        </>
      ) : (
        <MobileNavbar />
      )}
    </>
  );
};

export default Navbar;
