import http from '../utils/http';

export function loginbyUser(username, password) {
  const data = {
    username,
    password,
  };

  return http({
    url: '/login',
    method: 'post',
    data,
  });
}

export function logout() {
  return http({
    url: '/logout',
    method: 'post',
  });
}

export function getUserInfo(username) {
  return http({
    url: '/getUserInfo',
    method: 'get',
    params: { username },
  });
}
