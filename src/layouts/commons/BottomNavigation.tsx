import React from 'react';
import { HiOutlineHeart, HiOutlineUserCircle, HiSearch } from 'react-icons/hi';
import { PiCurrencyDollar } from 'react-icons/pi';
import { TbWorld } from 'react-icons/tb';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

const leftLinks = [
  { href: '#', label: 'Terms' },
  { href: '#', label: 'Sitemap' },
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Your Privacy Choices' },
  { href: '#', label: 'Destinations' },
];

const rightLinks = [
  { icon: <TbWorld />, label: 'English (US)' },
  { icon: <PiCurrencyDollar />, label: 'USD' },
  { label: 'Support & resources' },
];

const mobileTabs = [
  { icon: <HiSearch className="h-5 w-5" />, label: 'Explore' },
  { icon: <HiOutlineHeart className="h-5 w-5" />, label: 'Wishlist' },
  { icon: <HiOutlineUserCircle className="h-5 w-5" />, label: 'Login' },
];

export const BottomNavigation = () => {
  return (
    <Transition
      className="fixed bottom-0 left-0 z-50 w-full border-t bg-white"
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      show={true}
    >
      <div className="wrapper py-4">
        <div className="hidden items-center text-xs lg:flex">
          <div className="flex flex-1 items-center gap-x-2   text-gray-700">
            <p>© 2023 Airbnb, Inc.</p>
            {leftLinks.map((page, pageIdx) => (
              <div className="flex items-center gap-2" key={pageIdx}>
                <div className="h-[2px] w-[2px] rounded-full bg-gray-700" />
                <Link className="hover:underline" href={page.href}>
                  {page.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-x-4 font-medium  text-gray-900">
            {rightLinks.map((page, pageIdx) => (
              <button
                className="flex items-center gap-x-1 hover:underline"
                key={pageIdx}
              >
                {page.icon}
                {page.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-8  text-gray-700 lg:hidden">
          {mobileTabs.map((page, pageIdx) => (
            <button className="text-center" key={pageIdx}>
              <span className="mx-auto mb-0 block w-max">{page.icon}</span>
              <span className="text-xs font-semibold">{page.label}</span>
            </button>
          ))}
        </div>
      </div>
    </Transition>
  );
};
