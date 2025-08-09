export const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";
export const USERS_URL = `${BASE_URL}/users?page=2&count=6`;
export const POST_EMPLOYEE_URL = `${BASE_URL}/users`;
export const GET_TOKEN_URL = `${BASE_URL}/token`;
export const GET_POSITIONS_URL = `${BASE_URL}/positions`;

export const GET_OPTIONS = {
    headers: {
        "Content-Type": "application/json",
    }
}

export const EXPIRES_IN = 40 * 60 * 1000;