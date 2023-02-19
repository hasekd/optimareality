import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Text,
  TextProps,
  Heading,
  chakra,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { theme } from "@/styles/styles";
import Image from "next/image";
import Header2 from "./Header";

const LinkStyle: TextProps = {
  textTransform: "uppercase",
  cursor: "pointer",
  pos: "relative",
  fontWeight: 600,
  _hover: {
    _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
  },
  _after: {
    content: '""',
    pos: "absolute",
    w: "100%",
    transform: "scaleX(0)",
    h: "0.15rem",
    bottom: "-0.2rem",
    left: "0",
    bgColor: theme.color.primary.white,
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-out",
  },
};

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Icon = chakra(FontAwesomeIcon);

  return (
    <>
      <Flex
        pos={"sticky"}
        top={0}
        zIndex={10}
        w={"100%"}
        justify={"space-between"}
        align={"center"}
        p={"1.5rem"}
        bgColor={theme.color.secondary.red}
      >
        <Link href={"/"}>
          <Image
            src={"/images/optima-logo.png"}
            alt="optima reality"
            width={50}
            height={0}
          />
        </Link>
        <Text fontSize={"1.6rem"} color={"#fff"}>
          Od roku 1995
        </Text>
        <Icon
          icon={faBars}
          onClick={onOpen}
          cursor={"pointer"}
          w={"2.5rem"}
          h={"2.5rem"}
          color={"#fff"}
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            fontSize={"1.3rem"}
            p={"2rem"}
            _hover={{
              bgColor: "transparent",
              textColor: theme.color.primary.yellow,
            }}
          />
          <DrawerBody pt={"4rem"} bgColor={theme.color.secondary.red}>
            <Flex
              flexDir={"column"}
              align={"center"}
              fontSize={"1.8rem"}
              gap={"3rem"}
              textColor={"#fff"}
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
              <form>
                <Flex>
                  <Input
                    placeholder="Hledat nemovitost"
                    maxW={"20rem"}
                    h={"3.5rem"}
                    bgColor={theme.color.primary.white}
                    textColor={theme.color.primary.black}
                    fontSize={"1.5rem"}
                    borderRadius={"none"}
                  />
                  <Button
                    type="submit"
                    h={"3.5rem"}
                    fontSize={"1.3rem"}
                    textColor={theme.color.primary.black}
                    bgColor={theme.color.primary.yellow}
                    borderRadius={"none"}
                    _hover={{ bgColor: "none" }}
                    transition={"all 0.2s ease-out"}
                  >
                    <Icon icon={faMagnifyingGlass} />
                  </Button>
                </Flex>
              </form>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
