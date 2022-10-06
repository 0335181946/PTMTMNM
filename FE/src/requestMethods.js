import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzgwZmYzNWVhYzhiNGJjYjJlNjdlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDk1MDA5NiwiZXhwIjoxNjY1MjA5Mjk2fQ.p0w-2EStvwgLmBayc7esoXxO5gbgD9x9UHhrRIWcJt8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});