import { Box, Heading, VStack, Text, Link } from "@chakra-ui/react";
import { useParams, Link as RouterLink } from "react-router-dom";

const Event = () => {
  const { eventId } = useParams();

  // Placeholder data for demos
  const demos = [
    { id: 1, title: "AI-Powered Chatbot", speaker: "John Doe" },
    { id: 2, title: "Blockchain for Healthcare", speaker: "Jane Smith" },
  ];

  return (
    <Box p={4}>
      <Heading mb={4}>Event Details</Heading>
      <Text mb={4}>Event ID: {eventId}</Text>
      <VStack spacing={4}>
        {demos.map((demo) => (
          <Link as={RouterLink} to={`/demo/${demo.id}`} key={demo.id}>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              width="100%"
              bg="gray.100"
            >
              <Heading size="md">{demo.title}</Heading>
              <Text>Speaker: {demo.speaker}</Text>
            </Box>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Event;