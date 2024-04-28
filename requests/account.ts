import axios from "axios";
import type { Account } from "~/classes/Account";

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