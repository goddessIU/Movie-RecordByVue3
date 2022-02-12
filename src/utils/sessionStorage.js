/**
 * sessionStorage 二次封装
 */

import config from '../config/index';

export default {
    setItem(val) {
        let storage = this.getStorage();
        let user = 'user';
        storage[user] = val;
        window.sessionStorage.setItem(config.namespace, JSON.stringify(storage));
    },
    getItem(user = 'user') {
        return this.getStorage()[user];
    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(config.namespace) || '{}');
    },
    //  clearItem(key) {
    //      let storage = this.getStorage();
    //      delete storage[key];
    //      window.sessionStorage.setItem(config.namespace, JSON.stringify(storage));
    //  },
    clearAll() {
        window.sessionStorage.clear();
    }
}