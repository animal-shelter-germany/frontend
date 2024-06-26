import { AdoptionCreation } from "~/classes/AdoptionCreation";
import type { Animal } from "~/classes/animal/Animal";
import type { Listing } from "~/classes/listing/Listing";
import { createAdoption } from "~/requests/adoption";

export const useAdoptionCreationStore = defineStore('adoption-selection', {
    state: () => ({ 
        adoption: new AdoptionCreation()
    }),
    getters: {
      getAdoption: (state) => {
        return () => state.adoption;
      },
      getSelected: (state) => {
        return () => state.adoption.animals;
      },
      isSelected: (state) => {
        return (animal: Animal) => {
          const result = state.adoption.animals.find(item => item.id === animal.id);
          if(result) {
            return true;
          }
          return false;
        }
      }
    },
    actions: {
        toggle(animal: Animal) {
          if(animal.id) {
            const selected = this.adoption.animals.find(item => item.id === animal.id);
            if(selected == null) {
              this.adoption.animals.push(animal);
            } else {
              this.adoption.animals = this.adoption.animals.filter(item => item.id !== animal.id);
            }
          }
        },
        init(listing: Listing) {
          this.adoption = new AdoptionCreation(listing);
        },
        send() {
            createAdoption(this.adoption, () => {
                console.log("success");
            }, () => {});
        }
    }
  })