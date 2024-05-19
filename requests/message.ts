import axios from "axios";
import { Message } from "~/classes/Message";
import type { MessageCreation } from "~/classes/MessageCreation";
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

export function createMessage(userId: number, message: MessageCreation, onSuccess: (message: Message) => void, onError: () => void) {
    axios.post<Message>(useRuntimeConfig().public.baseUrl + "/messages/" + userId, message, {
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

