import { useState } from "react";
import { Box, Button, Input, VStack, Heading, Text } from "@chakra-ui/react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateEvent = async () => {
    const user = supabase.auth.user();
    if (!user) {
      navigate("/login");
      return;
    }

    const { error } = await supabase
      .from("events")
      .insert([{ name, date, user_id: user.id }]);

    if (error) {
      setError(error.message);
    } else {
      navigate("/home");
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Create Event</Heading>
        {error && <Text color="red.500">{error}</Text>}
        <Input
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Event Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleCreateEvent}>
          Create Event
        </Button>
      </VStack>
    </Box>
  );
};

export default CreateEvent;