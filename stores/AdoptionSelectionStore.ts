import { Account } from "~/classes/account/Account";
import type { Animal } from "~/classes/animal/Animal";
import type { Listing } from "~/classes/listing/Listing";
import { getAccount } from "~/requests/account";
import { tokenLabel } from "~/util/auth";

export const useUserStore = defineStore('adoption-selection', {
    state: () => ({ 
        selected: [] as Animal[]
    }),
    getters: {
      getSelected: (state) => {
        return () => state.selected;
      },
      isSelected: (state) => {
        return (id: string) => {
          const result = state.selected.find(item => item.id === id);
          if(result) {
            return true;
          }
          return false;
        }
      }
    },
    actions: {
        select(animal: Animal) {
          
        }
    }
  })