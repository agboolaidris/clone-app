import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyle = cva(
  'inline-block rounded-md border border-transparent text-center font-medium',
  {
    defaultVariants: {
      rounded: false,
      size: 'md',
      variants: 'primary',
    },
    variants: {
      rounded: {
        true: 'rounded-full',
      },
      size: {
        md: 'px-8 py-3',
        sm: 'py-2 px-4 text-sm',
      },
      variants: {
        primary: 'bg-gray-800 hover:bg-gray-700 text-white',
        secondary: 'text-gray-900 hover:bg-gray-100',
      },
    },
  }
);

type Props = VariantProps<typeof buttonStyle> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({
  variants,
  size,
  className,
  children,
  rounded,
  ...rest
}: Props) => {
  const style = buttonStyle({ className, rounded, size, variants });
  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
};
