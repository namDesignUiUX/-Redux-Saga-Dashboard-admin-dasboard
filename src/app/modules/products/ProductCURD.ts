import axios from "axios";
import { API_URL } from "../../../env";
import { Food } from "../../../_start/partials/content/Table/interface";
export async function getProducts() {
    const foods: Food[] = await axios.get(`${API_URL.GET_PRODUCTS}`)
        .then(res => res.data)
        .catch((err) => { console.log(err); return []; });
    return foods
}