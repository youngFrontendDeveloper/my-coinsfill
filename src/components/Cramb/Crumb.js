import Link from "next/link";

export default function Crumb({ crumb, items, i }) {
  const isLastItem = i === items.length - 1;

  if( !isLastItem ) {
    return (
      <li className="font-medium text-[10px] leading-[12.19px]">
        <Link
          href={ `/${ crumb.path }` }
          key={ i }
          className="text-[10px] leading-[12.19px] text-black-50 hover:text-violet-100"
        >
          { crumb.label }
        </Link>

        <span className="text-[10px] "> / </span>
      </li>
    );
  } else {
    return (
      <li className="font-medium text-[10px] leading-[12.19px] text-black-50 ">{ crumb.label } </li>
    );
  }

}