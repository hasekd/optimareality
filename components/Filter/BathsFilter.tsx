import { theme } from "@/styles/styles";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type BathsFilterProps = {
  selectedBaths: number;
  onHandleBathsChange: (baths: number) => void;
};

const BathsFilter = ({
  selectedBaths,
  onHandleBathsChange,
}: BathsFilterProps) => {
  return (
    <Flex gap={"1rem"}>
      <Box
        p={"1rem 2rem"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        _hover={{ bgColor: "#fff", boxShadow: "0 0 0 1px #000", color: "#000" }}
        color={selectedBaths === 1 ? "#fff" : ""}
        bgColor={
          selectedBaths === 1
            ? theme.color.secondary.red
            : theme.color.other.bgGray
        }
        onClick={() => onHandleBathsChange(1)}
      >
        1
      </Box>
      <Box
        p={"1rem 2rem"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        _hover={{ bgColor: "#fff", boxShadow: "0 0 0 1px #000", color: "#000" }}
        color={selectedBaths === 2 ? "#fff" : ""}
        bgColor={
          selectedBaths === 2
            ? theme.color.secondary.red
            : theme.color.other.bgGray
        }
        onClick={() => onHandleBathsChange(2)}
      >
        2
      </Box>
      <Box
        p={"1rem 2rem"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        _hover={{ bgColor: "#fff", boxShadow: "0 0 0 1px #000", color: "#000" }}
        color={selectedBaths === 3 ? "#fff" : ""}
        bgColor={
          selectedBaths === 3
            ? theme.color.secondary.red
            : theme.color.other.bgGray
        }
        onClick={() => onHandleBathsChange(3)}
      >
        3
      </Box>
      <Box
        p={"1rem 2rem"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        _hover={{ bgColor: "#fff", boxShadow: "0 0 0 1px #000", color: "#000" }}
        color={selectedBaths === 4 ? "#fff" : ""}
        bgColor={
          selectedBaths === 4
            ? theme.color.secondary.red
            : theme.color.other.bgGray
        }
        onClick={() => onHandleBathsChange(4)}
      >
        4
      </Box>
      <Box
        p={"1rem 2rem"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        _hover={{ bgColor: "#fff", boxShadow: "0 0 0 1px #000", color: "#000" }}
        color={selectedBaths === 5 ? "#fff" : ""}
        bgColor={
          selectedBaths === 5
            ? theme.color.secondary.red
            : theme.color.other.bgGray
        }
        onClick={() => onHandleBathsChange(5)}
      >
        5
      </Box>
    </Flex>
  );
};

export default BathsFilter;
