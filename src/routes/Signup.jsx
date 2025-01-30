import {
  Flex,
  Heading,
  Field,
  Input,
  Center,
  IconButton,
  Button,
  Link as ChakraLink,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import validator from "validator";
import axios from "axios";
import { Link } from "react-router";
import { Undo2 } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowReapeatPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      console.log(data);

      const response = await axios.post("/users", {
        email: "John@gmail.com",
        username: "johnd",
        password: "m38rmF$",
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      });

      console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center marginTop={5} flexDirection={"column"} gap={5}>
      <ChakraLink as={Link} to={"/account"}>
        <Undo2 />
        Back to Sign in
      </ChakraLink>

      <Flex
        gap={5}
        flexDirection={"column"}
        padding={5}
        rounded={"md"}
        shadow={"xl"}
        width={"30%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading alignSelf={"flex-start"}>Sign up</Heading>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{
            width: "100%",
          }}
        >
          <SimpleGrid columns={1} spaceY={5}>
            <Field.Root invalid={!!errors?.email} required>
              <Field.Label>
                Email
                <Field.RequiredIndicator />
              </Field.Label>
              <Input
                placeholder="me@example.com"
                {...register("email", {
                  required: true,
                  validate: (value) =>
                    validator.isEmail(value) || "Invalid Email",
                })}
              />
              <Field.ErrorText>
                {errors?.email?.type === "required"
                  ? "Field Required"
                  : errors?.email?.message}
              </Field.ErrorText>
            </Field.Root>

            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input {...register("name")} />
            </Field.Root>

            <Field.Root invalid={!!errors?.password} required>
              <Field.Label>
                Password <Field.RequiredIndicator />
              </Field.Label>
              <Flex width={"100%"}>
                <Input
                  type={showPassword ? undefined : "password"}
                  {...register("password", {
                    required: true,
                    validate: (value) =>
                      validator.isStrongPassword(value) ||
                      "Password must be minimum chars length 8 includes lower case, upper case, number and special sign.",
                  })}
                />
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff /> : <Eye />}
                </IconButton>
              </Flex>
              <Field.ErrorText>
                {errors?.password?.type === "required"
                  ? "Field Required"
                  : errors?.password?.message}
              </Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors?.repeatPassword} required>
              <Field.Label>
                Repeat password <Field.RequiredIndicator />
              </Field.Label>
              <Flex width={"100%"}>
                <Input
                  type={showRepeatPassword ? undefined : "password"}
                  {...register("repeatPassword", {
                    required: true,
                    validate: (value) =>
                      password === value || "The passwords are not the same",
                  })}
                />
                <IconButton
                  onClick={() => setShowReapeatPassword(!showRepeatPassword)}
                >
                  {showRepeatPassword ? <EyeOff /> : <Eye />}
                </IconButton>
              </Flex>
              <Field.ErrorText>
                {errors?.repeatPassword?.type === "required"
                  ? "Field Required"
                  : errors?.repeatPassword?.message}
              </Field.ErrorText>
            </Field.Root>

            <Button colorPalette={"blue"} type="submit">
              Sign up
            </Button>
          </SimpleGrid>
        </form>
      </Flex>
    </Center>
  );
};

export default Signup;
