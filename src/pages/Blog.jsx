import { Container, Heading, Text, VStack, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Blog Posts</Heading>
        <Link to="/add-post">
          <Button colorScheme="teal" size="md">Add New Post</Button>
        </Link>
        <Box w="100%" p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">First Blog Post</Heading>
          <Text mt={4}>This is the content of the first blog post.</Text>
        </Box>
        <Box w="100%" p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Second Blog Post</Heading>
          <Text mt={4}>This is the content of the second blog post.</Text>
        </Box>
        <Link to="/">
          <Button colorScheme="teal" size="md">Back to Home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Blog;