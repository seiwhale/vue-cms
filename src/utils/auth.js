import Cookies from 'js-cookie';

const TokenKey = 'colatoken';

export function getToken() {
  return true // Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
