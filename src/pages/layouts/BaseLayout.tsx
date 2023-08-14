import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const BaseLayout = () => {
  return (
    <>
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default BaseLayout;
