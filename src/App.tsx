import { Box, Center, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <Box>
      <Center h="100vh">
        <Text>{t("startCoding")}</Text>
      </Center>
    </Box>
  );
}

export default App;
