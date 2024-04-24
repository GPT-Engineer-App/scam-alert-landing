// Complete the Index page component here
// Use chakra-ui
import { Box, Text, Container } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh" bg="red.500" color="white">
        <Text fontSize={["2xl", "4xl", "5xl"]} fontWeight="bold" textAlign="center">
          ⚠️ SCAMMERS ALERT ⚠️
        </Text>
        <Text mt={4} fontSize={["md", "lg", "xl"]} textAlign="center">
          Livearts, event organizers are scammers as they do not pay for services offered to them. Stay Away From Them.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
