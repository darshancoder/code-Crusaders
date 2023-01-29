import {
    Stack,
    Input,
    Box,
    Image,
    Text,
    Badge,
    Button,
    FormLabel,
    Spinner,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useState } from "react";
  import { useRouter } from "next/router";
  import React from "react";
  import  PasswordInput  from "../components/PasswordInput";
  import Link from "next/link";
import Navbar from "@/components/Navbar";
  
  
  const Register = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleClick = () => {
      if (name && email && password) {
        axios
          .post(`https://clever-dove-glasses.cyclic.app/users/register`, {
            name: name,
            email: email,
            password: password,
          })
          .then((res) => {
            console.log(res);
            // console.log(res.data.token);
            alert(res.data.msg);
           router.push("/login")
          })
          .catch((err) => {
            setIsLoading(false);
            setError(true);
          });
      } else {
        alert("Please Fill The Required Fields");
      }
    };
  
    return (
      <div>
          <Navbar/>
        <Box w="20%" m="auto">
          <Box borderBottomWidth="1px" w="100%">
            <Box
              p="4"
              w="100%"
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <Image w="100%" src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/13220131/Educational-Websites.png" />
            </Box>
          </Box>
          <Stack spacing="24px" mt="10px">
            <Box w="100%">
              <FormLabel htmlFor="username"> Name</FormLabel>
              <Input
                w="100%"
                placeholder="Enter your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box w="100%">
              <FormLabel htmlFor="username">Email</FormLabel>
              <Input
                w="100%"
                placeholder="Enter your email id"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box w="100%">
              <FormLabel htmlFor="username">Password</FormLabel>
              <PasswordInput password={password} setPassword={setPassword} />
            </Box>
  
            <Box>
              <Button bg="#ff6f61" w="100%" onClick={handleClick} mt="20px" border="1px solid green" cursor="wait" padding="4px">
                Submit{" "}
                {isLoading && (
                  <div>
                    <Spinner color="red.500" />
                  </div>
                )}
              </Button>
              <Box>Have an account? </Box>
              <Link href="/login">
                <Box
                  w="23%"
                  margin="auto"
                  backgroundColor="#ff6f61"
                  padding="4px"
                  mt="10px"
                  borderRadius="5px"
                >
                  Login
                </Box>
              </Link>
            </Box>
            {/* <Box>
              <Text fontSize="xs">
                By signing up, you agree to our
                <Link color="#0f847d" href="https://www.topuniversities.com/privacy-policy">
                  {" "}
                  <Box w="100%" margin="auto" padding="4px" color="red">
                    Privacy Policy
                  </Box>
                </Link>
              </Text>
            </Box> */}
          </Stack>
        </Box>
      </div>
    );
  };
  
  export default Register