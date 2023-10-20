import Search from "../Search/Search";
import Login from "../Login/Login";

export default function Nav() {


  return (
    <div className="flex justify-between items-center w-[57px]">
      <Search />
      <Login />
    </div>
  );
}