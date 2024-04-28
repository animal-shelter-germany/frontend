import axios from "axios";
import { Login } from "~/classes/Login";

export function getSession(login: Login, onSuccess: (token: string) => void, onError: () => void) {
    axios.post(useRuntimeConfig().public.baseUrl + '/sessions', login)
        .then((response) => {
            onSuccess(response.data);
        })
        .catch(() => {
            onError();
        });
}