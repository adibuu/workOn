import { useEffect, useState } from "react";
import { Text, Flex, Spinner } from "@chakra-ui/react";
import axios from "axios";

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products/categories")
  //     .then((response) => {
  //       console.log(response.status);
  //       setCategories(response.data);
  //     })
  //     .catch((error) => {
  //       setError(true);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );

        setCategories(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("TEST Interval");
  //   }, 200);

  //   const timeout = setTimeout(() => {
  //     console.log("TEST Timeout");
  //   }, 200);

  //   return () => {
  //     clearInterval(interval);
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return (
    <Flex gap={5} flexDir={"column"}>
      {loading && <Spinner size="xl" />}
      {error && <Text color="red">{"Error"}</Text>}
      {categories.map((category) => (
        <Text key={category}>{category}</Text>
      ))}
    </Flex>
  );
};

export default Categories;
