/*
 * @Descripttion: Descripttion
 * @Author: seiwhale
 * @Date: 2020-07-02 14:56:42
 * @LastEditors: seiwhale
 * @LastEditTime: 2020-07-02 16:09:22
 */
import Cookies from 'js-cookie';

const TokenKey = 'colatoken';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
