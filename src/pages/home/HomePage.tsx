import { Box, Center, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SayHello from "../../components/SayHello";

function HomePage() {
  const { t } = useTranslation();
  return (
    <Box>
      <Center h="100vh" flexDirection="column">
        <SayHello greeting={`${t("startCoding")}`} />
        <Text fontSize="sm" color="gray.600">
          Developed by Abdelali Kabou
        </Text>
      </Center>
    </Box>
  );
}

export default HomePage;
