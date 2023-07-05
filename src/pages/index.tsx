import { ReactElement } from 'react';
import { PropertyCard, PropertyCardProps } from '@ui/property-card';
import Head from 'next/head';
import { Layout } from 'src/layouts';

import { NextPageWithLayout } from './_app';

const property: PropertyCardProps[] = [
  {
    color: 'Black',
    href: '#',
    id: 1,

    images: [
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
      },
    ],
    name: 'Basic Tee',
    price: '$35',
  },
  {
    color: 'Black',
    href: '#',
    id: 2,

    images: [
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
      },
    ],
    name: 'Basic Tee',
    price: '$35',
  },
  {
    color: 'Black',
    href: '#',
    id: 3,

    images: [
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
      },
    ],
    name: 'Basic Tee',
    price: '$35',
  },
  {
    color: 'Black',
    href: '#',
    id: 4,

    images: [
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
      },
    ],
    name: 'Basic Tee',
    price: '$35',
  },
  {
    color: 'Black',
    href: '#',
    id: 5,

    images: [
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
      },
    ],
    name: 'Basic Tee',
    price: '$35',
  },
  {
    color: 'Black',
    href: '#',
    id: 6,

    images: [
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
      },
    ],
    name: 'Basic Tee',
    price: '$35',
  },
  {
    color: 'Black',
    href: '#',
    id: 7,

    images: [
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
      },
    ],
    name: 'Basic Tee',
    price: '$35',
  },
  {
    color: 'Black',
    href: '#',
    id: 8,

    images: [
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
      },
    ],
    name: 'Basic Tee',
    price: '$35',
  },
  {
    color: 'Black',
    href: '#',
    id: 9,

    images: [
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
      },
    ],
    name: 'Basic Tee',
    price: '$35',
  },
];

const Home: NextPageWithLayout = () => {
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
          <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {property.map((property, propertyIdx) => (
                <PropertyCard key={propertyIdx} {...property} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
