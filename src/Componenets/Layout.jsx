import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

function Layout() {
  return (
    <Box p={6}>
      <Box maxW="1200px" mx="auto" p={4}>
        <Flex flexWrap="wrap" justifyContent="space-between">
          <Box
            flexBasis="25%"
            borderWidth="1px"
            borderColor="black"
            textAlign="center"
            p={4}
          >
            <Text fontWeight="bold">LOREM IPSUM</Text>
          </Box>
          <Box
            flexBasis="75%"
            borderWidth="1px"
            borderColor="black"
            textAlign="right"
            p={4}
          >
            <Link
              href=""
              textDecoration="none"
              color="black"
              fontWeight="bold"
              fontSize="14px"
            >
              LINK1
            </Link>
          </Box>
        </Flex>

        <Flex flexWrap="wrap">
          <Box
            flexBasis="50%"
            borderWidth="1px"
            borderColor="black"
            textAlign="center"
            p={8}
          >
            <Text fontSize="14px" fontWeight="bold">
              THIS IS SOME CONTENT ALIGNED IN THS CENTER
              <br /> VERTICALLY AND HORIZONTALLY
            </Text>
          </Box>
          <Box flexBasis="50%" borderWidth="1px" borderColor="black"></Box>
        </Flex>

        <Box
          flexBasis="100%"
          borderWidth="1px"
          borderColor="black"
          fontWeight="bold"
          textAlign="left"
          p={6}
        >
          <Text>
            THIS IS THE FOOTER CONTENT WHICH IS ALIGNED
            <br />
            <Text as="span" mt={4} display="block" marginLeft={12}>
              LEFT
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
