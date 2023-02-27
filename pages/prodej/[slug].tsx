import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Heading,
  Text,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { dehydrate, useQuery } from "react-query";
import Layout from "@/components/Layout/Layout";
import { formatCurrency } from "@/utils/formatCurrency";
import { GetServerSideProps } from "next";
import { fetchPropBySlug, prefetchData } from "@/utils/prefetchData";
import { theme } from "@/styles/styles";
import RealestateContact from "@/components/PropertyDetail/RealestateContact";
import ContactForm from "@/components/PropertyDetail/ContactForm";
import ImageModal from "@/components/ImageModal/ImageModal";
import PropertyParams from "@/components/PropertyDetail/PropertyParams";

const PropertyDetail = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const { query } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, isLoading, isError, error } = useQuery(
    ["sell", query.slug],
    () => fetchPropBySlug(query.slug)
  );

  let imagesLength = 0;

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      if (e.key === "ArrowRight") {
        setImageIndex((prevIndex) =>
          imageIndex === imagesLength - 1 ? 0 : prevIndex + 1
        );
      }

      if (e.key === "ArrowLeft") {
        setImageIndex((prevIndex) =>
          imagesLength === 0
            ? 0
            : imagesLength > 0 && imageIndex === 0
            ? imagesLength - 1
            : prevIndex - 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [imageIndex, imagesLength]);

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>{JSON.stringify(error)}</Text>;

  const mainImage = data.attributes.image.data.map(
    (image: any) => `http://localhost:1337${image.attributes.url}`
  )[imageIndex];

  const images = data.attributes.image.data.map(
    (image: any) => `http://localhost:1337${image.attributes.url}`
  );

  imagesLength = images.length;

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

  return (
    <Layout>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={"2rem"}
        justify={"center"}
        align={{ base: "center", lg: "flex-start" }}
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
            {images.map((image: any, index: number) => (
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
          <PropertyParams data={data} />
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
            mb={"1.5rem"}
          >
            {formatCurrency(data.attributes.price)} Kč
          </Text>

          <Grid
            gridTemplateColumns={"1fr 1fr"}
            gap={"1rem"}
            textColor={theme.color.other.grayText}
            mb={"1rem"}
          >
            <Box>
              <Text fontSize={"1.4rem"} fontWeight={500}>
                Dispozice
              </Text>
              <Flex align={"center"} gap={"0.8rem"}>
                <Text
                  textColor={theme.color.primary.black}
                  fontWeight={500}
                  fontSize={"1.9rem"}
                >
                  {data.attributes.disposition}
                </Text>
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
                  {data.attributes.area} m²
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text fontSize={"1.4rem"} fontWeight={500}>
                Vlastnictví
              </Text>
              <Flex align={"center"} gap={"0.8rem"}>
                <Text
                  textColor={theme.color.primary.black}
                  fontWeight={500}
                  fontSize={"1.9rem"}
                >
                  {data.attributes.vlastnictvi}
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text fontSize={"1.4rem"} fontWeight={500}>
                Stav nemovitosti
              </Text>
              <Flex align={"center"} gap={"0.8rem"}>
                <Text
                  textColor={theme.color.primary.black}
                  fontWeight={500}
                  fontSize={"1.9rem"}
                >
                  {data.attributes.stavNemovitosti}
                </Text>
              </Flex>
            </Box>
          </Grid>

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

      <ImageModal
        isOpen={isOpen}
        onClose={onClose}
        mainImage={mainImage}
        data={data}
        prevImage={prevImage}
        imageIndex={imageIndex}
        images={images}
        nextImage={nextImage}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { dehydratedState: dehydrate(await prefetchData()) },
  };
};

export default PropertyDetail;
