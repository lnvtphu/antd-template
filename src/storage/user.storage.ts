import BaseStorage from './base.storage';
import * as STORAGE_KEYS from './keys';

function UserStorage(...arg: any) {
  BaseStorage.apply(this, arg);
}

UserStorage.prototype = Object.create(BaseStorage.prototype);

UserStorage.prototype.constructor = UserStorage;

//  user
UserStorage.prototype.getUserInfo = function() {
  return this.get(STORAGE_KEYS.AUTH_LOGIN.EMPLOYEE_ID_KEY);
};

UserStorage.prototype.setUserInfo = function(user: any) {
  this.set(STORAGE_KEYS.AUTH_LOGIN.EMPLOYEE_ID_KEY, user);
};

UserStorage.prototype.removeUserInfo = function() {
  this.remove(STORAGE_KEYS.AUTH_LOGIN.EMPLOYEE_ID_KEY);
};

//  token
UserStorage.prototype.getToken = function() {
  return this.get(STORAGE_KEYS.AUTH_LOGIN.ACCESS_TOKEN_KEY);
};

UserStorage.prototype.setToken = function(data: any) {
  this.set(STORAGE_KEYS.AUTH_LOGIN.ACCESS_TOKEN_KEY, data);
};

UserStorage.prototype.removeToken = function() {
  this.remove(STORAGE_KEYS.AUTH_LOGIN.ACCESS_TOKEN_KEY);
};

// access roles
UserStorage.prototype.getAccessRoles = function() {
  return this.get(STORAGE_KEYS.AUTH_LOGIN.ACCESS_ROLE_KEY);
};

UserStorage.prototype.setAccessRoles = function(data: any) {
  this.set(STORAGE_KEYS.AUTH_LOGIN.ACCESS_ROLE_KEY, data);
};

UserStorage.prototype.removeAccessRoles = function() {
  this.remove(STORAGE_KEYS.AUTH_LOGIN.ACCESS_ROLE_KEY);
};
//  access rights
UserStorage.prototype.getAccessRights = function() {
  return this.get(STORAGE_KEYS.AUTH_LOGIN.ACCESS_RIGHTS_KEY);
};

UserStorage.prototype.setAccessRights = function(data: any) {
  this.set(STORAGE_KEYS.AUTH_LOGIN.ACCESS_RIGHTS_KEY, data);
};

UserStorage.prototype.removeAccessRights = function() {
  this.remove(STORAGE_KEYS.AUTH_LOGIN.ACCESS_RIGHTS_KEY);
};

//  new Token
UserStorage.prototype.getNewToken = function() {
  return this.get(STORAGE_KEYS.AUTH_LOGIN.NEW_TOKEN_KEY);
};

UserStorage.prototype.setNewToken = function(data: any) {
  this.set(STORAGE_KEYS.AUTH_LOGIN.NEW_TOKEN_KEY, data);
};

UserStorage.prototype.removeNewToken = function() {
  this.remove(STORAGE_KEYS.AUTH_LOGIN.NEW_TOKEN_KEY);
};

//  Remember
UserStorage.prototype.getRemember = function() {
  return this.get(STORAGE_KEYS.AUTH_LOGIN.REMEMBERME);
};

UserStorage.prototype.setRemember = function(data: any) {
  this.set(STORAGE_KEYS.AUTH_LOGIN.REMEMBERME, data);
};

UserStorage.prototype.removeRemember = function() {
  this.remove(STORAGE_KEYS.AUTH_LOGIN.REMEMBERME);
};

//  username
UserStorage.prototype.getUserName = function() {
  return this.get(STORAGE_KEYS.AUTH_LOGIN.USERNAME);
};

UserStorage.prototype.setUserName = function(data: any) {
  this.set(STORAGE_KEYS.AUTH_LOGIN.USERNAME, data);
};

UserStorage.prototype.removeUserName = function() {
  this.remove(STORAGE_KEYS.AUTH_LOGIN.USERNAME);
};

//  password
UserStorage.prototype.getPassword = function() {
  return this.get(STORAGE_KEYS.AUTH_LOGIN.PASSWORD);
};

UserStorage.prototype.setPassword = function(data: any) {
  this.set(STORAGE_KEYS.AUTH_LOGIN.PASSWORD, data);
};

UserStorage.prototype.removePassword = function() {
  this.remove(STORAGE_KEYS.AUTH_LOGIN.PASSWORD);
};

export default new UserStorage();
