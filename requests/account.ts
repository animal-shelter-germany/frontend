import axios from "axios";
import type { Account } from "~/classes/Account";
import { requireToken } from "~/util/auth";

export async function getAccount(token: string, onSuccess: (account: Account) => void, onError: () => void) {
    await axios.get<Account>(useRuntimeConfig().public.baseUrl + '/accounts', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    .then((response) => {
        onSuccess(response.data);
    })
    .catch(() => {
        onError();
    });
}

export function setPassword(password: string, onSuccess: (account: Account) => void, onError: () => void) {
    axios.put(useRuntimeConfig().public.baseUrl + '/accounts/me/password', password, {
        headers: {
            Authorization: 'Bearer ' + requireToken(),
            "Content-Type": "text/plain"
        }
    })
    .then((response) => {
        onSuccess(response.data);
    })
    .catch(() => {
        onError();
    });
}