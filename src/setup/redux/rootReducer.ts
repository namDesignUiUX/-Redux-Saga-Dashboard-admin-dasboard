import { combineReducers } from '@reduxjs/toolkit';
import { all } from "redux-saga/effects";
import * as auth from "../../app/modules/auth"
const rootReducer = combineReducers({
    auth: auth.reducer,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
export function* rootSaga() {
    yield all([
        auth.saga(),
    ])
}