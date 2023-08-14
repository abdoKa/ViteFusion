import { Box, Center, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <Box>
      <Center h="100vh" flexDirection="column">
        <Text mb={4}>{t("startCoding")}</Text>
        <Text fontSize="sm" color="gray.600">Developed by Abdelali Kabou</Text>
      </Center>
    </Box>
  );
}

export default App;
