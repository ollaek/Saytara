import actionCreatorFactory from 'typescript-fsa';

import { authApi } from '../api/auth';
import { async } from '../helpers';
import actionIds from './action-ids';
import {  } from "../types";

const actionCreator = actionCreatorFactory();

const signInAction = actionCreator.async<any, string[], any>(actionIds.AUTH_SIGN_IN);

const signInAsync = async(
    signInAction,
    authApi.SignIn
);

export {
    signInAction,
    signInAsync,
};