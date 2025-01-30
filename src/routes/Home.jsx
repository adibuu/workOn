import useSWR from "swr";
import { Flex, Spinner, Alert, SimpleGrid } from "@chakra-ui/react";
import { createListCollection } from "@chakra-ui/react";
import { useState } from "react";

import ProductCard from "@/components/ProductCard";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../components/ui/select";

const Home = () => {
  const [currentLimit, setCurrentLimit] = useState([4]);
  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`/products?sort=asc&limit=${currentLimit[0]}`);

  const productsLimit = createListCollection({
    items: [
      { label: "4", value: 4 },
      { label: "8", value: 8 },
      { label: "16", value: 16 },
    ],
  });

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={6}
    >
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

      <SelectRoot
        collection={productsLimit}
        size="sm"
        width="320px"
        value={currentLimit}
        onValueChange={(event) => setCurrentLimit(event.value)}
      >
        <SelectLabel>Select products limit on page</SelectLabel>
        <SelectTrigger>
          <SelectValueText placeholder="Select limit" />
        </SelectTrigger>
        <SelectContent>
          {productsLimit.items.map((limit) => (
            <SelectItem item={limit} key={limit.value}>
              {limit.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      <SimpleGrid columns={4} gap={8}>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Home;
