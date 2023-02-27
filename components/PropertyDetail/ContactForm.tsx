import {
  Button,
  Flex,
  Text,
  Input,
  InputProps,
  Textarea,
  useToast,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { theme } from "@/styles/styles";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

const InputStyle: InputProps = {
  size: "lg",
  h: "3.3rem",
};

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const toast = useToast();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:1337/api/client-contact-forms",
        {
          data: {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            message: data.message,
          },
        }
      );
      reset();
      toast({
        title: "Váše zpráva byla úspěšně odeslána.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Text fontSize={"1.8rem"} mt={"2rem"}>
        Kontaktní formulář
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl display={"flex"} flexDirection={"column"}>
          <Flex gap={"1.5rem"} m={"1rem 0"}>
            <Flex flexDir={"column"} w={"100%"}>
              <FormLabel fontSize={"1.4rem"}>Jméno</FormLabel>
              <Input {...register("name")} {...InputStyle} required />
            </Flex>
            <Flex flexDir={"column"} w={"100%"}>
              <FormLabel fontSize={"1.4rem"}>Email</FormLabel>
              <Input {...register("email")} {...InputStyle} required />
            </Flex>
          </Flex>
          <FormLabel fontSize={"1.4rem"}>Telefon</FormLabel>
          <Input {...register("phoneNumber")} {...InputStyle} required />
          <FormLabel mt={"1rem"} fontSize={"1.4rem"}>
            Vaše zpráva
          </FormLabel>
          <Textarea {...register("message")} minH={"10rem"} required />

          <Button
            type="submit"
            mt={"1rem"}
            p={"1.7rem 2.2rem"}
            fontSize={"1.3rem"}
            alignSelf={"flex-end"}
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
        </FormControl>
      </form>
    </>
  );
};

export default ContactForm;
