import { EXPIRES_IN } from "../../services/constants";

const saveToken = (token: string) => {
    console.log('[TOKEN] SAVE TOKEN AND EXPIRATION TIME');
    const expirationTime = Date.now() + EXPIRES_IN;

    localStorage.setItem('token', token);
    localStorage.setItem('expirationTimeToken', expirationTime.toString());
}

const isTokenExpired = () => {
    const expirationTime = localStorage.getItem('expirationTimeToken');
    return !expirationTime || Date.now() > parseInt(expirationTime);
}

const removeToken = () => {
    console.log('[TOKEN] REMOVE TOKEN AND EXPIRATION TIME');
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTimeToken');
};

export { saveToken, isTokenExpired, removeToken };