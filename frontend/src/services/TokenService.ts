import { ACCESS_TOKEN } from "../constants/constants";

export const storeItemOnLocalStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error storing item in local storage: ${error}`);
  }
};

export const getAccessToken: any = async () => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    return accessToken || null;
  } catch (error) {
    return null;
  }
};

export const getItemFromLocalStorage = (key: string): string => {
  try {
    const item = localStorage.getItem(key);
    return item ?? "{}"; // during fallback return "{}"
  } catch (error) {
    return "{}"; // during fallback return "{}"
  }
};
