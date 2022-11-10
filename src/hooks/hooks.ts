import Router from 'next/router';
import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, AppState } from "../store/store";
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
