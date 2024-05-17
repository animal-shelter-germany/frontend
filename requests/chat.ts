import axios from "axios";
import { Chat } from "~/classes/Chat";
import { requireToken } from "~/util/auth";

export function getAllChats(onSuccess: (chats: Chat[]) => void, onError: () => void) {
    axios.get<Chat[]>(useRuntimeConfig().public.baseUrl + "/chats", {
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
