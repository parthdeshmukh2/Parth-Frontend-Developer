import { Box, Input, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/AuthReducer/action";
import Navbar from "../Components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPass] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const lastLocation = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    if (email && password) {
      dispatch(userLogin({ email, password })).then((res) => navigate("/home"));
    }
  };

  console.log(lastLocation);

  return (
    <Box>
      <Navbar />

      <Box
        w={{ base: "90%", md: "70%", lg: "30%" }}
        m="auto"
        mt="50px"
        boxShadow="xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderRadius="10px"
        bg="gray.200"
      >
        <Input
          type="text"
          placeholder="Enter Email"
          w="80%"
          m="auto"
          color="black"
          mt="8"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Enter Password"
          w="80%"
          m="auto"
          color="black"
          mt="8"
          onChange={(e) => setPass(e.target.value)}
        />

        <Button mb="8" mt="8" onClick={handleLogin}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
