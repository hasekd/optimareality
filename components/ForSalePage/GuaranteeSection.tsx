import {
  chakra,
  Flex,
  FlexProps,
  Grid,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { theme } from "@/styles/styles";
import React from "react";

const IconStyle: any = {
  w: "4.8rem",
  h: "4.8rem",
  color: theme.color.primary.yellow,
};

const TextStyle: TextProps = {
  fontSize: "1.6rem",
};

const ContainerStyle: FlexProps = {
  align: "center",
  gap: "1.5rem",
};

const GuaranteeSection = () => {
  const Icon = chakra(FontAwesomeIcon);

  return (
    <Flex
      flexDir={"column"}
      justify={"center"}
      maxW={"130rem"}
      m={"0 auto"}
      minH={"45rem"}
      p={"1rem 1rem 3rem 1rem"}
    >
      <Text fontSize={"3rem"} mb={"4rem"} fontWeight={500}>
        Přehled základních služeb, které Vám jsou garantovány
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
        }}
        gap={"5rem"}
      >
        <Flex {...ContainerStyle}>
          <Icon {...IconStyle} icon={faCircleCheck} />
          <Text {...TextStyle}>
            prohlídka nemovitosti, vyhodnocení stavebně technického stavu,
            fotodokumentace
          </Text>
        </Flex>
        <Flex {...ContainerStyle}>
          <Icon {...IconStyle} icon={faCircleCheck} />
          <Text {...TextStyle}>stanovení reálné tržní ceny</Text>
        </Flex>
        <Flex {...ContainerStyle}>
          <Icon {...IconStyle} icon={faCircleCheck} />
          <Text {...TextStyle}>posouzení daňových rizik</Text>
        </Flex>
        <Flex {...ContainerStyle}>
          <Icon {...IconStyle} icon={faCircleCheck} />
          <Text {...TextStyle}>volba optimální reklamní kampaně</Text>
        </Flex>
        <Flex {...ContainerStyle}>
          <Icon {...IconStyle} icon={faCircleCheck} />
          <Text {...TextStyle}>
            kompletní právní a daňový servis a poradenství
          </Text>
        </Flex>
        <Flex {...ContainerStyle}>
          <Icon {...IconStyle} icon={faCircleCheck} />
          <Text {...TextStyle}>
            vypracování kupní smlouvy právním zástupcem
          </Text>
        </Flex>
        <Flex {...ContainerStyle}>
          <Icon {...IconStyle} icon={faCircleCheck} />
          <Text {...TextStyle}>
            jednání před katastrem nemovitostí včetně úhrady nákladů s tím
            spojených
          </Text>
        </Flex>
        <Flex {...ContainerStyle}>
          <Icon {...IconStyle} icon={faCircleCheck} />
          <Text {...TextStyle}>
            obstarání notářských náležitostí zajištění financování nemovitosti
            ze strany kupujícího prostřednictvím kterékoliv banky
          </Text>
        </Flex>
        <Flex {...ContainerStyle}>
          <Icon {...IconStyle} icon={faCircleCheck} />
          <Text {...TextStyle}>
            garance řádného průběhu platebních transakcí a plného splacení kupní
            ceny
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default GuaranteeSection;
