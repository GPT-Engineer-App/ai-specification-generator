import { Box, Heading, VStack, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  // Placeholder data for events
  const events = [
    { id: 1, name: "Demo Night 2023", date: "2023-12-01", coverImage: "path/to/image1.jpg" },
    { id: 2, name: "Tech Showcase 2023", date: "2023-11-15", coverImage: "path/to/image2.jpg" },
  ];

  return (
    <Box p={4}>
      <Heading mb={4}>Upcoming Events</Heading>
      <VStack spacing={4}>
        {events.map((event) => (
          <Link as={RouterLink} to={`/event/${event.id}`} key={event.id}>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              width="100%"
              bg="gray.100"
            >
              <Heading size="md">{event.name}</Heading>
              <Text>{event.date}</Text>
            </Box>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Home;