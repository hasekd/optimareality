import { theme } from "@/styles/styles";
import { formatCurrency } from "@/utils/formatCurrency";
import {
  Box,
  Card,
  CardFooter,
  chakra,
  Divider,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faShower,
  faSquareFull,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type PropertyCardProps = {
  image: any;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  priceType: string;
};

const NewPropertyCard = ({
  image,
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  area,
  priceType,
}: PropertyCardProps) => {
  const Icon = chakra(FontAwesomeIcon);

  const srcImage = image.data.map(
    (image: any) => `http://localhost:1337${image.attributes.url}`
  )[0];

  return (
    <Link href={"/"}>
      <Card maxW="md" boxShadow={theme.shadow.boxShadow}>
        <Image
          loader={() => srcImage}
          src={srcImage}
          alt={title}
          width={300}
          height={0}
          style={{ width: "auto", height: "auto", objectFit: "cover" }}
        />
        <Box p={"1rem"}>
          <Text fontSize={"1.8rem"} mb={"0.5rem"} fontWeight={500}>
            {title}
          </Text>
          <Text
            fontSize={"1.4rem"}
            textColor={theme.color.other.grayText}
            mb={"0.5rem"}
          >
            {address}
          </Text>
          <Text fontSize={"1.6rem"} fontWeight={500}>
            {formatCurrency(price)} {priceType}
          </Text>
        </Box>
        <Divider
          w={"90%"}
          m={"1rem auto"}
          borderColor={theme.color.other.grayText}
        />

        <CardFooter>
          <Flex
            w={"100%"}
            justify={"space-between"}
            p={"0 1rem"}
            textColor={theme.color.other.grayText}
          >
            <Box>
              <Icon icon={faBed} w={"1.7rem"} h={"1.7rem"} />
              <Text fontSize={"1.2rem"}>Pokoje</Text>
              <Text
                textColor={theme.color.primary.black}
                fontWeight={600}
                fontSize={"1.7rem"}
              >
                {bedrooms}
              </Text>
            </Box>
            <Box>
              <Icon icon={faShower} w={"1.6rem"} h={"1.6rem"} />
              <Text fontSize={"1.2rem"}>Koupelny</Text>
              <Text
                textColor={theme.color.primary.black}
                fontWeight={600}
                fontSize={"1.7rem"}
              >
                {bathrooms}
              </Text>
            </Box>
            <Box>
              <Icon icon={faSquareFull} w={"1.4rem"} h={"1.4rem"} />
              <Text fontSize={"1.2rem"}>m??</Text>
              <Text
                textColor={theme.color.primary.black}
                fontWeight={600}
                fontSize={"1.7rem"}
              >
                {area}
              </Text>
            </Box>
          </Flex>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NewPropertyCard;
