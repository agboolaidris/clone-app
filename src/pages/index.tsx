import { ReactElement, useState } from 'react';
import { HiMap } from 'react-icons/hi2';
import { Button } from '@ui/buttons';
import { HomeCard } from '@ui/home-card';
import Head from 'next/head';
import { Layout } from 'src/layouts';
import { homes } from 'src/lib/homes';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const [wishList, setWishList] = useState<string[]>([]);

  const handleAddToFavorite = (id: string) => {
    setWishList((prev) => {
      if (!prev.includes(id)) {
        return prev.concat(id);
      }

      return prev.filter((p) => p !== id);
    });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="bg-white">
          <div className="wrapper">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {homes.map((home, homeIdx) => {
                return (
                  <HomeCard
                    key={homeIdx}
                    {...home}
                    addToFavorite={() => handleAddToFavorite(home.id)}
                    isFavorite={wishList.indexOf(home.id) !== -1}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="fixed left-1/2 bottom-0  z-30 mb-20 hidden -translate-x-1/2 lg:block">
          <Button className="flex items-center gap-x-2  px-3 text-sm" rounded>
            Show Map <HiMap />
          </Button>
        </div>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
