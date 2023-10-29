"use client";

import Crumb from "../Cramb/Crumb";
import { useEffect, useState } from "react";
import { usePathname, } from "next/navigation";
import { breadCrumbs } from "@/utils/breadCrumbs";

export default function BreadCrumbs() {
  const [ breadcrumbs, setBreadcrumbs ] = useState( null );
  const path = usePathname();

  const linkPath = path.split( "/" );

  useEffect( () => {
    if( path ) {
      const pathArray = [];
      linkPath.map( path => {
        pathArray.push( breadCrumbs.find( item => item.path === path ) );
      } );
      setBreadcrumbs( pathArray );
    }
  }, [ path ] );

  if( !breadcrumbs ) {
    return null;
  }

  return (
    <>
      { path === "/" ? (
          <div className="flex flex-wrap items-baseline gap-[2px] mb-[30px]">
            <li className="font-medium text-[10px] leading-[12.19px] text-black-50 ">
              Главная
            </li>
          </div> ) :

        ( <div className="flex flex-wrap items-baseline gap-[2px] mb-[30px]">
          {
            breadcrumbs.map( (crumb, i) => {
              return <Crumb
                key={ i }
                crumb={ crumb }
                items={ breadcrumbs }
                i={ i }
              />;
            } )
          }
        </div> )

      }
    </>
  );
}
