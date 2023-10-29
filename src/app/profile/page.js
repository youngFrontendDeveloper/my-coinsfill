"use client";

import { authContext } from "@/context/authContext";
import { useContext, useEffect, useState } from "react";
import { getAvatar } from "@/services/getAvatar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EditAvatarIcon from "@/components/EditAvatarIcon/EditAvatarIcon";

export default function ProfilePage() {
  const [ avatar, setAvatar ] = useState( null );
  const router = useRouter();
  const { isAuth } = useContext( authContext );

  useEffect( () => {
    if( isAuth === false ) {
      router.push( "/login" );
    }

  }, [isAuth, router] );

  useEffect( () => {
    async function f() {
      const response = await getAvatar();

      setAvatar( response.image );
    }

    f();
  }, [] );


  return (
    <div className="">
      <h1 className="mb-[37px] text-[26px] font-bold text-center leading-[32px]">Профиль пользователя</h1>
      <div className="block w-[100px] h-[100px] rounded-[50%] overflow-hidden border-[1px]">
        {
          avatar ? <Image
              src={ avatar }
              width={ 100 }
              height={ 100 }
              alt="Аватар"
              loading="lazy"
            />
            : <Image src="/images/avatar-icon.svg"
                     width={ 100 }
                     height={ 100 }
                     alt="Дефолтный Аватар"
                     loading="lazy"
           />
        }
      </div>
      <EditAvatarIcon />
    </div>
  );
}


