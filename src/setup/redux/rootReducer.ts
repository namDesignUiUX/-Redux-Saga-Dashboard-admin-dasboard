import { combineReducers } from '@reduxjs/toolkit';
import { all } from "redux-saga/effects";
import * as auth from "../../app/modules/auth";
import * as productReducer from '../../app/modules/products';
import { sagaProduct } from '../../app/modules/products';
// TODO cofig store redux

// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     stateReconciler: autoMergeLevel1,
// };
const rootReducer = combineReducers({
    auth: auth.reducer,
    products: productReducer.reducer,
})


// export const _persistedReducer = persistReducer(persistConfig, rootReducer);



export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
export function* rootSaga() {
    yield all([
        auth.saga(),
        sagaProduct()
    ])
}