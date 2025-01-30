import useSWR from "swr";
import { Flex, Spinner, Alert } from "@chakra-ui/react";

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

      {products?.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </Flex>
  );
};

export default Home;
