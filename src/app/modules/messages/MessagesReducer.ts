import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cancel, fork, put, take, takeLatest } from "redux-saga/effects";
import * as Auth from "../auth"
import { ActionWithPayload, IMessages } from "../messages";
import { actions, actionTypes } from "../auth";
const initialStateMessage: IMessages = {
    isOpen: false,
}
export const actionTypesMessage = {
    Loading: "[Messages] Action",
    Error: "[Messages Error] Action",
    Success: "[Messages Success] Action",
    RunTime: "[Messages]",
    EndRunTime: "[Messages]",
}

export const reducer = persistReducer(
    { storage, key: "v100-messages", whitelist: ["Messages"] },
    (state: IMessages = initialStateMessage, action: ActionWithPayload<IMessages>) => {
        switch (action.type) {
            case Auth.actionTypes.Loading: {
                return {
                    ...state,
                    successful: false,
                    requesting: true,
                    errors: [],
                    messages: []
                }
            }
            case Auth.actionTypes.Success: {
                return {
                    ...state,
                    successful: true,
                    requesting: false,
                    errors: [],
                    messages: [action.payload]
                }
            }
            case Auth.actionTypes.Error: {
                return {
                    ...state,
                    successful: false,
                    requesting: false,
                    errors: [action.payload],
                    messages: []
                }
            }
            case Auth.actionTypes.RunTime: {
                return {
                    ...state,
                    isOpen: true
                }
            }
            case Auth.actionTypes.EndRunTime: {
                return {
                    ...state,
                    isOpen: false
                }
            }
            default: return state;
        }
    }
)
export const actionMessage = {
    loading: () => ({
        type: actionTypes.LoginSuccess,
    }),
    error: (error: any) => ({
        type: actionTypes.Error,
        payload: error,
    }),
    success: (success: any) => ({
        type: actionTypes.Success,
        payload: success,
    }),
    RunTime: () => ({ type: actionTypes.RunTime, }),
    EndRunTime: () => ({ type: actionTypes.EndRunTime })
}

export function* sagaMessage() {
    yield takeLatest(actionTypes.RunTime, function* () {
        console.log("Open???");
    })
}



