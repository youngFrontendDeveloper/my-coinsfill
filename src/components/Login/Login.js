"use client";

import Link from "next/link";
import LoginIcon from "../../../public/images/login-icon.svg";
import { authContext } from "@/context/authContext";
import { useContext } from "react";

export default function Login() {

  const { isAuth } = useContext( authContext );
  const href = isAuth ? "/profile" : "/login";

  return (
    <Link
      href={ href } className="login w-[24px] h-[24px] cursor-pointer "
      title="Войти"
    >
      <LoginIcon width={ 24 } height={ 24 } alt="Вход" className="login__icon" />
    </Link>
  );
}