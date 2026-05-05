import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import classNames from 'classnames';
import { interactiveElementSizeVariants } from '@/components/ui/variants/sizeVariants';

const buttonVariants = cva(
  'group/button inline-flex shrink-0 items-center justify-center rounded-md border font-semibold transition-all select-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // Primary/Contained - your main action button
        default:
          'bg-primary text-white border-primary hover:bg-primary-dark shadow-md shadow-primary/30 hover:shadow-none',
        // Outlined - secondary action
        outline:
          'border-primary text-primary bg-white hover:bg-primary hover:text-white',
        // Neutral/Secondary - tertiary action
        secondary:
          'border-primary-light bg-primary-light text-muted-dark hover:bg-primary hover:text-white',
        // Ghost/Text - minimal styling
        ghost: 'border-transparent text-primary',
        // Destructive - for dangerous actions
        destructive: 'bg-error text-white border-error hover:bg-error/90',
        // Link - text with underline
        link: 'border-transparent text-primary underline-offset-4 hover:text-primary-dark',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'sm',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={classNames(
        buttonVariants({ variant, size }),
        interactiveElementSizeVariants({ size }),
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
