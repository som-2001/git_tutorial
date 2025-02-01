import axios from "axios";

export const CustomMiddleware = (delay) => {
  let lastCalled = 0;

  return ({ dispatch }) => (next) => (action) => {
    const now = Date.now();

    if (action.type === "api/Apicall") {
      // Check if the delay has passed
      if (now - lastCalled >= delay) {
        lastCalled = now; // Update lastCalled to the current time

        next(action); // Pass the action to the next middleware or reducer

        console.log(action.payload);

        axios
          .get(action.payload.url)
          .then((res) => {
            dispatch({
              type: action.payload.onSuccess,
              payload: res.data,
            });
          })
          .catch((error) => {
            if (action.payload.onError) {
              dispatch({
                type: action.payload.onError,
                payload: error.message,
              });
            }
          });
      } else {
        console.log("Action throttled:", action);
      }
    } else {
      next(action); // Pass through other actions
    }
  };
};
