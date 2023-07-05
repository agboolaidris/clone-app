import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const iconButtonStyle = cva(
  'inline-block rounded-md border border-transparent text-center font-medium transition-all duration-100',
  {
    defaultVariants: {
      rounded: true,
      size: 'sm',
      variants: 'normal',
    },
    variants: {
      rounded: {
        true: 'rounded-full',
      },
      size: {
        md: 'p-3',
        sm: 'p-2',
      },
      variants: {
        normal: 'text-gray-700 bg-gray-100 hover:opacity-70',
        secondary: 'bg-white text-gray-900 hover:bg-gray-100',
      },
    },
  }
);

type Props = VariantProps<typeof iconButtonStyle> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton = ({
  variants,
  size,
  className,
  children,
  rounded,
  ...rest
}: Props) => {
  const style = iconButtonStyle({ className, rounded, size, variants });
  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
};
