import {
    REQUEST_LOGIN
} from "./type";

export const getUserInfo = (username, password) => ({
    type: REQUEST_LOGIN,
    payload: {
        username: username,
        password: password
    }
})

