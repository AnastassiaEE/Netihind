'use client';

import * as React from 'react';
import classNames from 'classnames';
import Arrow from '@/components/ui/icons/Arrow';
import { buttonVariants } from '@/components/ui/buttons/Button';
import {
  interactiveElementSizeVariants,
  ComponentSize,
} from '@/components/ui/variants/sizeVariants';
import { LucideIcon } from 'lucide-react';
import {
  Root as SelectRoot,
  Trigger as SelectTrigger,
  Value as SelectValue,
  Portal as SelectPortal,
  Content as SelectContent,
  Viewport as SelectViewport,
} from '@radix-ui/react-select';

export type SelectVariant = 'plain' | 'labeled';

export default function Select({
  variant = 'labeled',
  size = 'sm',
  name,
  buttonLabel,
  label,
  selected,
  Icon,
  openDirection = 'bottom',
  onChange,
  className,
  children,
}: {
  variant?: SelectVariant;
  size?: ComponentSize;
  name?: string;
  buttonLabel?: string;
  label: string;
  selected: string;
  Icon?: LucideIcon;
  openDirection?: 'top' | 'bottom';
  onChange: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}) {
  const variantStyles = {
    plain: buttonVariants({ variant: 'outline' }),
    labeled: buttonVariants({ variant: 'ghost' }),
  } as const;

  const triggerClasses = classNames(
    'group',
    variantStyles[variant],
    interactiveElementSizeVariants({ size }),
    className,
  );

  const contentClasses = classNames(
    'border-grey-300 z-50 w-full min-w-max rounded-md bg-white drop-shadow-md',
    openDirection === 'top' && 'bottom-full',
  );

  return (
    <SelectRoot value={selected} onValueChange={onChange}>
      <SelectTrigger className={triggerClasses} aria-label={label}>
        {Icon && <Icon size={20} />}
        {variant === 'plain' && (buttonLabel ?? name)}
        {variant === 'labeled' && <SelectValue />}
        <Arrow
          direction="down"
          className="align-bottom group-data-[state=open]:rotate-90"
        />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent
          className={contentClasses}
          position="popper"
          side={openDirection === 'top' ? 'top' : 'bottom'}
          sideOffset={4}
          align="end"
        >
          <SelectViewport>{children}</SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  );
}
