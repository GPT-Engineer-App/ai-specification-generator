import { useEffect, useState } from "react";
import { Box, Heading, VStack, Link, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const Home = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", "false");
    navigate("/login");
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('https://jjfebbwwtcxyhvnkuyrh.supabase.co/rest/v1/events?select=*', {
        headers: {
          apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZmViYnd3dGN4eWh2bmt1eXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTgyMzMsImV4cCI6MjAzMjAzNDIzM30.46syqx3sHX-PQMribS6Vt0RLLUY7w295JHO61yZ-fec',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZmViYnd3dGN4eWh2bmt1eXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTgyMzMsImV4cCI6MjAzMjAzNDIzM30.46syqx3sHX-PQMribS6Vt0RLLUY7w295JHO61yZ-fec'
        }
      });
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Upcoming Events</Heading>
      <Button colorScheme="red" mb={4} onClick={handleLogout}>
        Logout
      </Button>
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