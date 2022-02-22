export interface UserModel {
    id: string;
    name: string;
    avata: string;
    email: string;
    password: string;
    role: string;
}


export interface AuthModel {
    accessToken: string;
}