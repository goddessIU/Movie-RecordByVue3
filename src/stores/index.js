import { defineStore } from "pinia";
import localStorage from '../utils/localStorage.js';
import sessionStorage from '../utils/sessionStorage.js';

export const useStore = defineStore({
  id: "index",
  state: () => ({
    names: (localStorage.getItem(JSON.stringify(sessionStorage.getItem())) ? localStorage.getItem(JSON.stringify(sessionStorage.getItem())).names : []) || []
  }),
  actions: {
    ADDCARD({ name }) {
      let names = localStorage.getItem(JSON.stringify(sessionStorage.getItem())).names;
      if (!names) {
        localStorage.addItem(sessionStorage.getItem(), { names: [] });
      }
      names.push(name);
      localStorage.addItem(sessionStorage.getItem(), { names });
      this.names.push(name);
    },
    DELETECARD(index) {
      let names = this.names;
      names.splice(index, 1);
      localStorage.addItem(sessionStorage.getItem(), { names });
    }
  },
});
