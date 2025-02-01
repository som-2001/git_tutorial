import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, redo, undo } from "./Redux/counterSlice";

const shema = yup.object().shape({
  file: yup.string().test((value) => {
    if (value && value.type === "mp3") return true;
    else return false;
  }),
});
function App() {
  const { value, future, past } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "50vh",
        gap: "20px",
        p: 3,
      }}
    >
      <h3 style={{ fontSize: "2.5rem" }}>{value}</h3>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            p: 2,
            borderRadius: 3,
            backgroundColor: "black",
            color: "white",
          }}
          onClick={(e) => dispatch(increment())}
        >
          increment main 1
        </Button>
        <Button
          variant="contained"
          disabled={value === 0}
          sx={{
            p: 2,
            borderRadius: 3,
            backgroundColor: "black",
            color: "white",
          }}
          onClick={(e) => dispatch(decrement())}
        >
          decrement main 1
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          variant="contained"
          disabled={future.length === 0}
          sx={{
            p: 2,
            borderRadius: 3,
            backgroundColor: "black",
            color: "white",
          }}
          onClick={(e) => dispatch(redo())}
        >
          Redo
        </Button>
        <Button
          variant="contained"
          disabled={past.length === 0}
          sx={{
            p: 2,
            borderRadius: 3,
            backgroundColor: "black",
            color: "white",
          }}
          onClick={(e) => dispatch(undo())}
        >
          Undo
        </Button>
      </Box>
    </Box>
  );
}

export default App;
