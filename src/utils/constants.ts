export const APP_VERSION = '1.3';

export const FETCH_METHOD = {
  GET_ONE: 'getOne',
  GET_FULL_LIST: 'getFullList',
  CREATE: 'create',
  DELETE: 'delete',
};

export const COLLECTIONS = {
  USERS: 'users',
  ARTICLES: 'articles',
  CONTACT_FORM: 'contact_form',
  TEST: 'test',
};

export function userOnMobile(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return /iphone|ipod|ipad|android/.test(userAgent);
}
