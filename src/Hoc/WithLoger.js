import { Box } from "@mui/material";

export const WithLoger = (Component) => {
  return function WrapperComponent(props) {
    return (
    localStorage.getItem("token") ? (
      <Box>
        <p>You are logged in brother.</p>
        <Component {...props} />
      </Box>
    ) : (
      <Box>
        <p>You are not logged in brother.</p>
      </Box>
    )
    )
  };
};
