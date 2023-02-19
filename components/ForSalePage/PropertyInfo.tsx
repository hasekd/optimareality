import Layout from "@/components/Layout/Layout";
import {
  Box,
  Button,
  Flex,
  Text,
  Input,
  InputProps,
  Select,
  Textarea,
  chakra,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { theme } from "@/styles/styles";
import React from "react";

type PropertyInfoProps = {
  onNextStep: () => void;
  register: any;
};

const InputStyles: InputProps = {
  h: "3.8rem",
  fontSize: "1.3rem",
};

const PropertyInfo = ({ onNextStep, register }: PropertyInfoProps) => {
  const Icon = chakra(FontAwesomeIcon);

  return (
    <>
      <Flex justify={"center"} gap={"10rem"} mt={"3rem"} p={"0 1rem"}>
        <Flex flexDir={"column"} align={"center"}>
          <Flex
            justify={"center"}
            align={"center"}
            bgColor={theme.color.primary.yellow}
            borderRadius={"50%"}
            w={"5rem"}
            h={"5rem"}
          >
            <Icon
              icon={faHouse}
              w={"2.2rem"}
              h={"2.2rem"}
              color={theme.color.secondary.lightRed}
            />
          </Flex>
          <Text fontSize={"2rem"} fontWeight={500}>
            Popis nemovitosti
          </Text>
        </Flex>
        <Flex flexDir={"column"} align={"center"}>
          <Flex
            justify={"center"}
            align={"center"}
            bgColor={theme.color.primary.yellow}
            borderRadius={"50%"}
            w={"5rem"}
            h={"5rem"}
          >
            <Icon
              icon={faUser}
              w={"2.2rem"}
              h={"2.2rem"}
              color={theme.color.primary.white}
            />
          </Flex>
          <Text fontSize={"2rem"} fontWeight={500}>
            Informace o Vás
          </Text>
        </Flex>
      </Flex>
      <Box maxWidth={"130rem"} m={"0 auto"} p={"0 1rem"}>
        <form
          onSubmit={(e: any) => e.preventDefault()}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.7rem",
            maxWidth: "100rem",
            margin: "3rem auto",
          }}
        >
          <Flex gap={"1.7rem"}>
            <Select
              {...register("propType")}
              h={"3.8rem"}
              fontSize={"1.3rem"}
              placeholder="Vyberte typ nemovitosti"
            >
              <option value={"Byty"}>Byty</option>
              <option value={"Domy"}>Domy</option>
              <option value={"Pozemky"}>Pozemky</option>
              <option value={"Komerční"}>Komerční</option>
            </Select>
            <Input
              {...register("area")}
              {...InputStyles}
              placeholder="Velikost m²"
            />
          </Flex>
          <Flex gap={"1.7rem"}>
            <Input {...register("city")} {...InputStyles} placeholder="Město" />
            <Input
              {...register("address")}
              {...InputStyles}
              placeholder="Ulice"
            />
          </Flex>
          <Textarea
            {...register("description")}
            placeholder="Popis nemovitosti"
            minH={"10rem"}
            fontSize={"1.3rem"}
          />
          <Button
            alignSelf={"center"}
            p={"1.7rem 2.2rem"}
            fontSize={"1.3rem"}
            textColor={theme.color.primary.white}
            bgColor={theme.color.secondary.red}
            borderRadius={"none"}
            _hover={{
              bgColor: "transparent",
              boxShadow: `0 0 0 1px ${theme.color.secondary.red}`,
              textColor: theme.color.secondary.red,
            }}
            transition={"all 0.2s ease-out"}
            onClick={onNextStep}
          >
            Pokračovat
          </Button>
        </form>
      </Box>
    </>
  );
};

export default PropertyInfo;
