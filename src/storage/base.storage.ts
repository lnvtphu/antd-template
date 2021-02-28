function BaseStorage() {}

BaseStorage.prototype.get = function(key: string) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
};

BaseStorage.prototype.set = function(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
};

BaseStorage.prototype.clear = function() {
  localStorage.clear();
};

BaseStorage.prototype.remove = function(key: string) {
  localStorage.removeItem(key);
};

// BaseStorage.prototype.setSession = function (key, value) {
//     sessionStorage.setItem(key, value);
// };

export default BaseStorage;
