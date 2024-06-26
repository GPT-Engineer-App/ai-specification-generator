import { Box, Heading, VStack, Text, Textarea, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Event = () => {
  const { eventId } = useParams();

  const [feedback, setFeedback] = useState([]);
  const [newFeedback, setNewFeedback] = useState("");

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await fetch(`https://jjfebbwwtcxyhvnkuyrh.supabase.co/rest/v1/feedback?event_id=eq.${eventId}`, {
        headers: {
          apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZmViYnd3dGN4eWh2bmt1eXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTgyMzMsImV4cCI6MjAzMjAzNDIzM30.46syqx3sHX-PQMribS6Vt0RLLUY7w295JHO61yZ-fec',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZmViYnd3dGN4eWh2bmt1eXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTgyMzMsImV4cCI6MjAzMjAzNDIzM30.46syqx3sHX-PQMribS6Vt0RLLUY7w295JHO61yZ-fec'
        }
      });
      const data = await response.json();
      setFeedback(data);
    };

    fetchFeedback();
  }, [eventId]);

  const handleFeedbackSubmit = async () => {
    const response = await fetch('https://jjfebbwwtcxyhvnkuyrh.supabase.co/rest/v1/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZmViYnd3dGN4eWh2bmt1eXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTgyMzMsImV4cCI6MjAzMjAzNDIzM30.46syqx3sHX-PQMribS6Vt0RLLUY7w295JHO61yZ-fec',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZmViYnd3dGN4eWh2bmt1eXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTgyMzMsImV4cCI6MjAzMjAzNDIzM30.46syqx3sHX-PQMribS6Vt0RLLUY7w295JHO61yZ-fec'
      },
      body: JSON.stringify({ event_id: eventId, feedback: newFeedback })
    });

    if (response.ok) {
      setNewFeedback("");
      const updatedFeedback = await response.json();
      setFeedback([...feedback, updatedFeedback[0]]);
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Event Details</Heading>
      <Text mb={4}>Event ID: {eventId}</Text>
      <VStack spacing={4}>
        {feedback.map((fb, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" width="100%" bg="gray.100">
            <Text>{fb.feedback}</Text>
          </Box>
        ))}
        <Textarea
          placeholder="Enter your feedback"
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleFeedbackSubmit}>
          Submit Feedback
        </Button>
      </VStack>
    </Box>
  );
};

export default Event;