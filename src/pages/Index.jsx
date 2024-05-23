import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Demo Night</Text>
        <Text>Click below to view upcoming events.</Text>
        <Button as={RouterLink} to="/home" colorScheme="blue">
          View Events
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;