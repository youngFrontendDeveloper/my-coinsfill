import Link from "next/link";
import EditIcon from "../../../public/images/edit-icon6.svg";


export default function EditAvatarIcon(){
  return (
    <Link
      href="/avatar" className="edit-avatar-link block ml-[90px] mt-[-15px] text-[18px] font-medium underline text-link-blue-100 "
      title="Изменить аватар"
    >
      <EditIcon
        width={25}
        height={ 25 }
        alt="Изменить аватар"
        title="Изменить аватар"
        className="edit-avatar"
      />
    </Link>
  );
}