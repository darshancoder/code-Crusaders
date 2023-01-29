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
  import React from "react";
  import  PasswordInput  from "../components/PasswordInput"
  import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Alertbox from "../components/Alertbox"

  
  const Login = () => {
    const router=useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data,setData]=useState("")
 
    const handleClick = () => {
      if (email && password) {
        axios
          .post(`https://clever-dove-glasses.cyclic.app/users/login`, {
            email: email,
            password: password,
          })
          .then((res) => {
            console.log(res);
  
            alert(res.data.msg)
  
            if (res.data.token) {
              localStorage.setItem("Token", res.data.token);
              router.push("/home")
            } else {
              router.push("/login");
            }
          })
          .catch((err) => {
            setIsLoading(false);
            setError(true);
          });
      } else {
        alert("Please Fill your credentials");
      }
    };
    return (
      <div>
          <Navbar/>
          {
            data && <Alertbox data={data}/>
        }
        <Box w="20%" m="auto">
          <Box borderBottomWidth="1px" w="100%">
            <Box p="4" w="100%">
              <Image w="100%" src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/13220131/Educational-Websites.png" />
            </Box>
          </Box>
          <Stack spacing="24px" mt="10px">
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
              <Button bg="#ff6f61" w="100%" onClick={handleClick} mt="20px" cursor="wait"   padding="4px">
                Submit{" "}
                {isLoading && (
                  <div>
                    <Spinner color="red.500" />
                  </div>
                )}
              </Button>
              <Box>Don't Have an Account?</Box>
              <Link href="/signup">
                <Box
                  w={"100px"}
                  margin="auto"
                  backgroundColor="#ff6f61"
                  padding="4px"
                  mt="10px"
                  borderRadius="5px"
                >
                  Register
                </Box>
              </Link>
            </Box>
            {/* <Box>
              <Text fontSize="xs">
                By clickng, you agree with our{" "}
                <a color="#0f847d" href="https://www.topuniversities.com/privacy-policy">
                  {" "}
                  <Box color="red">Privacy Policy</Box>
                </a>
              </Text>
            </Box> */}
          </Stack>
        </Box>
      </div>
    );
  };
  
  export default Login;