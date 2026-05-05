import { FieldErrorSize } from '@/types/form.types';
import { cva } from 'class-variance-authority';

const errorClasses = cva('text-error absolute font-medium', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-xs',
      lg: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export default function FieldError({
  size = 'sm',
  children,
}: {
  size?: FieldErrorSize;
  children: React.ReactNode;
}) {
  return <div className={errorClasses({ size })}>{children}</div>;
}
