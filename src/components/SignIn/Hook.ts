import { useDispatch, useSelector } from "react-redux";

import { TGlobalState } from "../..";
import {
  UserSignInModel,
  TAuthState
} from "../../types";

import { signInAsync } from "../../actions";

const useAuthState = () => {
  const state = useSelector<TGlobalState, TAuthState>(
    ({ authModule }) => authModule
  );
  const dispatch = useDispatch();
  return {
    ...state,
    signIn: (user: UserSignInModel) =>
      signInAsync(dispatch, user),
  };
};

export { useAuthState };
