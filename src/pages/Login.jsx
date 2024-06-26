import { useState } from "react";
import { Box, Button, Input, VStack, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Allow any email and password combination to log in
    if (email && password) {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", "true"); // Save login state to localStorage
      navigate("/home");
    } else {
      setError("Email and password cannot be empty");
    }
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading mb={6} textAlign="center">Login</Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Text color="red.500">{error}</Text>}
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;