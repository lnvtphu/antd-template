import BaseStorage from './base.storage';

function CommonStorage(...arg: any) {
  BaseStorage.apply(this, arg);
}

CommonStorage.prototype = Object.create(BaseStorage.prototype);

CommonStorage.prototype.constructor = CommonStorage;

//  Common
CommonStorage.prototype.getData = function(key: string) {
  return this.get(key);
};

CommonStorage.prototype.setData = function(key: string, common: any) {
  this.set(key, common);
};

CommonStorage.prototype.removeData = function(key: string) {
  this.remove(key);
};

export default new CommonStorage();
