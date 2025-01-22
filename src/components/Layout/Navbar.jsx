import { Flex, Text, Icon } from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

import AppLink from "./AppLink";

const Navbar = () => {
  return (
    <Flex
      width="100%"
      position="fixed"
      height={"70px"}
      bgColor={"blue.400"}
      alignItems={"center"}
      justifyContent={"space-between"}
      shadow={"xl"}
    >
      <Link to="/">
        <Flex
          ml="40px"
          shadow={"2xl"}
          pl={2}
          pr={2}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
        >
          <Icon as={ShoppingCart} w={"44px"} h={"44px"} color="white" />
          <Text fontWeight={"bold"} color={"white"} fontSize={"4xl"}>
            Fake Store
          </Text>
        </Flex>
      </Link>

      <Flex gap={5} fontWeight={"bold"} fontSize={"lg"} color="White" mr="40px">
        <AppLink to="/categories">
          <Text>Categories</Text>
        </AppLink>
        <AppLink to="/account">
          <Text>Account</Text>
        </AppLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
