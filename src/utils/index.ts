import showNotification from "./notification.utils";

export const getFirstLetters = (string: string) => {
  if (string) {
    const matches = string.match(/\b(\w)/g);
    return matches?.join("").toLocaleUpperCase();
  }
  return "";
};

export { showNotification };
