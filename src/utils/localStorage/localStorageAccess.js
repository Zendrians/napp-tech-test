export function getFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key);
  if (!storedValue) return null;
  const parsedValue = JSON.parse(storedValue);
  return parsedValue;
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
