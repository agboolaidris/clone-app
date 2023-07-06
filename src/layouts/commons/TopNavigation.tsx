import { Fragment } from 'react';
import { HiSearch, HiUserCircle } from 'react-icons/hi';
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineBars3,
} from 'react-icons/hi2';
import { TbWorld } from 'react-icons/tb';
import { Menu, Transition } from '@headlessui/react';
import { Button } from '@ui/buttons';
import { IconButton } from '@ui/icon-button';
import classNames from 'classnames';
import Image from 'next/image';

const userNavigation = [
  { href: '#', name: 'Your Profile' },
  { href: '#', name: 'Settings' },
  { href: '#', name: 'Sign out' },
];

export const TopNavigation = () => {
  return (
    <div className="relative  z-50 sm:border-b">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-20 justify-between">
          <div className="relative z-10 hidden px-2 lg:flex lg:px-0 ">
            <div className="flex flex-shrink-0 items-center">
              <Image
                alt="Your Company"
                className="block h-8 w-20 "
                height={10}
                src="/vercel.svg"
                width={10}
              />
            </div>
          </div>
          <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
            <div className="w-full  sm:max-w-sm">
              <div className="mx-auto hidden h-12  w-max items-center overflow-hidden  rounded-full border shadow lg:flex">
                <Button size="sm" variants="secondary">
                  Any where
                </Button>
                <div className="mx-1 h-3/4 w-[1px] bg-gray-200 py-1" />
                <Button size="sm" variants="secondary">
                  Any week
                </Button>
                <div className="mx-1 h-3/4 w-[1px] bg-gray-200 py-1" />
                <Button
                  className="!flex items-center !text-gray-500"
                  size="sm"
                  variants="secondary"
                >
                  AnyWhere
                  <span className="ml-2 rounded-full bg-rose-600 p-2 text-white">
                    <HiSearch />
                  </span>
                </Button>
              </div>

              <div className="flex h-12 w-full items-center overflow-hidden rounded-full  p-2 shadow lg:hidden">
                <IconButton className="!bg-transparent">
                  <HiSearch />
                </IconButton>
                <div className="flex-1 px-2 text-sm">
                  <p className="font-medium">Any where</p>
                  <p className="flex items-center gap-x-1 text-xs text-gray-500">
                    Any week
                    <span className="inline-block h-[2px] w-[2px] bg-gray-500" />
                    Add guest
                  </p>
                </div>
                <IconButton className="border-inherit !bg-transparent">
                  <HiOutlineAdjustmentsHorizontal className="h-5 w-5" />
                </IconButton>
              </div>
            </div>
          </div>

          <div className="hidden gap-x-4 lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            <Button rounded size="sm" variants="secondary">
              Airbnb your home
            </Button>
            <IconButton size="md" type="button">
              <span className="sr-only">View notifications</span>
              <TbWorld />
            </IconButton>

            {/* Profile dropdown */}
            <Menu as="div" className="relative flex-shrink-0">
              <div>
                <Menu.Button className="flex items-center gap-x-2 rounded-full border bg-white p-2 text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open user menu</span>
                  <HiOutlineBars3 />
                  <HiUserCircle className="h-6 w-6" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                          href={item.href}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};
