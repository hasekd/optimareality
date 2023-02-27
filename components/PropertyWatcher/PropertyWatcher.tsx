import {
  Box,
  Button,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormLabel,
  Select,
  Grid,
  useToast,
} from "@chakra-ui/react";
import { theme } from "@/styles/styles";
import { WatcherSVG } from "@/SVGS/WatcherSVG";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import axios from "axios";
import PropertyDetail from "../PropertyDetail/PropertyDetail";

type Inputs = {
  email: string;
  category: string;
};

const PropertyWatcher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const toast = useToast();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await axios.post("http://localhost:1337/api/prop-watchers", {
        data: {
          email: data.email,
          category: data.category,
        },
      });
      reset();
      toast({
        title: "Váš email byl úspěšně uložen.",
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
      <Box>
        <Flex
          flexDir={"column"}
          justify={"center"}
          maxW={"130rem"}
          h={"30rem"}
          m={"0 auto"}
          textAlign={"center"}
        >
          <Text fontSize={"3rem"} mb={"3rem"} fontWeight={600}>
            Hlídáč nemovitostí
          </Text>
          <Text fontSize={"1.7rem"} mb={"4rem"}>
            V případě nové nemovitosti podle Vašeho nastavení Vás budeme
            prostřednictvím emailu obratem informovat.
          </Text>
          <Button
            alignSelf={"center"}
            fontSize={"1.6rem"}
            p={"2rem 3rem"}
            borderRadius={"none"}
            textColor={theme.color.primary.white}
            bgColor={theme.color.secondary.red}
            _hover={{
              bgColor: "transparent",
              boxShadow: `0 0 0 1px ${theme.color.secondary.red}`,
              textColor: theme.color.secondary.red,
            }}
            transition={"all 0.2s ease-out"}
            onClick={onOpen}
          >
            Nastavit hlídače
          </Button>
        </Flex>
      </Box>

      <Modal size={"6xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={"4rem"}>
            <Grid
              gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
              justifyItems={"center"}
              gap={"5rem"}
            >
              <Flex flexDir={"column"}>
                <Text fontSize={"2rem"} mb={"1.5rem"} fontWeight={600}>
                  Hlídač nemovitostí
                </Text>
                <Text fontSize={"1.5rem"}>
                  Nyní si můžete vytvořit hlídače nemovitostí. Zadejte Váš email
                  a vyberte kategorii.
                </Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Flex flexDir={"column"}>
                    <FormLabel mt={"2rem"} fontSize={"1.5rem"}>
                      Email
                    </FormLabel>
                    <Input
                      {...register("email")}
                      mb={"1rem"}
                      type="email"
                      h={"3.5rem"}
                      fontSize={"1.5rem"}
                      required
                    />
                    <FormLabel fontSize={"1.5rem"}>Kategorie</FormLabel>
                    <Select
                      {...register("category")}
                      placeholder="Vyberte kategorii"
                      mb={"2.5rem"}
                      h={"3.5rem"}
                      fontSize={"1.4rem"}
                      required
                    >
                      <option value="Byty - prodej">Byty - prodej</option>
                      <option value="Byty - pronájem">Byty - pronájem</option>
                      <option value="Domy - prodej">Domy - prodej</option>
                      <option value="Domy - pronájem">Domy - pronájem</option>
                      <option value="Pozemky - prodej">Pozemky - prodej</option>
                      <option value="Pozemky - pronájem">
                        Pozemky - pronájem
                      </option>
                    </Select>
                    <Button
                      type="submit"
                      fontSize={"1.4rem"}
                      p={"1.5rem"}
                      alignSelf={"center"}
                      borderRadius={"none"}
                      textColor={theme.color.primary.white}
                      bgColor={theme.color.secondary.red}
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
              </Flex>
              <WatcherSVG />
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PropertyWatcher;
