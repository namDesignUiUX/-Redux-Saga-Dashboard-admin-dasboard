import axios from 'axios';
import { UserModel } from '../../app/modules/auth/AuthModel';
import { IProduct } from '../../app/modules/products';
import { API_URL } from '../../env';
import { category } from '../../_start/partials/content/Table';
class AccountAuth {
    async login(auth: UserModel): Promise<UserModel> {
        const accounts: Promise<UserModel[]> = await axios.get(`${API_URL.GET_LIST_USER}`).then(res => res.data).catch((err) => { console.log(err); return []; });
        const account = (await accounts).find(account => account === auth);
        return account || accountDeffault;
    }
    async getListUser(): Promise<UserModel[]> {
        const accounts: Promise<UserModel[]> = await axios.get(`${API_URL.GET_LIST_USER}`).then(res => res.data).catch((err) => { console.log(err); return []; });
        return accounts;
    }
    async getProducts(): Promise<IProduct[]> {
        const products: IProduct[] = await axios.get(`${API_URL.GET_PRODUCTS}`).then(res => res.data).catch((err) => { console.log(err); return []; });
        return products;
    }
    async getCategory(): Promise<category[]> {
        const categories: category[] = await axios.get(`${API_URL.GET_LIST_CATEGORY}`).then(res => res.data).catch((err) => { console.log(err); return []; });
        return categories;
    }

}
// deffault account
export const accountDeffault: UserModel = {
    id: "0",
    name: "My Name",
    avata: "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png",
    email: "account@example.com",
    password: "",
    role: "user, root-user",
}
export const accountAuth = new AccountAuth();