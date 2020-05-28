import { AnyAction, isType } from "typescript-fsa";

import { signInAction } from "../actions";
import { TAuthState } from "../types";

const initialState: TAuthState = {
    isLoading: false,
    signInError: "",
    success: "",
};

const authReducer = (state: TAuthState = initialState, action: AnyAction): TAuthState => {
    

    if (isType(action, signInAction.started)) {
        // Do data loading ui work if needed.
        return {
            ...state,
            isLoading : true,
            signInError: "",
            success: "",
        };
    }

    if (isType(action, signInAction.done)) {
        return {
            ...state,
            isLoading : false,
            signInError: "",
            success: "Y",
        };
    }

    if (isType(action, signInAction.failed)) {
        // Do error handling work if needed
        return {
            ...state,
            isLoading : false,
            signInError: "",
            success: "N",
        };
    }

    return state;
};

export {
    authReducer
};