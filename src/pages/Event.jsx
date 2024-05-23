import { Box, Heading, VStack, Text, Link } from "@chakra-ui/react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Event = () => {
  const { eventId } = useParams();
  const [demos, setDemos] = useState([]);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    // Placeholder data for demos
    setDemos([
      { id: 1, title: "AI-Powered Chatbot", speaker: "John Doe" },
      { id: 2, title: "Blockchain for Healthcare", speaker: "Jane Smith" },
    ]);
  }, []);

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await fetch(
        `https://jjfebbwwtcxyhvnkuyrh.supabase.co/rest/v1/feedback?event=eq.${eventId}&select=*`,
        {
          headers: {
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZmViYnd3dGN4eWh2bmt1eXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTgyMzMsImV4cCI6MjAzMjAzNDIzM30.46syqx3sHX-PQMribS6Vt0RLLUY7w295JHO61yZ-fec',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZmViYnd3dGN4eWh2bmt1eXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTgyMzMsImV4cCI6MjAzMjAzNDIzM30.46syqx3sHX-PQMribS6Vt0RLLUY7w295JHO61yZ-fec'
          }
        }
      );
      const data = await response.json();
      setFeedback(data);
    };

    fetchFeedback();
  }, [eventId]);

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
      <Heading mt={8} mb={4}>Feedback</Heading>
      <VStack spacing={4}>
        {feedback.map((fb) => (
          <Box
            key={fb.id}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            width="100%"
            bg="gray.100"
          >
            <Text>{fb.date}</Text>
            <Text>{fb.content}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Event;