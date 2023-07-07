import React, { useState } from 'react';
import Glider from 'react-glider';
import {
  HiHeart,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineHeart,
} from 'react-icons/hi';
import { HiMiniStar } from 'react-icons/hi2';
import { IconButton } from '@ui/icon-button';
import classNames from 'classnames';
import Image from 'next/image';

export type HomeCardProps = {
  href: string;
  id: string;

  images: {
    imageAlt: string;
    imageSrc: string;
  }[];
  name: string;
  rating: string;
  host: string;
  date: string;
  cost: string;
  isFavorite?: boolean;
  addToFavorite: (id: string) => void;
};

export const HomeCard = ({
  href,
  name,
  images,
  id,
  cost,
  host,
  date,
  rating,
  isFavorite,
  addToFavorite,
}: HomeCardProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg">
        <a
          className="block aspect-[1/1] w-full overflow-hidden bg-gray-200 xl:h-80 [&>.glider-contain]:h-full"
          href={href}
        >
          <Glider
            arrows={{
              next: '#CatalogueCardNext' + id,
              prev: '#CatalogueCardPrev' + id,
            }}
            className="!h-full  [&>.glider-track]:!h-full"
            dots={'.dot-container' + id}
            duration={5}
            hasArrows
            hasDots
            onSlideVisible={(e) => setActiveSlide(e.detail.slide)}
            scrollLock
            slidesToScroll={1}
          >
            {images.map((image, imgIdx) => (
              <div className="h-full w-full overflow-hidden" key={imgIdx}>
                <Image
                  alt={image.imageAlt}
                  className="h-full w-full"
                  height={1000}
                  src={image.imageSrc}
                  width={1000}
                />
              </div>
            ))}
          </Glider>
        </a>

        <div
          className={classNames(
            '!absolute bottom-0 z-20  w-full [&>button]:h-2  [&>button]:w-2   [&>button]:bg-gray-100',
            `dot-container${id}`
          )}
        ></div>
        <IconButton
          className={classNames(
            'absolute top-0 right-0 z-20 mt-2 mr-2 text-gray-100'
          )}
          onClick={() => addToFavorite(id)}
          variants="normal"
        >
          {isFavorite ? (
            <HiHeart className="h-6 w-6 text-rose-600" />
          ) : (
            <HiOutlineHeart className="h-6 w-6" />
          )}
        </IconButton>
        <IconButton
          className={classNames(
            'absolute top-1/2 left-1 z-20  hidden -translate-y-1/2  ',
            { 'group-hover:block': activeSlide > 0 }
          )}
          id={'CatalogueCardPrev' + id}
        >
          <HiOutlineChevronLeft className="h-4 w-4" />
        </IconButton>

        <IconButton
          className={classNames(
            'absolute top-1/2 right-1 z-20 hidden -translate-y-1/2 ',
            { 'group-hover:block': activeSlide !== images.length - 1 }
          )}
          id={'CatalogueCardNext' + id}
        >
          <HiOutlineChevronRight className="h-4 w-4" />
        </IconButton>
      </div>

      <div className="relative mt-4 flex justify-between">
        <div className="ext-gray-500 text-sm text-gray-500">
          <h3 className="text-sm font-medium text-gray-900">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0 z-10" />
              {name}
            </a>
          </h3>
          <p>{host}</p>
          <p className="">{date}</p>
          <p className="mt-2 text-sm font-medium text-gray-900">{cost}</p>
        </div>
        <p className="flex h-max items-center gap-x-1 text-sm text-gray-900">
          <HiMiniStar /> {rating}
        </p>
      </div>
    </div>
  );
};
