import { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { fork, put, take } from "redux-saga/effects";
import { Food } from "../../../_start/partials/content/Table/interface";
import { actionTypes } from "../auth";
import { ActionWithPayload } from "./ProductModel";
// initial State Product
const initialStateProduct: IProductPayload = {
};
export const actionTypesProduct = {
    GetProducts: "[GetProducts] Action",
    SetProducts: "[SetProducts Products] Action",
}
export const actionFood = {
    getProducts: (foods: Food[]) => ({ type: actionTypes.GetProducts, payload: { foods } }),
    setProducts: (foods?: Food[]) => ({
        type: actionTypes.SetProducts,
        payload: { foods },
    }),
}
export interface IProductPayload {
    foods?: Food[];
    loading?: boolean;
}
export const reducer = persistReducer({
    key: "v100-product",
    storage: storage,
    whitelist: ["products"]
}, (state: IProductPayload = initialStateProduct, action: ActionWithPayload<IProductPayload>) => {
    switch (action.type) {
        case actionTypes.GetProducts: {
            return {
                ...state,
                loading: true,
            }
        }
        case actionTypesProduct.SetProducts: {
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        }

        default:
            return state;
    }
});
export function* sagaProduct() {
    while (true) {
        const action: PayloadAction<IProductPayload> = yield take(actionTypes.GetProducts);
        yield fork(setProduct, action.payload)
    }

}
function* setProduct(payload: IProductPayload) {
    const foods = payload.foods;
    yield put(actionFood.setProducts(foods));

}


