import { useParams, Link } from "react-router";
import useSWR from "swr";
import {
  Flex,
  Spinner,
  Alert,
  Heading,
  Image,
  Text,
  Separator,
  Button,
} from "@chakra-ui/react";
import { Wallet, ShoppingCart } from "lucide-react";

import { Rating } from "@/components/ui/rating";

const Product = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useSWR(`/products/${id}`);

  return (
    <Flex
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
    >
      {isLoading && <Spinner size="xl" marginTop={10} />}

      {error && (
        <Alert.Root status="error" width={"40%"} mt={10}>
          <Alert.Indicator />
          <Alert.Title>There was an error processing your request</Alert.Title>
        </Alert.Root>
      )}

      {product && (
        <Flex
          width={"50%"}
          gap={8}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={10}
          rounded={"md"}
          shadow="xl"
        >
          <Flex justifyContent={"space-between"} width="100%">
            <Flex gap={2}>
              <Text
                as={Link}
                to={"/categories"}
                _hover={{
                  opacity: 0.7,
                }}
                transition={"all ease-in-out 0.3"}
              >
                Categories
              </Text>
              <Text fontWeight={"bold"}>{">"}</Text>
              <Text
                as={Link}
                to={`/categories/${product.category}`}
                textTransform={"capitalize"}
                _hover={{
                  opacity: 0.7,
                }}
                transition={"all ease-in-out 0.3"}
              >
                {product.category}
              </Text>
            </Flex>

            <Flex gap={2}>
              <Button variant="solid" colorPalette={"green"}>
                <Wallet />
                Buy now
              </Button>
              <Button variant="subtle" colorPalette={"blue"}>
                <ShoppingCart />
                Add to cart
              </Button>
            </Flex>
          </Flex>

          <Flex justifyContent={"space-between"} width={"100%"}>
            <Heading size={"xl"}>{product.title}</Heading>
            <Flex alignItems={"center"} gap={1}>
              <Rating
                readOnly
                defaultValue={product.rating.rate}
                size="lg"
                colorPalette={"yellow"}
              />
              <Text>{`(${product.rating.count})`}</Text>
            </Flex>
          </Flex>

          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={300}
            objectFit={"contain"}
          />

          <Separator size="lg" width={"90%"} />

          <Flex flexDir={"column"} gap={1}>
            <Text fontWeight={"bold"}>Description</Text>
            <Text textAlign={"justify"}>{product.description}</Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Product;
