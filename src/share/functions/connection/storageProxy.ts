const setItemStorage = (key: string, value: string) => {
    return localStorage.setItem(key, value);
};

const removeItemStorage = (key: string) => {
    return localStorage.removeItem(key);
};

const getItemStorage = (key: string) => {
    return localStorage.getItem(key);
};

export  { setItemStorage, removeItemStorage, getItemStorage }