export function getFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key);
  if (!storedValue) return null;
  const parsedValue = JSON.parse(storedValue);
  return parsedValue;
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function cacheApiData(key, data) {
  const timeStampedData = { data: data, timeStamp: new Date().getTime() };
  setLocalStorage(key, timeStampedData);
}

function isDataExpired(dataTimestamp) {
  console.log(new Date().getTime(), dataTimestamp + 1000 * 60 * 60);
  if (new Date().getTime() > dataTimestamp + 1000 * 60 * 60) return true;
  return false;
}

export function getValidatedCache(key) {
  const storedData = getFromLocalStorage(key);
  if (!storedData) return null;
  if (isDataExpired(storedData.timeStamp)) {
    localStorage.removeItem(key);
    return null;
  }
  return storedData.data;
}
