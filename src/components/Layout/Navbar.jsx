import { Flex, Text } from "@chakra-ui/react";

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
      <Text
        fontWeight={"bold"}
        color={"white"}
        fontSize={"4xl"}
        ml="40px"
        shadow={"2xl"}
        pl={2}
        pr={2}
      >
        Fake Store
      </Text>
    </Flex>
  );
};

export default Navbar;
