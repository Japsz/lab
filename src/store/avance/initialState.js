export const initialState = {
  addAvanceLoading: null,
  addAvanceError: null,
  addAvanceSuccess: null,
  addAvanceResponse: {},

  preAproveAvanceLoading: null,
  preAproveAvanceError: null,
  preAproveAvanceSuccess: null,
  preAproveAvanceResponse: {},

  delAvanceLoading: null,
  delAvanceError: null,
  delAvanceSuccess: null,
  delAvanceResponse: {},

  getAvanceLoading: null,
  getAvanceError: null,
  getAvanceSuccess: null,
  getAvanceResponse: {
    idavance: 0,
    ansToken: [],
    userToken: [],
  },

  postulateAvanceResponse: {
    idproyecto: {},
  },
  postulateAvanceLoading: null,
  postulateAvanceError: null,
  postulateAvanceSuccess: null,

  likeAvanceLoading: null,
  likeAvanceSuccess: null,
  likeAvanceError: null,
  likeAvanceObj: {
    count: 0,
    type: '',
    idavance: 0,
  },

};