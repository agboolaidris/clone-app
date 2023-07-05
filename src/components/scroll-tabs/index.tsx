import Glider from 'react-glider';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import classNames from 'classnames';

const tabs = [
  { current: true, href: '#', name: 'My Account' },
  { current: false, href: '#', name: 'Company' },
  { current: false, href: '#', name: 'Team Members' },
  { current: false, href: '#', name: 'Billing' },
  { current: false, href: '#', name: 'My Account' },
  { current: false, href: '#', name: 'Company' },
  { current: false, href: '#', name: 'Team Members' },
  { current: false, href: '#', name: 'Billing' },
  { current: false, href: '#', name: 'My Account' },
  { current: false, href: '#', name: 'Company' },
  { current: false, href: '#', name: 'Team Members' },
  { current: false, href: '#', name: 'Billing' },
];

export const ScrollTabs = () => {
  return (
    <div className="relative sm:px-10">
      <Glider
        arrows={{
          next: '#buttonNext',
          prev: '#buttonPrev',
        }}
        hasArrows
        responsive={[
          {
            breakpoint: 775,
            settings: {
              duration: 0.25,
              itemWidth: 60,
              slidesToScroll: 'auto',
              slidesToShow: 'auto',
            },
          },
        ]}
        slidesToScroll={1}
        slidesToShow="auto"
      >
        {tabs.map((tab, tabIndex) => (
          <div className="" key={tabIndex}>
            <a
              aria-current={tab.current ? 'page' : undefined}
              className={classNames(
                'mx-auto block w-max whitespace-nowrap border-b-2  py-4 px-1 text-center text-sm font-medium',
                {
                  'border-rose-500 text-rose-600': tab.current,
                  'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
                    !tab.current,
                }
              )}
              href={tab.href}
            >
              {tab.name}
            </a>
          </div>
        ))}
      </Glider>

      <button
        className="absolute top-1/4 left-0 hidden rounded-full border bg-gray-50 p-1 transition-all duration-75 hover:bg-gray-100 sm:block"
        id="buttonPrev"
      >
        <HiOutlineChevronLeft className="h-4 w-4" />
      </button>

      <button
        className="absolute top-1/4 right-0 hidden rounded-full border bg-gray-50 p-1 transition-all duration-75 hover:bg-gray-100 sm:block"
        id="buttonNext"
      >
        <HiOutlineChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};
