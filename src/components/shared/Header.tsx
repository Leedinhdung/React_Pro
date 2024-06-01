import React, { Fragment } from "react";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { Popover, Transition, Menu } from "@headlessui/react";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200 ">
      <div className="relative">
        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
        <input type="text" className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border-gray-300 rounded-sm ps-11 pe-4" name="" id="" placeholder="Search" />
      </div>
      <div className="flex items-center gap-2 ms-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className={classNames(open && 'bg-gray-100', "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100")} > <HiOutlineChatAlt fontSize={24} /></Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 w-80 mt-2 ">
                  <div className=" bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 px-2 py-2 focus:outline-none">
                    <span className="font-medium text-gray-700">Message</span>
                    <p className="mt-2 py-1 text-sm"> Hello, welcome to the chat!</p>
                  </div>
                </Popover.Panel></Transition>
            </>)}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className={classNames(open && 'bg-gray-100', "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100")} >
                <HiOutlineBell fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 w-80 mt-2 ">
                  <div className=" bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 px-2 py-2 focus:outline-none">
                    <span className="font-medium text-gray-700">Notification </span>
                    <p className="mt-2 py-1 text-sm"> Hello, welcome to the chat!</p>
                  </div>
                </Popover.Panel></Transition>
            </>)}
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="ms-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <div style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }} className="w-10 h-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center">
                <span className="sr-only">Lee Dinh Dung</span>
              </div>
            </Menu.Button>

          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48
            rounded-sm shadow-sm p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

              <Menu.Item>
                {({ active }) => (
                  <div className={classNames(active && 'bg-gray-100', "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2")} onClick={() => navigate('/profile')}>
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className={classNames(active && 'bg-gray-100', "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2")} onClick={() => navigate('/settings')}>
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className={classNames(active && 'bg-gray-100', "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2")} onClick={() => navigate('/logout')}>
                    Logout
                  </div>
                )}
              </Menu.Item>

            </Menu.Items>
          </Transition>
        </Menu>
      </div >
    </div >
  );
};

export default Header;
