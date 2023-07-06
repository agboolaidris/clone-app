import React, { ReactNode } from 'react';
import { categories } from 'src/lib/categories';

import { BottomNavigation } from './commons/BottomNavigation';
import { ScrollTabs } from './commons/ScrollTabs';
import { TopNavigation } from './commons/TopNavigation';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className="fixed top-0 z-50 w-full bg-white">
        <TopNavigation />
        <div className="">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollTabs href="" tabs={categories} />
          </div>
        </div>
      </div>
      <div className="mt-40">{children}</div>
      <BottomNavigation />
    </div>
  );
};
