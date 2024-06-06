import { NavLink } from "react-router-dom";
import { IoLogoReddit } from "react-icons/io";

import classNames from "classnames";
import {
  HiOutlineLogout,
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog
} from "react-icons/hi";
const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-800 hover:no-underline active:bg-neutral-600 rounded-sm text-base"
const Sidebar = () => {
  return (
    <div className="flex flex-col bg-neutral-900 p-3 w-60 text-white h-screen">
      <div className="flex  items-center gap-2 px-1 py-3">
        <IoLogoReddit fontSize={"3rem"} />
        <span className="text-neutral-100 text-lg">ReLar</span>
      </div>

      <div className="flex-1 py-8 flex flex-col gap-0.5">
        <NavLink to={'/admin/dashboard'} className={({ isActive, isPending }) => isPending ? `${linkClasses}` : isActive ? `bg-neutral-400 ${linkClasses}` : `${linkClasses}`} end>
          <HiOutlineViewGrid fontSize={24} />
          <span>DashBoard</span>
        </NavLink>
        <NavLink to={'/admin/product'} className={({ isActive, isPending }) => isPending ? `${linkClasses}` : isActive ? `bg-neutral-400 ${linkClasses}` : `${linkClasses}`} end>
          <HiOutlineCube fontSize={24} />
          <span>Products</span>
        </NavLink>
        <NavLink to={'/admin/order'} className={({ isActive, isPending }) => isPending ? `${linkClasses}` : isActive ? `bg-neutral-400 ${linkClasses}` : `${linkClasses}`} end>
          <HiOutlineShoppingCart fontSize={24} />
          <span>Orders</span>
        </NavLink>
        <NavLink to={'/admin/customer'} className={({ isActive, isPending }) => isPending ? `${linkClasses}` : isActive ? `bg-neutral-400 ${linkClasses}` : `${linkClasses}`} end>
          <HiOutlineUsers fontSize={24} />
          <span>Customers</span>
        </NavLink>
        <NavLink to={'/admin/transactions'} className={({ isActive, isPending }) => isPending ? `${linkClasses}` : isActive ? `bg-neutral-400 ${linkClasses}` : `${linkClasses}`} end>
          <HiOutlineDocumentText fontSize={24} />
          <span>Transactions</span>
        </NavLink>
        <NavLink to={'/admin/messages'} className={({ isActive, isPending }) => isPending ? `${linkClasses}` : isActive ? `bg-neutral-400 ${linkClasses}` : `${linkClasses}`} end>
          <HiOutlineAnnotation fontSize={24} fontWeight={200} />
          <span>Messages</span>
        </NavLink>


      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t-2 border-neutral-700">
        <NavLink to={'/admin/settings'} className={({ isActive, isPending }) => isPending ? `${linkClasses}` : isActive ? `bg-neutral-400 ${linkClasses}` : `${linkClasses}`} end>
          <HiOutlineCog fontSize={24} fontWeight={200} />
          <span>DashBoard</span>
        </NavLink>
        <NavLink to={'/admin/support'} className={({ isActive, isPending }) => isPending ? `${linkClasses}` : isActive ? `bg-neutral-400 ${linkClasses}` : `${linkClasses}`} end>
          <HiOutlineQuestionMarkCircle fontSize={24} fontWeight={200} />
          <span>Help & Support</span>
        </NavLink>
        <div className={classNames('text-red-500 cursor-pointer', linkClasses)}>
          <span className="text-xl"><HiOutlineLogout /></span>
          Logout
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
