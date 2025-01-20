/* eslint-disable react/prop-types */
import { Flex, Box } from "@chakra-ui/react";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Flex height={"100vh"} flexDirection={"column"}>
      <Navbar />
      <Box
        flex={1}
        width={"100%"}
        backgroundColor={"white"}
        color="black"
        marginTop={"70px"}
      >
        {children}
      </Box>
      <Box></Box>
    </Flex>
  );
};

export default Layout;
