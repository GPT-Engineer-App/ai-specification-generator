import { Box, Heading, VStack, Text, Textarea, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Demo = () => {
  const { demoId } = useParams();
  const [feedback, setFeedback] = useState("");

  const handleFeedbackSubmit = () => {
    // Placeholder for feedback submission logic
    console.log(`Feedback for demo ${demoId}: ${feedback}`);
    setFeedback("");
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Demo Details</Heading>
      <Text mb={4}>Demo ID: {demoId}</Text>
      <VStack spacing={4}>
        <Textarea
          placeholder="Enter your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleFeedbackSubmit}>
          Submit Feedback
        </Button>
      </VStack>
    </Box>
  );
};

export default Demo;