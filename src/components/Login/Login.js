
import Link from "next/link";
import LoginIcon from "../../../public/images/login-icon.svg";

export default function Login() {
  return (
    <Link
      href="/login" className="login w-[24px] h-[24px] cursor-pointer "
      title="Войти"
    >
      <LoginIcon width={ 24 } height={ 24 } alt="Вход" className="login__icon" />
    </Link>
  );
}