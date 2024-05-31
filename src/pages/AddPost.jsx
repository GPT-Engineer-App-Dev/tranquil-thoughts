import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button } from "@chakra-ui/react";
import { useColorMode, Box } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const AddPost = () => {
  const { colorMode } = useColorMode();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the new post (e.g., send to an API or update state)
    console.log("New Post:", { title, content });
    navigate("/blog");
  };

  return (
    <Box bg={colorMode === "light" ? "white" : "gray.800"} minH="100vh">
      <Container centerContent maxW="container.md" py={10}>
        <VStack spacing={8} as="form" onSubmit={handleSubmit}>
          <Heading as="h1" size="2xl">Add New Post</Heading>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isRequired
          />
          <Textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            isRequired
          />
          <Button colorScheme="teal" size="md" type="submit">Submit</Button>
          <Link to="/blog">
            <Button colorScheme="gray" size="md">Cancel</Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  );
};

export default AddPost;