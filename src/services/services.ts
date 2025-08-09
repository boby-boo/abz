import axios from "axios";
import { USERS_URL, POST_EMPLOYEE_URL, GET_TOKEN_URL, GET_POSITIONS_URL, GET_OPTIONS } from "./constants";
import { saveToken, isTokenExpired, removeToken } from "../helpers/utils/saveAndRemoveToken";

export const getClients = async (fetchUrl: string = USERS_URL) => {
    try {
        const response = await axios.get(`${fetchUrl}`, GET_OPTIONS)
        if (response.data.success) {
            return response.data
        } else {
            return null
        }
    } catch (error: unknown) {
        console.error(error);
    }
}

type PostEmployeeResponse = {
    success: boolean;
    message: string;
}

export const postEmployee = async (formData: FormData) => {
    let token = null;

    try {
        if (isTokenExpired()) {
            console.log('[TOKEN] IS EXPIRED');
            token = await getToken();
        } else {
            console.log('[TOKEN] IS NOT EXPIRED');
            token = localStorage.getItem('token');
        }

        const response = await axios.post(`${POST_EMPLOYEE_URL}`, formData, {
            headers: {
                "Token": token,
            }
        })

        if (response.data.success) {
            removeToken();
            return response.data
        } else {
            return response.data
        }
    } catch (error: unknown) {
        console.error(error);
        return error as PostEmployeeResponse
    }
}

export const getToken = async () => {
    try {
        const response = await axios.post(`${GET_TOKEN_URL}`, GET_OPTIONS)
        if (response.data.success) {
            saveToken(response.data.token);
            return response.data.token
        } else {
            return response.data
        }
    } catch (error: unknown) {
        console.error(error);
    }
}

export const getPositions = async () => {
    try {
        const response = await axios.get(`${GET_POSITIONS_URL}`, GET_OPTIONS)
        if (response.data.success) {
            return response.data.positions;
        } else {
            return null
        }
    } catch (error: unknown) {
        console.error(error);
    }
}