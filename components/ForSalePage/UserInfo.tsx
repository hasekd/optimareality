import {
  Box,
  Button,
  Flex,
  Text,
  Input,
  InputProps,
  chakra,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { theme } from "@/styles/styles";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

type UserInfoProps = {
  onPrevStep: () => void;
  register: any;
  handleSubmit: any;
};

type Inputs = {
  propType: string;
  area: string;
  city: string;
  address: string;
  description: string;
  name: string;
  email: string;
  phoneNumber: string;
};

const InputStyles: InputProps = {
  h: "3.8rem",
  fontSize: "1.2rem",
};

const UserInfo = ({ onPrevStep, register, handleSubmit }: UserInfoProps) => {
  const { reset } = useForm<Inputs>();

  const Icon = chakra(FontAwesomeIcon);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await axios.post("http://localhost:1337/api/for-sale-rents", {
        data: {
          propType: data.propType,
          area: data.area,
          city: data.city,
          address: data.address,
          description: data.description,
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
        },
      });
      reset();
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

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
              color={theme.color.primary.white}
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
              color={theme.color.secondary.lightRed}
            />
          </Flex>
          <Text fontSize={"2rem"} fontWeight={500}>
            Informace o Vás
          </Text>
        </Flex>
      </Flex>
      <Box maxWidth={"130rem"} m={"0 auto"} p={"0 1rem"}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.7rem",
            maxWidth: "40rem",
            margin: "3rem auto",
          }}
        >
          <Input
            {...register("name")}
            {...InputStyles}
            placeholder="Jméno a příjmení"
          />
          <Input
            {...register("email")}
            {...InputStyles}
            type="email"
            placeholder="E-mail"
          />
          <Input
            {...register("phoneNumber")}
            {...InputStyles}
            placeholder="Telefon"
          />
          <Flex justify={"space-between"} align={"center"}>
            <Button
              p={"1.2rem 2rem"}
              textColor={theme.color.secondary.red}
              bgColor={"transparent"}
              boxShadow={`0 0 0 1px ${theme.color.secondary.red}`}
              borderRadius={"none"}
              _hover={{
                textColor: theme.color.primary.white,
                bgColor: theme.color.secondary.red,
              }}
              transition={"all 0.2s ease-out"}
              onClick={onPrevStep}
            >
              Zpět
            </Button>
            <Button
              type="submit"
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
            >
              Odeslat
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default UserInfo;
