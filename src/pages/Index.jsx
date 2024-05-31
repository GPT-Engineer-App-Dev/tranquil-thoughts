import { Container, Text, VStack, Heading, Box, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "white" : "gray.800"} minH="100vh">
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
          <Text fontSize="lg">A place where I share my thoughts and experiences.</Text>
          <Box>
            <Link to="/blog">
              <Button colorScheme="teal" size="lg">Go to Blog</Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;