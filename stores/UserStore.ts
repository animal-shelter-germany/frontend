import { Account } from "~/classes/Account";
import { getAccount } from "~/requests/account";

export const useUserStore = defineStore('user', {
    state: () => ({ 
        account: undefined as Account | undefined
    }),
    getters: {
        getAccount: (state) => {
            return () => state.account;
        }
    },
    actions: {
        async init() {
            const cookie = useCookie('animal-token');
            if(cookie.value != null) {
                await this.initByToken(cookie.value, () => {});
            }
        },
        async initByToken(token: string, onInit: () => void) {
            await getAccount(token, (account: Account) => {
                this.account = account;
                onInit();
            }, () => {});
        },
        logout(onLogout: () => void) {
            this.account = undefined;
            useCookie('animal-token').value = undefined;
            onLogout();
        }
    }
  })