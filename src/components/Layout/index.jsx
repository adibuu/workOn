/* eslint-disable react/prop-types */
import { Flex, Box } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Flex height={"100vh"} flexDir={"column"}>
      <Navbar />
      <Box mt={"100px"} flex="1" bgColor={"white"} color="black" width={"100%"}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
