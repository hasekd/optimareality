import { theme } from "@/styles/styles";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type BedsFilterProps = {
  selectedBeds: number;
  onHandleBedsChange: (beds: number) => void;
};

const BedsFilter = ({ selectedBeds, onHandleBedsChange }: BedsFilterProps) => {
  return (
    <Flex gap={"1rem"}>
      <Box
        p={"1rem 2rem"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        _hover={{ bgColor: "#fff", boxShadow: "0 0 0 1px #000", color: "#000" }}
        color={selectedBeds === 1 ? "#fff" : ""}
        bgColor={
          selectedBeds === 1
            ? theme.color.secondary.red
            : theme.color.other.bgGray
        }
        onClick={() => onHandleBedsChange(1)}
      >
        1
      </Box>
      <Box
        p={"1rem 2rem"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        _hover={{ bgColor: "#fff", boxShadow: "0 0 0 1px #000", color: "#000" }}
        color={selectedBeds === 2 ? "#fff" : ""}
        bgColor={
          selectedBeds === 2
            ? theme.color.secondary.red
            : theme.color.other.bgGray
        }
        onClick={() => onHandleBedsChange(2)}
      >
        2
      </Box>
      <Box
        p={"1rem 2rem"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        _hover={{ bgColor: "#fff", boxShadow: "0 0 0 1px #000", color: "#000" }}
        color={selectedBeds === 3 ? "#fff" : ""}
        bgColor={
          selectedBeds === 3
            ? theme.color.secondary.red
            : theme.color.other.bgGray
        }
        onClick={() => onHandleBedsChange(3)}
      >
        3
      </Box>
      <Box
        p={"1rem 2rem"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        _hover={{ bgColor: "#fff", boxShadow: "0 0 0 1px #000", color: "#000" }}
        color={selectedBeds === 4 ? "#fff" : ""}
        bgColor={
          selectedBeds === 4
            ? theme.color.secondary.red
            : theme.color.other.bgGray
        }
        onClick={() => onHandleBedsChange(4)}
      >
        4
      </Box>
      <Box
        p={"1rem 2rem"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        _hover={{ bgColor: "#fff", boxShadow: "0 0 0 1px #000", color: "#000" }}
        color={selectedBeds === 5 ? "#fff" : ""}
        bgColor={
          selectedBeds === 5
            ? theme.color.secondary.red
            : theme.color.other.bgGray
        }
        onClick={() => onHandleBedsChange(5)}
      >
        5
      </Box>
    </Flex>
  );
};

export default BedsFilter;
