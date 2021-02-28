import * as CryptoJS from 'crypto-js';

export function sha256(password: string) {
  return CryptoJS.SHA256(password).toString();
}
