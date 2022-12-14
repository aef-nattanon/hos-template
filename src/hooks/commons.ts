import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { COOKIE_OPTION } from '../constants';

import type { AppDispatch, AppState } from "../store";
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

export function useRedirect(redirectTo: string, isRedirect: boolean) {
  useEffect(() => {
    if (isRedirect) {
      Router.push(redirectTo);
    }
  }, [isRedirect, redirectTo]);
}

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
// Hook
export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

// Hook
export function useCookie(key, initialValue) {
  // State to cookie our value
  // Pass initial state function to useState so logic is only executed once
  const [cookieValue, setCookieValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = getCookie(key, COOKIE_OPTION);
      // Parse cookied json or if none return initialValue
      return item ? item : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(cookieValue) : value;
      // Save state
      setCookieValue(valueToStore);
      // Save to local storage
      setCookie(key, valueToStore, COOKIE_OPTION);
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  const deleteValue = () => deleteCookie(key, COOKIE_OPTION);
  return [cookieValue, setValue, deleteValue];
}
