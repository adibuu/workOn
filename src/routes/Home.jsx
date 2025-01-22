import { Flex, Text } from "@chakra-ui/react";
import useSWR from "swr";

const Home = () => {
  const { data: categories } = useSWR("/products/categories");

  return (
    <Flex
      justifyContent={"center"}
      gap={5}
      flexDir={"column"}
      alignItems={"center"}
    >
      {categories?.map((category) => (
        <Text key={category}>{category}</Text>
      ))}
    </Flex>
  );
};

export default Home;
