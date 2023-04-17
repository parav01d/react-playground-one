const DUMMY_JSON_URL = "https://dummyjson.com"

export const AUTHENTICATE_URL = DUMMY_JSON_URL + "/auth/login"
export interface IAuthenticateRequest {
    username: string;
    password: string;
}
export interface IAuthenticateResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}

