"use client";

import Link from "next/link";
// import Breadcrumbs from "@/components/BreadCrumbs/Breadcrumbs";
import { authContext } from "@/context/authContext";
import { useContext, useEffect, useState } from "react";
import { getAvatar } from "@/services/getAvatar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUser } from "@/services/useUser";

export const metadata = {
  title: "Coinsfill/Страница пользователя",
  description: "Страница пользователя с его данными",
};


export default function ProfilePage() {
  const [ avatar, setAvatar ] = useState( null );
  const router = useRouter();
  const { isAuth } = useContext( authContext );
  // const { user } = useUser();

  // console.log( user );

  const breadCrumbs = [
    {
      title: "Главная",
      src: "/"
    },
    {
      title: "Настройки аккаунта",
      src: "/profile"
    },
  ];

  useEffect( () => {
    if( isAuth === false ) {
      router.push( "/login" );
    }

  }, [] );

  useEffect( () => {
    async function f() {
      const response = await getAvatar(6);
      // console.log(response);
      setAvatar( response.media_details.sizes.medium.source_url );
    }

    f();
  }, [] );


  return (
    <div className="">
      {/*<Breadcrumbs items={ breadCrumbs } />*/ }
      <h1 className="mb-[37px] text-[26px] font-bold text-center leading-[32px]">Профиль пользователя</h1>
      <div className="block w-[100px] h-[100px] rounded-[50%] overflow-hidden">
        {
          avatar ? <Image
              src={ avatar }
              width={ 100 }
              height={ 100 }
              alt="Аватар"
              loading="lazy"
            />
            : null
        }
      </div>
      <Link href="/avatar" className="text-[18px] font-medium underline text-link-blue-100 hover:text-my-orange-100">
        Изменить аватар
      </Link>
    </div>
  );
}


