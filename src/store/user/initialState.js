export const initialState = {
  getLoginLoading: null,
  getLoginError: null,
  getLoginSuccess: null,
  getLoginResponse: {},

  checkLoginLoading: null,
  checkLoginError: null,
  checkLoginSuccess: null,
  checkLoginResponse: {},

  getLogoutLoading: null,
  getLogoutError: null,
  getLogoutSuccess: null,
  getLogoutResponse: {},

  info: {
    iduser: 0,
    username: '',
    avatar_pat: '/assets/img/placeholder.png',
    tipo: 0,
  },
  isLogged: false
}