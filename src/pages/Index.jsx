import React, { useState } from "react";
import { ChakraProvider, Box, VStack, HStack, Text, Button, Input, extendTheme, useDisclosure, IconButton, useColorMode, ColorModeScript } from "@chakra-ui/react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [themeColor, setThemeColor] = useState("teal");
  const [text, setText] = useState("Welcome to our site!");
  const [showSection, setShowSection] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  const theme = extendTheme({
    colors: {
      brand: {
        500: themeColor,
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box p={4}>
        {/* Navigation */}
        <HStack justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">
            My Website
          </Text>
          <IconButton icon={isOpen ? <FaTimes /> : <FaBars />} onClick={isOpen ? onClose : onOpen} variant="outline" aria-label="Open Menu" />
        </HStack>

        {/* Admin Box */}
        {isOpen && (
          <VStack p={4} mt={4} border="1px" borderColor="gray.200" spacing={4}>
            <Input placeholder="Theme color (e.g., blue)" value={themeColor} onChange={(e) => setThemeColor(e.target.value)} />
            <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>
            <Input placeholder="Update main text" value={text} onChange={(e) => setText(e.target.value)} />
            <Button onClick={() => setShowSection(!showSection)}>{showSection ? "Hide" : "Show"} Section</Button>
          </VStack>
        )}

        {/* Content */}
        <VStack spacing={8} mt={8}>
          <Text fontSize="2xl" color="brand.500">
            {text}
          </Text>
          {showSection && (
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Text>This is a dynamic section that can be shown or hidden using the admin box.</Text>
            </Box>
          )}
          {/* Footer */}
          <Box as="footer" textAlign="center" py={6}>
            <Text fontSize="sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</Text>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
