import { Flex, Text, Icon } from "@chakra-ui/react";

import { ShoppingCart } from "lucide-react";

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
      <Flex
        ml="40px"
        shadow={"2xl"}
        pl={2}
        pr={2}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Icon as={ShoppingCart} w={"44px"} h={"44px"} color="white" />
        <Text fontWeight={"bold"} color={"white"} fontSize={"4xl"}>
          Fake Store
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
