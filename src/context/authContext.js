"use client";

import { createContext, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { apiLogin } from "@/services/apiLogin";

export const authContext = createContext( {
  isAuth: false,
  login: () => {
  },
} );

export function AuthProvider({ children }) {
  const [ isAuth, setAuth ] = useState( localStorage.getItem( "token" ) );
  const router = useRouter();

  const login = useCallback( async(url, data) => {
    const res = await apiLogin( url, data );

    setAuth( res.ok );

    if( res.ok ) {
      router.push( "/profile" );
    } else {
      router.replace( "/login" );
      // localStorage.clear();
      return res;
    }

  }, [ isAuth, router ] );

  const value = useMemo( () => {
    return {
      isAuth,
      login,
    };
  }, [ isAuth, login ] );

  return <authContext.Provider value={ value }>{ children }</authContext.Provider>;

}