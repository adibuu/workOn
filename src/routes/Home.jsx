import useSWR from "swr";
import { Flex, Spinner, Alert, SimpleGrid } from "@chakra-ui/react";

import ProductCard from "@/components/ProductCard";

const Home = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("/products?sort=asc&limit=4");

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      {isLoading && <Spinner size="2xl" />}

      {error && (
        <Alert.Root status="error" maxWidth={"30%"}>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Server Error</Alert.Title>
            <Alert.Description>Sorry for that...</Alert.Description>
          </Alert.Content>
        </Alert.Root>
      )}

      <SimpleGrid columns={4} gap={8}>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Home;
