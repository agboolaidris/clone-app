import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const iconButtonStyle = cva(
  'inline-block border border-transparent text-center font-medium transition-all duration-100',
  {
    defaultVariants: {
      rounded: true,
      size: 'sm',
      variants: 'primary',
    },
    variants: {
      rounded: {
        true: 'rounded-full',
      },
      size: {
        md: 'p-2',
        sm: 'p-1',
      },
      variants: {
        normal: 'hover:opacity-70',
        primary: 'text-gray-700 bg-gray-100 hover:opacity-70',
      },
    },
  }
);

export type IconButtonProps = VariantProps<typeof iconButtonStyle> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton = ({
  variants,
  size,
  className,
  children,
  rounded,
  ...rest
}: IconButtonProps) => {
  const style = iconButtonStyle({ className, rounded, size, variants });
  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
};
