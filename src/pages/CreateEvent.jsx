import { Box, Heading, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleCreateEvent = () => {
    // Placeholder for event creation logic
    console.log(`Event Created: ${eventName} on ${eventDate}`);
    setEventName("");
    setEventDate("");
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Create Event</Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <Input
          placeholder="Event Date"
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleCreateEvent}>
          Create Event
        </Button>
      </VStack>
    </Box>
  );
};

export default CreateEvent;