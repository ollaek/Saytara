import { useDispatch, useSelector } from "react-redux";

import { TGlobalState } from "../..";
import { getTasksAsync, postTaskAsync, getTasksTypesAsync , getTasksCategoriesAsync, resetState } from "../../actions";
import { TTasksState } from "../../types";

const useTaskState = () => {
  const state = useSelector<TGlobalState, TTasksState>(
    ({ tasksModule }) => tasksModule
  );
  const dispatch = useDispatch();
  return {
    ...state,
    getTasks: () => getTasksAsync(dispatch),
    postTask: (data: any) => postTaskAsync(dispatch, data),
    getTasksTypes: () => getTasksTypesAsync(dispatch),
    getTasksCategories: () => getTasksCategoriesAsync(dispatch),
    resetState: () => resetState()
  };
};

export { useTaskState };
