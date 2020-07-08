import actionCreatorFactory from 'typescript-fsa';

import { tasksCategoriesApi } from '../api/tasksCategories';
import { async } from '../helpers';
import actionIds from './action-ids';
import {  } from "../types";

const actionCreator = actionCreatorFactory();

const getTasksCategoriesAction = actionCreator.async<any, string[], any>(actionIds.TASKS_CATEGORIES_GET);

const resetCategoryState = actionCreator(actionIds.RESET_STATE);

const getTasksCategoriesAsync = async(
    getTasksCategoriesAction,
    tasksCategoriesApi.Get
);



export {
    getTasksCategoriesAction,
    getTasksCategoriesAsync,
    resetCategoryState
};