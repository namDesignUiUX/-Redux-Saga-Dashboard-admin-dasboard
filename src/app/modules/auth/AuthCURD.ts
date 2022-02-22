import axios from "axios";
import { API_URL } from "../../../env";
import { accountDeffault } from "../../../setup/axios/account";
import { UserModel } from "./AuthModel";


export const USER_API = `${API_URL}/user`;

export function getData(): Promise<UserModel[]> {
  return axios.get("https://6212f5b7f43692c9c6f613b4.mockapi.io/api/user").then(res => {
    return res.data;
  }).catch(err => {
    console.log(err);
  })
}
export async function login(email: string, password: string) {
  const listUser = getData()
  let account: UserModel = accountDeffault;
  await listUser.then(res => {
    account = res.find(user => user.email === email && user.password === password) || accountDeffault;
  })
  return account;
}

