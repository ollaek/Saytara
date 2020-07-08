import { AnyAction, isType } from "typescript-fsa";

import {
  getTasksAction,
  postTaskAction,
  resetState,
  getTasksCategoriesAction,
  getTasksTypesAction
} from "../actions";
import { TTasksState, Task, TasksType, TasksCategory } from "../types";

const initialState: TTasksState = {
  isLoading: false,
  tasks: [],
  tasksCategories: [],
  tasksTypes: [],
  success: ""
};

const taskReducer = (
  state: TTasksState = initialState,
  action: AnyAction
): TTasksState => {
  if (isType(action, getTasksAction.started)) {
    // Do data loading ui work if needed.
    return {
      ...state,
      isLoading: true,
      success: ""
    };
  }

  if (isType(action, getTasksAction.done)) {
    return {
      ...state,
      isLoading: false,
      tasks: (action.payload.result as any) as Task[],
      success: ""
    };
  }

  if (isType(action, getTasksAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false,
      success: ""
    };
  }

  if (isType(action, postTaskAction.started)) {
    // Do data loading ui work if needed.
    return {
      ...state,
      isLoading: true,
      success: ""
    };
  }

  if (isType(action, postTaskAction.done)) {
    return {
      ...state,
      isLoading: false,
      success: "Y"
    };
  }

  if (isType(action, postTaskAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false,
      success: "N"
    };
  }

  if (isType(action, getTasksCategoriesAction.started)) {
    // Do data loading ui work if needed.
    return {
      ...state,
      isLoading: true,
      success: ""
    };
  }

  if (isType(action, getTasksCategoriesAction.done)) {
    return {
      ...state,
      isLoading: false,
      tasksCategories: (action.payload.result as any) as TasksCategory[],
      success: ""
    };
  }

  if (isType(action, getTasksCategoriesAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false,
      success: ""
    };
  }

  if (isType(action, getTasksTypesAction.started)) {
    // Do data loading ui work if needed.
    return {
      ...state,
      isLoading: true,
      success: ""
    };
  }

  if (isType(action, getTasksTypesAction.done)) {
    return {
      ...state,
      isLoading: false,
      tasksTypes: (action.payload.result as any) as TasksType[],
      success: ""
    };
  }

  if (isType(action, getTasksTypesAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false,
      success: ""
    };
  }
  if (isType(action, resetState)) {
    return {
      ...state,
      isLoading: false,
      success: ""
    };
  }

  return state;
};

export { taskReducer };
