import { Account } from "~/classes/Account";
import { getAccount } from "~/requests/account";
import { tokenLabel } from "~/util/auth";

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
            const cookie = useCookie(tokenLabel);
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
            useCookie(tokenLabel).value = undefined;
            onLogout();
        }
    }
  })