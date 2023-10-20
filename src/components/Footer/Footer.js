"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "../../../public/images/home-icon.svg";
import PaymentIcon from "../../../public/images/payment-icon.svg";
import ArrowIcon from "../../../public/images/arrow-icon.svg";
import FundraisingIcon from "../../../public/images/fundraising-icon.svg";

export default function Footer() {
  const path = usePathname();
  console.log( path );

  return (
    <footer className="w-full h-[80px] footer">
      <div className="footer__container ">

        <Link href="/" className="footer__item" title="Главная">
          <HomeIcon
            width={ 26 } height={ 24 } alt="Главная"
            className={ path === "/" ? "footer__icon footer__icon--active" : "footer__icon" }
          />
          <span className={ path === "/" ? "footer__text footer__text--active" : "footer__text" }>ראשי</span>
        </Link>

        <Link href="/cards" className="footer__item" title="Платежные карты">
          <PaymentIcon
            width={ 21 } height={ 17 } alt="Карты"
            className={ path === "/cards" ? "footer__icon footer__icon--active" : "footer__icon" }
          />
          <span className={ path === "/cards" ? "footer__text footer__text--active" : "footer__text" }>מפות</span>
        </Link>

        <Link href="/remittance" className="footer__item pt-[1px]" title="Переводы">
          <ArrowIcon
            width={ 19 } height={ 14 } alt="Переводы"
            className={ path === "/remittance" ? "footer__icon footer__icon--active " : "footer__icon " }
          />
          <span
            className={ path === "/remittance" ? "footer__text footer__text--active" : "footer__text" }
          >תרגומים</span>
        </Link>

        <Link href="/fundraising" className="footer__item" title="Сбор средств">
          <FundraisingIcon
            width={ 22 } height={ 20 } alt="Сбор средств"
            className={ path === "/fundraising" ? "footer__icon footer__icon--active" : "footer__icon" }
          />
          <span
            className={ path === "/fundraising" ? "footer__text footer__text--active" : "footer__text" }
          >גיוס כספים</span>
        </Link>

      </div>
    </footer>
  );
}

