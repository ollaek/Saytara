import actionCreatorFactory from "typescript-fsa";

import { tasksTypesApi } from "../api/tasksTypes";
import { async } from "../helpers";
import actionIds from "./action-ids";
import {} from "../types";

const actionCreator = actionCreatorFactory();

const getTasksTypesAction = actionCreator.async<any, string[], any>(
  actionIds.TASKS_TYPES_GET
);

const resetTypeState = actionCreator(actionIds.RESET_STATE);

const getTasksTypesAsync = async(getTasksTypesAction, tasksTypesApi.Get);

export { getTasksTypesAction, getTasksTypesAsync, resetTypeState };
