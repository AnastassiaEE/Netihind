import { cva } from 'class-variance-authority';
import {
  checkboxSizeVariants,
  ComponentSize,
} from '@/components/ui/variants/sizeVariants';
import FieldLabel from '@/components/ui/inputs/FieldLabel';
import React from 'react';
import classNames from 'classnames';

const checkboxClasses = cva(
  'checkbox checked:border-primary checked:bg-primary mr-2 shrink-0 cursor-pointer appearance-none rounded-[.185em] border align-sub checked:bg-contain',
  {
    variants: {
      isValid: {
        true: 'border-valid',
        false: 'border-invalid',
      },
    },
    defaultVariants: {
      isValid: true,
    },
  },
);

type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size'
> & {
  size?: ComponentSize;
  isValid?: boolean;
};

export default function Checkbox({
  size,
  isValid = true,
  required = false,
  className,
  children,
  ...props
}: CheckboxProps) {
  const name = props.name ?? '';
  const generatedId = React.useId();
  const id = `${name}-${props.value ?? generatedId}`;
  return (
    <FieldLabel htmlFor={id} size={size} className="cursor-pointer">
      <input
        id={id}
        name={name}
        type="checkbox"
        aria-invalid={!isValid}
        aria-required={required}
        className={classNames(
          checkboxClasses({ isValid }),
          checkboxSizeVariants({ size }),
          className,
        )}
        {...props}
      />
      {children}
    </FieldLabel>
  );
}
