import axios from "axios";
import { Message } from "~/classes/Message";
import { requireToken } from "~/util/auth";

export function getAllMessagesByUser(userId: number, onSuccess: (messages: Message[]) => void, onError: () => void) {
    axios.get<Message[]>(useRuntimeConfig().public.baseUrl + "/messages/" + userId, {
        headers: {
            Authorization: 'Bearer ' + requireToken()
        }
    })
    .then((response) => {
        onSuccess(response.data);
    })
    .catch(() => {
        onError();
    });
}
