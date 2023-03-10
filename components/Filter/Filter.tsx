import {
  Button,
  Flex,
  FlexProps,
  Grid,
  Icon,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdNaturePeople } from "react-icons/md";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { RiBuilding2Fill } from "react-icons/ri";
import React, { useState } from "react";
import { theme } from "@/styles/styles";
import { formatCurrency } from "@/utils/formatCurrency";
import DispositionFilter from "./DispositionFilter";

type FilterProps = {
  prop: any;
  filteredProp: any;
  propType: string;
  selectedProp: string;
  onHandlePropChange: (propType: string) => void;
  onHandlePriceChange: (price: number[]) => void;
  selectedDisposition: string[];
  onHandleDispositionChange: (e: any) => void;
  onHandleClearFilter: () => void;
};

const PropertyTypeBoxStyle: FlexProps = {
  flexDir: "column",
  justify: "center",
  align: "center",
  bgColor: theme.color.other.bgGray,
  p: "1rem 2rem",
  gap: "0.3rem",
  cursor: "pointer",
  _hover: { bgColor: "#fff", boxShadow: "0 0 0 1px #000", color: "#000" },
};

const PropertyTypeTextStyle: TextProps = {
  fontSize: "1.2rem",
};

const Filter = ({
  prop,
  filteredProp,
  propType,
  selectedProp,
  onHandlePropChange,
  onHandlePriceChange,
  selectedDisposition,
  onHandleDispositionChange,
  onHandleClearFilter,
}: FilterProps) => {
  let priceData;

  priceData = prop
    .map((prop: any) => {
      if (prop.attributes.rentOrSell === propType) {
        return prop.attributes.price;
      } else {
        return 0;
      }
    })
    .sort((a: number, b: number) => a - b)
    .filter((price: any) => price !== 0);

  const minPrice = priceData[0];
  const maxPrice = priceData[priceData.length - 1];

  const [value, setValue] = useState([minPrice, maxPrice]);

  return (
    <Flex flexDir={"column"}>
      <Text fontSize={"1.6rem"} fontWeight={500} mb={"1.5rem"}>
        Typ nemovitosti
      </Text>
      <Grid gridTemplateColumns={"1fr 1fr"} gap={"1rem"}>
        <Flex
          {...PropertyTypeBoxStyle}
          onClick={() => onHandlePropChange("Domy")}
        >
          <Icon
            as={BsFillHouseDoorFill}
            w={"1.8rem"}
            h={"1.8rem"}
            color={selectedProp === "Domy" ? theme.color.secondary.red : ""}
          />
          <Text {...PropertyTypeTextStyle}>Domy</Text>
        </Flex>
        <Flex
          {...PropertyTypeBoxStyle}
          onClick={() => onHandlePropChange("Byty")}
        >
          <Icon
            as={HiBuildingOffice2}
            w={"1.8rem"}
            h={"1.8rem"}
            color={selectedProp === "Byty" ? theme.color.secondary.red : ""}
          />
          <Text {...PropertyTypeTextStyle}>Byty</Text>
        </Flex>
        <Flex
          {...PropertyTypeBoxStyle}
          onClick={() => onHandlePropChange("Pozemky")}
        >
          <Icon
            as={MdNaturePeople}
            w={"1.8rem"}
            h={"1.8rem"}
            color={selectedProp === "Pozemky" ? theme.color.secondary.red : ""}
          />
          <Text {...PropertyTypeTextStyle}>Pozemky</Text>
        </Flex>
        <Flex
          {...PropertyTypeBoxStyle}
          onClick={() => onHandlePropChange("Komer??n??")}
        >
          <Icon
            as={RiBuilding2Fill}
            w={"1.8rem"}
            h={"1.8rem"}
            color={selectedProp === "Komer??n??" ? theme.color.secondary.red : ""}
          />
          <Text {...PropertyTypeTextStyle}>Komer??n??</Text>
        </Flex>
      </Grid>

      <Text fontSize={"1.6rem"} fontWeight={500} m={"1.5rem 0"}>
        Rozpo??et
      </Text>
      <RangeSlider
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        aria-label={["min", "max"]}
        defaultValue={[minPrice, maxPrice]}
        min={minPrice}
        max={maxPrice}
        value={value}
        onChange={(price) => setValue(price)}
        onChangeEnd={(price) => onHandlePriceChange(price)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg={theme.color.secondary.red} />
        </RangeSliderTrack>
        <RangeSliderThumb
          index={0}
          boxSize={5}
          bg={theme.color.secondary.red}
        />
        <RangeSliderThumb
          index={1}
          boxSize={5}
          bg={theme.color.secondary.red}
        />
      </RangeSlider>
      <Flex justify={"space-between"} mt={"0.8rem"}>
        <Text fontSize={"1.1rem"} fontWeight={600}>
          {formatCurrency(value[0])} K??
        </Text>
        <Text fontSize={"1.1rem"} fontWeight={600}>
          {formatCurrency(value[1])} K??
        </Text>
      </Flex>

      <Text fontSize={"1.6rem"} fontWeight={500} mt={"1.5rem"}>
        Dispozice
      </Text>
      <DispositionFilter
        selectedDisposition={selectedDisposition}
        onHandleDispositionChange={onHandleDispositionChange}
      />

      {filteredProp.length <= prop.length - 1 ? (
        <>
          <Button
            alignSelf={"flex-end"}
            fontSize={"1.2rem"}
            p={"1.5rem"}
            m={"1.5rem 0"}
            fontWeight={500}
            bgColor={theme.color.secondary.red}
            color={"#fff"}
            _hover={{
              bgColor: "transparent",
              boxShadow: `0 0 0 1px ${theme.color.secondary.red}`,
              textColor: theme.color.secondary.red,
            }}
            transition={"all 0.2s ease-out"}
            onClick={() => {
              setValue([minPrice, maxPrice]);
              return onHandleClearFilter();
            }}
          >
            Smazat filtry
          </Button>
        </>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default Filter;
