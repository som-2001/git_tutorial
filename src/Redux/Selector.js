import { createSelector } from "reselect";

const Tasks = (state) => state.api.productList;

export const getAllTasksByStatus = createSelector(
  [Tasks, (state, status, name) => ({ status, name })],
  (tasks, { status, name }) =>
    tasks.filter((item) => item.status === status && item.name === name)
);
