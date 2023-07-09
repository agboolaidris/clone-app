import React from 'react';
import Glider from 'react-glider';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  tabs: { icon: JSX.Element; name: string; slug: string }[];
  href: string;
};

export const FilterTabs = ({ tabs, href }: Props) => {
  const { query } = useRouter();

  return (
    <div
      className="relative h-16 overflow-hidden sm:px-10"
      data-test="filter-tabs"
    >
      <Glider
        arrows={{
          next: '[data-test="button-next"]',
          prev: '[data-test="button-prev"]',
        }}
        className="scroll-tab"
        hasArrows
        itemWidth={20}
        slidesToScroll={3}
        slidesToShow="auto"
      >
        {tabs.map((tab, tabIndex) => (
          <div className="" data-test="tab" key={tabIndex}>
            <Link
              className={classNames(
                'mx-auto block w-max  whitespace-nowrap border-b-2 px-1  py-2 text-center text-xs font-medium',
                {
                  'border-gray-800 text-gray-800': query.tab === tab.slug,
                  'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
                    query.tab !== tab.slug,
                }
              )}
              data-test="tab-link"
              href={href + `?tab=${tab.slug}`}
            >
              <div className="mx-auto mb-2 w-max">{tab.icon}</div>
              {tab.name}
            </Link>
          </div>
        ))}
      </Glider>

      <button
        className="absolute left-0 top-1/4 hidden rounded-full border bg-gray-50 p-1 transition-all duration-75 hover:bg-gray-100 sm:block"
        data-test="button-prev"
        id="buttonPrev"
      >
        <HiOutlineChevronLeft className="h-4 w-4" />
      </button>

      <button
        className="absolute right-0 top-1/4 hidden rounded-full border bg-gray-50 p-1 transition-all duration-75 hover:bg-gray-100 sm:block"
        data-test="button-next"
        id="buttonNext"
      >
        <HiOutlineChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};
