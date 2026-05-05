import FieldError from '@/components/ui/inputs/FieldError';
import FieldLabel from '@/components/ui/inputs/FieldLabel';
import {
  inputFieldSizeVariants,
  ComponentSize,
} from '@/components/ui/variants/sizeVariants';
import { cva } from 'class-variance-authority';
import { Label } from '@/types/form.types';
import classNames from 'classnames';

const textAreaClasses = cva(
  'text-muted-dark placeholder:text-muted w-full rounded-md border bg-white focus:shadow-md focus:outline-hidden',
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

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: ComponentSize;
  label?: Label;
  isValid?: boolean;
  error?: string;
}

export default function Textarea({
  size,
  label,
  isValid = true,
  error,
  required = false,
  className,
  ...props
}: TextareaProps) {
  const name = props.name ?? '';
  return (
    <>
      {label && (
        <FieldLabel htmlFor={name} size={size} className={label.className}>
          {label.value}
        </FieldLabel>
      )}
      <textarea
        id={name}
        className={classNames(
          textAreaClasses({ isValid }),
          inputFieldSizeVariants({ size }),
          className,
        )}
        aria-invalid={!isValid}
        aria-required={required}
        {...props}
      ></textarea>
      {!isValid && <FieldError size={size}>{error}</FieldError>}
    </>
  );
}
