"use client";

import { createContext, useCallback, useMemo, useState } from "react";
import { apiLogin } from "@/services/apiLogin";
import { useRouter } from "next/navigation";
import { useUser } from "@/services/useUser";


export const authContext = createContext( {
  // user: {
  //   email: "",
  //   userLogin: "",
  // },
  isAuth: false,
  login: () => {
  },
} );

export function AuthProvider({ children }) {
const [isAuth, setIsAuth] = useState(false)

  // const [ user, setUser ] = useState( {
  //     email: "",
  //     userLogin: "",
  //   }
  // );
  const router = useRouter();

  const login = useCallback( async(url, data) => {
    try {
      const response = await fetch( url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( {
          username: data.email,
          password: data.password,
        } )
      } );

      if( response.ok ) {
        console.log( response );
        const result = await response.json();
        console.log( result );
        localStorage.setItem( "token", result.token );

        setIsAuth(true)


        // setUser( {
        //   email: result.user_email,
        //   userLogin: result.user_nicename,
        //
        // } );
        // console.log( user );
        router.push( "/profile" );
      }
    } catch( err ) {
      console.log( err );
    }

    // setAuth( res.ok );

    // setUser( {
    //   email: res.user_email,
    //   login: res.user_nicename,
    //
    // } );
    // console.log( user );
    // if( user ) {
    //   router.push( "/profile" );
    // } else {
    //   router.replace( "/login" );
    // }

  }, [ ] );

  const value = useMemo( () => {
    return {
      isAuth,
      login,
    };
  }, [ isAuth, login ] );

  return <authContext.Provider value={ value }>{ children }</authContext.Provider>;

}