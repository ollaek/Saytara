import actionCreatorFactory from 'typescript-fsa';

import { tasksApi } from '../api/tasks';
import { async } from '../helpers';
import actionIds from './action-ids';
import {  } from "../types";

const actionCreator = actionCreatorFactory();

const getTasksAction = actionCreator.async<any, string[], any>(actionIds.TASKS_GET);

const postTaskAction = actionCreator.async<any, string[], any>(actionIds.TASKS_POST);

const resetState = actionCreator(actionIds.RESET_STATE);

const getTasksAsync = async(
    getTasksAction,
    tasksApi.Get
);

 const postTaskAsync = async(
    postTaskAction,
    tasksApi.Post
 );

export {
    getTasksAction,
    getTasksAsync,
    postTaskAction,
    postTaskAsync,
    resetState
};