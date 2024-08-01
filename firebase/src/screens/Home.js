import { useEffect } from "react";
import Logout from "../components/auth/Logout";
import Center from "../components/utils/Center";
import { Typography, Box } from "@mui/material"; // Example of importing additional MUI components

const Home = (props) => {
  useEffect(() => {
    // Any side effects to run on component mount
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Center>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Home Page!
        </Typography>
        <Typography variant="body1" component="p">
          Here you can find some important information or features of your application.
        </Typography>
        <Logout />
      </Box>
    </Center>
  );
};

export default Home;
