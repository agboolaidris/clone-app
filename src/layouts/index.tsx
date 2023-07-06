import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useScrollPosition } from 'src/hooks/useMousePosition';
import { categories } from 'src/lib/categories';

import { BottomNavigation } from './commons/BottomNavigation';
import { ScrollTabs } from './commons/ScrollTabs';
import { TopNavigation } from './commons/TopNavigation';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { y } = useScrollPosition();
  return (
    <div>
      <div className="fixed top-0 z-50 w-full bg-white">
        <TopNavigation />
        <div className={classNames({ shadow: y > 100 })}>
          <div className="mx-auto max-w-7xl px-6">
            <ScrollTabs href="" tabs={categories} />
          </div>
        </div>
      </div>
      <div className="mt-40 mb-20">{children}</div>
      <BottomNavigation />
    </div>
  );
};
