'use client';

import * as React from 'react';
import classNames from 'classnames';
import {
  ComponentSize,
  dropdownItemSizeVariants,
} from '@/components/ui/variants/sizeVariants';
import {
  Item as RadixSelectItem,
  ItemText as SelectItemText,
} from '@radix-ui/react-select';

export default function SelectItem({
  value,
  size = 'sm',
  className,
  children,
}: {
  value: string;
  size?: ComponentSize;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <RadixSelectItem
      value={value}
      className={classNames(
        'text-muted-dark hover:bg-primary/10 focus:bg-primary/10 data-highlighted:bg-primary/10 data-[state=checked]:text-primary cursor-pointer outline-none data-[state=checked]:font-semibold',
        dropdownItemSizeVariants({ size }),
        className,
      )}
    >
      <SelectItemText>{children}</SelectItemText>
    </RadixSelectItem>
  );
}
