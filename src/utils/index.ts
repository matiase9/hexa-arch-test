import fetch from 'node-fetch';

export function to <T>(promise: Promise<T>, errInfo?:string | object): Promise<[any, T] | T[]> {
  return promise
    .then((res: any) => [null, res])
    .catch((err: any) => {
      if (errInfo) {
        Object.assign(err, errInfo)
      }

      return [err, null]
    })
}

export function fetcher(url, opts = {}) {
  return fetch(url, opts)
    .then((r) => (r.ok ? Promise.resolve(r) : Promise.reject(r.statusText)))
    .then((r) => r.json());
}

export function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

export function getObjectInCollection(object, key, value) {
  return object.filter(item => {
    if (item[key] === value)
      return item;
  })
}