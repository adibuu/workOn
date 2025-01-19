/* eslint-disable react/prop-types */
import { Link } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router";

const AppLink = ({ to, children }) => {
  let location = useLocation();
  const isActive = location.pathname.includes(to);

  return (
    <Link
      as={NavLink}
      to={to}
      _hover={{
        opacity: 0.8,
        transform: "scale(1.05)",
      }}
      transition={"all ease-in-out 0.25s"}
      textDecoration={"none"}
      color={isActive ? "blue.900" : "white"}
    >
      {children}
    </Link>
  );
};

export default AppLink;
