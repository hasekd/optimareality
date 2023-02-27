import { Box, Button, chakra, Flex, Input, Text } from "@chakra-ui/react";
import { theme } from "@/styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useSearchInput } from "@/context/SearchInputContext";
import usePropQuery from "@/hooks/usePropQuery";

type Inputs = {
  query: string;
};

const Header = () => {
  const { searchQuery, setSearchQuery, filteredProp, setFilteredProp } =
    useSearchInput();

  const { data, isLoading, isError, error } = usePropQuery();

  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<Inputs>();

  useEffect(() => {
    localStorage.setItem("filteredItems", JSON.stringify(filteredProp));
  }, [filteredProp]);

  const handleSearchInputChange = (e: any) => {
    setSearchQuery(e.target.value);

    localStorage.setItem("searchQuery", e.target.value);
  };

  const onSubmit: SubmitHandler<Inputs> = async () => {
    const filteredItems = data.filter((prop: any) =>
      prop.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProp(filteredItems);

    router.push(`/hledat/${searchQuery}`);
  };

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>{JSON.stringify(error)}</Text>;

  const Icon = chakra(FontAwesomeIcon);
  return (
    <Box bgColor={theme.color.primary.yellow}>
      <Flex
        maxW={"130rem"}
        m={"0 auto"}
        height={"13rem"}
        align={"center"}
        justify={"space-between"}
        p={"0 2rem"}
      >
        <Link href={"/"}>
          <Image
            src={"/images/optima-logo.png"}
            alt="optima reality"
            width={140}
            height={0}
          />
        </Link>
        <Text fontSize={"1.6rem"} fontWeight={500}>
          Na trhu s nemovitostmi od roku 1995
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex>
            <Input
              {...register("query")}
              placeholder="Hledat nemovitost"
              maxW={"20rem"}
              h={"3.5rem"}
              bgColor={theme.color.primary.white}
              fontSize={"1.5rem"}
              borderRadius={"none"}
              onChange={handleSearchInputChange}
            />
            <Button
              type="submit"
              h={"3.5rem"}
              fontSize={"1.3rem"}
              textColor={theme.color.primary.white}
              bgColor={theme.color.secondary.red}
              borderRadius={"none"}
              _hover={{ bgColor: "none" }}
              transition={"all 0.2s ease-out"}
            >
              <Icon icon={faMagnifyingGlass} />
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default Header;
