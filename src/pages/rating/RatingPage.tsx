import { Box, Center } from "@chakra-ui/react";
import Rating from "../../components/Rating";

function RatingPage() {
  return (
    <Box>
      <Center h="100vh" flexDirection="column">
        <Rating />
      </Center>
    </Box>
  );
}

export default RatingPage;
