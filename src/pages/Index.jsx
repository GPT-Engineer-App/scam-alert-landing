// Complete the Index page component here
// Use chakra-ui
import { Box, Text, Container, Icon } from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh" bg="white" color="brand.900">
        <Icon as={FaExclamationTriangle} w={10} h={10} color="red.500" />
        <Text fontSize={["3xl", "5xl", "6xl"]} fontWeight="extrabold" textAlign="center" mt={4} color="red.500">
          SCAMMERS ALERT
        </Text>
        <Text mt={4} fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" textAlign="center">
          Livearts, event organizers are scammers as they do not pay for services offered to them.
          <br />
          Stay Away From Them.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
