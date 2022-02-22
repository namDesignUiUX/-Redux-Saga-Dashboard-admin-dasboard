import { Action, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fork, put, take, cancel, takeLatest } from "redux-saga/effects";
import { accountDeffault } from "../../../setup/axios/account";
import { UserModel } from "./AuthModel";
export interface ActionWithPayload<T> extends Action {
    payload?: T;
}
export const actionTypes = {
    Login: "[Login3] Action",
    Logout: "[Logout] Action",
    Register: "[Register] Action",
    LoginSuccess: "[LoginSuccess User] Action",
    LoginFailed: "[LoginFailed] Action",
};
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
                const user: UserModel = action.payload as UserModel;
                return {
                    ...state,
                    user: user,
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
};
export function* saga() {
    yield takeLatest(actionTypes.Login, function* () {
        yield fork(watchingLoginFlow);
    })
}
function* watchingLoginFlow() {
    const action: PayloadAction<LoginPayload> = yield take(actionTypes.Login);
    yield fork(handleLogin, action.payload)
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