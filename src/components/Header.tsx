const Header = () => {
  return (
    <div className="flex items-center justify-between h-[70px] shadow-md px-[25px] ">
      <div className="flex items-center relative">
        <input
          type="text"
          className="bg-[#f8f9fc] h-[40px] outline-none pe-[15px] ps-10 w-[300px] rounded-full leading-[20px]"
          placeholder="Tìm kiếm..."
        />
        <div className="h-[40px] px-[14px] flex items-center justify-center cursor-pointer absolute  ">
          <i className="fa-solid fa-magnifying-glass "></i>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-x-5 border-r-2 pe-5">
          <i className="fa-solid fa-bell text-xl"></i>
          <i className="fa-solid fa-message text-xl"></i>
        </div>
        <div>
          <img
            id="avatarButton"
            typeof="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            className="w-10 h-10 rounded-full cursor-pointer"
            alt="User dropdown"
            src="../../public/vite.svg"
          />

          <div
            id="userDropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
          >
            <div className="px-4 py-3 text-sm text-gray-900 ">
              <div>Bonnie Green</div>
              <div className="font-medium truncate">name@flowbite.com</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 "
              aria-labelledby="avatarButton"
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                  Earnings
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 ">
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
