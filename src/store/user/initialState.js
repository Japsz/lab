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
    iduser: 7,
    username: 'ciudadano',
    avatar_pat: '/assets/img/placeholder.png',
    obs: [{
      idobservatorio: 1,
      nombre: 'obs1',
    }]
  },
  isLogged: false
}