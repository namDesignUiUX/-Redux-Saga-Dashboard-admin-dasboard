import { combineReducers } from '@reduxjs/toolkit';
import { all } from "redux-saga/effects";
const rootReducer = combineReducers({

})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
export function* rootSaga() {


}