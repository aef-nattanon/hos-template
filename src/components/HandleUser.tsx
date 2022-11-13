import { getCookie } from 'cookies-next';
import React from 'react';

import { COOKIE_OPTION } from '../constants';
import { useRedirect } from '../hooks/commons';
import Loading from './Loading';

export default function AppLayout({ children }) {
  const user = getCookie("user", COOKIE_OPTION);
  useRedirect("/sing-in", !user || user === "");
  if (user) {
    return <>{children}</>;
  } else {
    return <Loading />;
  }
}
