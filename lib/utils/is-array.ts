export const isArray = (maybeArray: any): maybeArray is [] => {
  return Object.prototype.toString.call(maybeArray) === "[object Array]";
};
