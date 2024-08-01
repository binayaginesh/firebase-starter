import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import Center from "../components/utils/Center";

const Login = (props) => {
  // Set background color of the page
  React.useEffect(() => {
    document.body.style.backgroundColor = "#000000"; // Set background color to black
    return () => {
      document.body.style.backgroundColor = ""; // Reset background color on unmount
    };
  }, []);

  return (
    <Center height={90}>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        boxShadow={2}
        margin={3}
        sx={{
          position: "relative"
        }}
      >
        {/* Logo */}
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "white", // Color for logo
            fontSize: "2rem", // Adjust font size as needed
            mb: 2, // Margin bottom for spacing
          }}
        >
          LINC
        </Typography>

        {/* Sign in with Google Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#4285F4", // Google blue color
            color: "#ffffff", // Text color white
            '&:hover': {
              backgroundColor: "#357ae8" // Darker shade on hover
            }
          }}
        >
          Sign in with Google
        </Button>
      </Box>
    </Center>
  );
};

export default Login;
