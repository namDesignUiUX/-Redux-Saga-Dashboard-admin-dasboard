import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { ActionWithPayload, IProduct } from "./ProductModel";



const initialStateProduct: IProduct[] = [];

export const actionTypesProduct = {
    GetProducts: "[GetProducts] Action",
}
export const acitonProduct = {
    GetProducts: (payload: IProduct[]) => ({
        type: actionTypesProduct.GetProducts,
    })
}
export interface IProductPayload {
    product?: IProduct;
    loading?: boolean;
}
export const reducer = persistReducer({
    key: "v100-product",
    storage: storage,
    blacklist: ["products"]
}, (state: IProduct[] = initialStateProduct, action: ActionWithPayload<IProductPayload>) => {
    switch (action.type) {
        case actionTypesProduct.GetProducts: {
            return {
                ...state,
                loading: true,
            }
        }

        default:
            return state;
    }
});
export function* sagaProduct() {

}


// payload anbd interface to
export interface PayloadActionProduct {


}