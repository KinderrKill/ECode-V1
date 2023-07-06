export const APP_VERSION = '1.4';

export function userOnMobile(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return /iphone|ipod|ipad|android/.test(userAgent);
}
