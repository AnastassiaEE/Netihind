import FieldError from '@/components/ui/inputs/FieldError';
import FieldLabel from '@/components/ui/inputs/FieldLabel';
import { cva } from 'class-variance-authority';
import {
  inputFieldSizeVariants,
  ComponentSize,
} from '@/components/ui/variants/sizeVariants';
import { Label } from '@/types/form.types';
import classNames from 'classnames';

const inputClasses = cva(
  'text-muted-dark placeholder:text-muted w-full rounded-md border bg-white transition-[padding] focus:shadow-md focus:outline-hidden',
  {
    variants: {
      isValid: {
        true: 'border-valid focus:border-primary/30 focus:shadow-primary/10',
        false: 'border-invalid focus:shadow-invalid/10',
      },
    },
    defaultVariants: {
      isValid: true,
    },
  },
);

interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  size?: ComponentSize;
  isValid?: boolean;
  label?: Label;
  error?: string;
}

export default function Input({
  size,
  isValid = true,
  label,
  error,
  required = false,
  className,
  children,
  ...props
}: InputProps) {
  const name = props.name ?? '';
  return (
    <>
      {label && (
        <FieldLabel htmlFor={name} size={size} className={label.className}>
          {label.value}
        </FieldLabel>
      )}
      <div className="relative">
        {children}
        <input
          id={name}
          name={name}
          className={classNames(
            inputClasses({ isValid }),
            inputFieldSizeVariants({ size }),
            className,
          )}
          autoComplete={name}
          aria-invalid={!isValid}
          aria-required={required}
          {...props}
        />
      </div>
      {!isValid && <FieldError size={size}>{error}</FieldError>}
    </>
  );
}
