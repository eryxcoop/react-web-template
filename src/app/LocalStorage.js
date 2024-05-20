export class LocalStorage {
    remove(key) {
        localStorage.removeItem(key);
    }

    getBoolean(key, defaultValue=undefined) {
        return this.getTypedValue(key, defaultValue, x => x === "true");
    }

    getString(key, defaultValue=undefined) {
        return this.getTypedValue(key, defaultValue, x => x);
    }

    getJson(key, defaultValue=undefined) {
        return this.getTypedValue(key, defaultValue, JSON.parse);
    }

    getTypedValue(key, defaultValue=undefined, castFunction) {
        let value = localStorage.getItem(key);
        if (value === null)
            return defaultValue;
        return castFunction(value);
    }

    storeJson(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    storeBoolean(key, value) {
        localStorage.setItem(key, value);
    }

    storeString(key, value) {
        localStorage.setItem(key, value);
    }
}
