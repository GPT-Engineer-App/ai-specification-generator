import { Container, Text, VStack, Box, Heading, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  // Placeholder data for events
  const events = [
    { id: 1, name: "Demo Night 2023", date: "2023-12-01", coverImage: "path/to/image1.jpg" },
    { id: 2, name: "Tech Showcase 2023", date: "2023-11-15", coverImage: "path/to/image2.jpg" },
  ];

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" textAlign="center">Welcome to Demo Night</Text>
        <Text textAlign="center">Click below to view upcoming events.</Text>
        {loggedIn && (
          <Button colorScheme="blue" mb={4} onClick={() => navigate("/create-event")}>
            Create Event
          </Button>
        )}
        {events.map((event) => (
          <Link as={RouterLink} to={`/event/${event.id}`} key={event.id}>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg="gray.100"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Heading size="md" mb={2}>{event.name}</Heading>
              <Text mb={2}>{event.date}</Text>
              <Box
                as="img"
                src={event.coverImage}
                alt={`${event.name} cover`}
                borderRadius="md"
                boxSize="150px"
                objectFit="cover"
              />
            </Box>
          </Link>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;