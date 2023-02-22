import { useRouter } from "next/router";
import {
  Box,
  chakra,
  Flex,
  Heading,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import { dehydrate, useQuery } from "react-query";
import Layout from "@/components/Layout/Layout";
import { formatCurrency } from "@/utils/formatCurrency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faShower,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { GetServerSideProps } from "next";
import { prefetchData } from "@/utils/prefetchData";
import { theme } from "@/styles/styles";
import RealestateContact from "@/components/PropDetail/RealestateContact";
import ContactForm from "@/components/PropDetail/ContactForm";

const fetchPropBySlug = async (slug: string | string[] | undefined) => {
  try {
    const res = await fetch(
      "http://localhost:1337/api/property-cards/" + slug + "?populate=*"
    );

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

const PropertieDetailPage = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const { query } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, isLoading, isError, error } = useQuery(
    ["rent", query.slug],
    () => fetchPropBySlug(query.slug)
  );

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>{JSON.stringify(error)}</Text>;

  const mainImage = data.attributes.image.data.map(
    (image: any) => `http://localhost:1337${image.attributes.url}`
  )[imageIndex];

  const images = data.attributes.image.data.map(
    (image: any) => `http://localhost:1337${image.attributes.url}`
  );

  const prevImage = () => {
    const isFirstImage = imageIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  };

  const nextImage = () => {
    const isLastImage = imageIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
  };

  const goToImage = (imageIndex: number) => {
    setImageIndex(imageIndex);
  };

  const Icon = chakra(FontAwesomeIcon);

  return (
    <Layout>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={"2rem"}
        justify={"center"}
        align={"flex-start"}
        p={"3rem 1.5rem"}
      >
        <Flex flexDir={"column"} gap={"2px"}>
          <Image
            loader={() => mainImage}
            src={mainImage}
            alt={data.attributes.title}
            width={500}
            height={0}
            style={{ width: "60rem", height: "40rem", cursor: "pointer" }}
            onClick={onOpen}
          />
          <Flex gap={"2px"} maxW={"60rem"} overflow={"auto"}>
            {images.map((image: any, index: any) => (
              <Image
                loader={() => image}
                key={index}
                src={image}
                alt={data.attributes.title}
                width={130}
                height={0}
                style={{ cursor: "pointer" }}
                onClick={() => goToImage(index)}
              />
            ))}
          </Flex>
        </Flex>
        <Flex flexDir={"column"}>
          <Heading
            fontWeight={400}
            fontSize={{ base: "2.3rem", md: "2.7rem" }}
            mb={"0.5rem"}
          >
            {data.attributes.title}
          </Heading>
          <Text
            fontSize={"1.4rem"}
            textColor={theme.color.other.grayText}
            mb={"1.2rem"}
          >
            {data.attributes.address}
          </Text>
          <Text
            fontSize={{ base: "1.8rem", md: "2rem" }}
            fontWeight={500}
            mb={"1rem"}
          >
            {formatCurrency(data.attributes.price)} měsíc /Kč
          </Text>

          <Flex
            justify={"space-between"}
            textColor={theme.color.other.grayText}
            mb={"1rem"}
          >
            <Box>
              <Text fontSize={"1.4rem"} fontWeight={500}>
                Pokoje
              </Text>
              <Flex align={"center"} gap={"0.8rem"}>
                <Text
                  textColor={theme.color.primary.black}
                  fontWeight={500}
                  fontSize={"1.9rem"}
                >
                  {data.attributes.bedrooms}
                </Text>
                <Icon icon={faBed} w={"2rem"} h={"2rem"} />
              </Flex>
            </Box>
            <Box>
              <Text fontSize={"1.4rem"} fontWeight={500}>
                Koupelny
              </Text>
              <Flex align={"center"} gap={"0.8rem"}>
                <Text
                  textColor={theme.color.primary.black}
                  fontWeight={500}
                  fontSize={"1.9rem"}
                >
                  {data.attributes.bathrooms}
                </Text>
                <Icon icon={faShower} w={"1.8rem"} h={"1.8rem"} />
              </Flex>
            </Box>
            <Box>
              <Text fontSize={"1.4rem"} fontWeight={500}>
                Užitná plocha
              </Text>
              <Flex align={"center"} gap={"0.6rem"}>
                <Text
                  textColor={theme.color.primary.black}
                  fontWeight={500}
                  fontSize={"1.9rem"}
                >
                  {data.attributes.area}
                </Text>
                <Text fontSize={"1.6rem"} color={"#000"}>
                  m²
                </Text>
              </Flex>
            </Box>
          </Flex>

          <Text fontSize={"1.8rem"} fontWeight={500} mt={"1rem"} mb={"0.5rem"}>
            Popis
          </Text>
          <Text
            maxWidth={"42rem"}
            fontSize={{ base: "1.2rem", md: "1.3rem" }}
            letterSpacing={"0.2px"}
            mb={"3rem"}
          >
            {data.attributes.description}
          </Text>
          <RealestateContact />
          <ContactForm />
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Image
            loader={() => mainImage}
            src={mainImage}
            alt={data.attributes.title}
            width={500}
            height={0}
            style={{ width: "auto", height: "auto" }}
          />
          <Flex
            justify={"center"}
            align={"center"}
            gap={"1rem"}
            bgColor={"#000"}
            color={"#fff"}
            h={"8rem"}
          >
            <Icon
              icon={faChevronLeft}
              w={"4rem"}
              h={"4rem"}
              cursor={"pointer"}
              onClick={prevImage}
            />
            <Text fontSize={"1.5rem"}>
              {imageIndex + 1} / {images.length}
            </Text>
            <Icon
              icon={faChevronRight}
              w={"4rem"}
              h={"4rem"}
              cursor={"pointer"}
              onClick={nextImage}
            />
          </Flex>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { dehydratedState: dehydrate(await prefetchData()) },
  };
};

export default PropertieDetailPage;
