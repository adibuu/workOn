import { useParams } from "react-router";
import useSWR from "swr";
import { Flex, Spinner, Center, Alert, SimpleGrid } from "@chakra-ui/react";

import ProductCard from "@/components/ProductCard";

const Category = () => {
  const { category } = useParams();
  const {
    data: categoryData,
    error,
    isLoading,
  } = useSWR(`/products/category/${category}`);

  return (
    <Flex flexDirection="column">
      <Center>
        {isLoading && <Spinner size="xl" />}
        {error && (
          <Alert.Root status="error">
            <Alert.Indicator />
            <Alert.Title>
              There was an error processing your request
            </Alert.Title>
          </Alert.Root>
        )}

        <SimpleGrid columns={3} gap={8}>
          {categoryData?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Center>
    </Flex>
  );
};

export default Category;
