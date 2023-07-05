import React from 'react';
import Glider from 'react-glider';
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineHeart,
} from 'react-icons/hi';
import classNames from 'classnames';
import Image from 'next/image';

export type PropertyCardProps = {
  color: string;
  href: string;
  id: number;

  images: {
    imageAlt: string;
    imageSrc: string;
  }[];
  name: string;
  price: string;
};

export const PropertyCard = ({
  href,
  color,
  name,
  images,
  id,
  price,
}: PropertyCardProps) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-md">
        <div className="aspect-h-1 aspect-w-1 relative max-h-[20rem] w-full overflow-hidden  bg-gray-200  lg:aspect-none lg:h-80">
          <Glider
            arrows={{
              next: '#CatalogueCardNext' + id,
              prev: '#CatalogueCardPrev' + id,
            }}
            className="z-20"
            dots={'.dot-container' + id}
            duration={1000}
            hasArrows
            hasDots
            responsive={[
              {
                breakpoint: 775,
                settings: {
                  duration: 0.25,
                  itemWidth: 60,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                },
              },
            ]}
            slidesToScroll={1}
            slidesToShow={1}
          >
            {images.map((image, imgIdx) => (
              <a href={href} key={imgIdx}>
                <Image
                  alt={image.imageAlt}
                  className="h-full w-full object-cover object-center"
                  height={200}
                  src={image.imageSrc}
                  width={200}
                />
              </a>
            ))}
          </Glider>
        </div>

        <div
          className={classNames(
            '!absolute bottom-0 z-20  w-full [&>button]:h-2  [&>button]:w-2   [&>button]:bg-gray-100',
            `dot-container${id}`
          )}
        ></div>
        <button className="absolute top-0 right-0 z-20 flex h-8 w-8 items-center  justify-center rounded-bl-md bg-rose-600 text-white hover:bg-rose-700">
          <HiOutlineHeart className="h-5 w-5" />
        </button>
        <button
          className="absolute top-1/2 left-1 z-20  hidden -translate-y-1/2 rounded-full border bg-gray-50  p-1 transition-all duration-75 hover:bg-gray-100 group-hover:block"
          id={'CatalogueCardPrev' + id}
        >
          <HiOutlineChevronLeft className="h-4 w-4" />
        </button>

        <button
          className="absolute top-1/2 right-1 z-20 hidden -translate-y-1/2 rounded-full border bg-gray-50 p-1 transition-all duration-75 hover:bg-gray-100 group-hover:block"
          id={'CatalogueCardNext' + id}
        >
          <HiOutlineChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="relative mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0 z-10" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
};
