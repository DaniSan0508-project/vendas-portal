import { AUTHORIZATION_KEY } from "../../constants/authorizationConstants";
import { getItemStorage, removeItemStorage, setItemStorage } from "./storageProxy";

const unsetAuhorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

const setAuthotizationToken = (token?: string) => {
    if (token) {
        setItemStorage(AUTHORIZATION_KEY, token);
    }
};

const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);


export { unsetAuhorizationToken, setAuthotizationToken, getAuthorizationToken }