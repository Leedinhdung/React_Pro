import { Link, useLocation } from "react-router-dom";
import { IoLogoReddit } from "react-icons/io";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../lib/consts/navigation";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";
const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-800 hover:no-underline active:bg-neutral-600 rounded-sm text-base"
const Sidebar = () => {
  return (
    <div className="flex flex-col bg-neutral-900 p-3 w-60 text-white h-screen">
      <div className="flex  items-center gap-2 px-1 py-3">
        <IoLogoReddit fontSize={"3rem"} />
        <span className="text-neutral-100 text-lg">ReLar</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t-2 border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div className={classNames('text-red-500 cursor-pointer', linkClasses)}>
          <span className="text-xl"><HiOutlineLogout /></span>
          Logout
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
function SidebarLink({ item }) {
  const { pathname } = useLocation()
  return (
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClasses)}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}