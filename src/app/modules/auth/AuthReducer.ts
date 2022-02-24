import { Action, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cancel, fork, put, take } from "redux-saga/effects";
import { accountDeffault } from "../../../setup/axios/account";
import { actionTypesProduct } from "../products/ProductReducer";
import { UserModel } from "./AuthModel";
export interface ActionWithPayload<T> extends Action {
    payload?: T;
}
const actionTypesAuth = {
    Login: "[Login] Action",
    Logout: "[Logout] Action",
    Register: "[Register] Action",
    LoginSuccess: "[LoginSuccess User] Action",
    LoginFailed: "[LoginFailed] Action",
}
// ActionTypes 
export const actionTypes = { ...actionTypesAuth, ...actionTypesProduct };
const initialAuthState: IAuthState = {
    user: undefined,
};
export interface IAuthState {
    user?: UserModel;
    loading?: boolean;
}
export interface LoginPayload {
    user?: UserModel;
}
export const reducer = persistReducer(
    { storage, key: "v100-auth", whitelist: ["user", "accessToken"] },
    (state: IAuthState = initialAuthState, action: ActionWithPayload<IAuthState>) => {
        switch (action.type) {
            case actionTypes.Login: {
                return {
                    ...state,
                    loading: true,
                }
            }
            case actionTypes.LoginSuccess: {
                const user: UserModel = action.payload?.user as UserModel;
                return {
                    ...state,
                    user: { ...user },
                    loading: false,
                }
            }
            case actionTypes.LoginFailed: {
                return {
                    ...state,
                    loading: false,
                    user: undefined,
                }
            }
            default:
                return state;
        }
    }
);

export const actions = {
    login: (user: UserModel) => ({ type: actionTypes.Login, payload: { user } }),
    loginSuccess: (user?: UserModel) => ({
        type: actionTypes.LoginSuccess,
        payload: { user },
    }),
    loginFailure: () => ({ type: actionTypes.LoginFailed }),
    logout: () => ({ type: actionTypes.LoginFailed })


};
export function* saga() {
    yield watchingLoginFlow()
}
function* watchingLoginFlow() {
    while (true) {
        const action: PayloadAction<LoginPayload> = yield take(actionTypes.Login);
        yield fork(handleLogin, action.payload)
    }
}
function* handleLogin(payload: LoginPayload) {
    const { user } = payload;
    if (user == accountDeffault) {
        console.log("Login false");
        yield put(actions.loginFailure());
        cancel();
    } else {
        console.log("Login success");
        yield put(actions.loginSuccess(user));
    }
}