import React from 'react';

import { useCookie, useRedirect } from '../hooks/commons';
import Loading from './Loading';

export default function AppLayout({ children }) {
  const [user] = useCookie("user", "");
  useRedirect("http://localhost:3000/sing-in-in", !user || user === "");
  if (user) {
    return <>{children}</>;
  } else {
    return <Loading />;
  }
}
