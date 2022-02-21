import axios from 'axios';
import { UserModel } from '../../app/modules/auth/AuthModel';
import { API_URL } from '../../env';
class AccountAuth {
    async login(auth: UserModel): Promise<UserModel> {
        const accounts: Promise<UserModel[]> = await axios.get(`${API_URL.GET_LIST_USER}`).then(res => res.data);
        const account = (await accounts).find(account => account === auth);
        return account || accountDeffault;
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