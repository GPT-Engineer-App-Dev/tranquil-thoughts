import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Blog from "./pages/Blog.jsx";
import AddPost from "./pages/AddPost.jsx";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function App() {
  const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        position="fixed"
        top="1rem"
        right="1rem"
      />
    );
  };

  return (
    <Router>
      <ColorModeSwitcher />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/blog" element={<Blog />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;
