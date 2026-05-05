'use client';

import * as React from 'react';
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import classNames from 'classnames';

/**
 * Base Tabs Component
 *
 * Minimal, unstyled tabs primitives that can be customized via className props.
 * For specific use cases, create wrapper components.
 */

function Tabs({ className, ...props }: React.ComponentProps<typeof Root>) {
  return (
    <Root
      data-slot="tabs"
      className={classNames('w-full', className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: React.ComponentProps<typeof List>) {
  return (
    <List
      data-slot="tabs-list"
      className={classNames('border-b-muted-light flex border-b', className)}
      {...props}
    />
  );
}

function Tab({ className, ...props }: React.ComponentProps<typeof Trigger>) {
  return (
    <Trigger
      data-slot="tab"
      className={classNames(
        'hover:text-primary flex-1 cursor-pointer p-3 text-center font-semibold transition-colors focus:outline-hidden',
        'data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:border-b-2',
        className,
      )}
      {...props}
    />
  );
}

function TabPanel({
  className,
  ...props
}: React.ComponentProps<typeof Content>) {
  return (
    <Content
      data-slot="tab-panel"
      className={classNames('w-175 max-w-full py-4', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, Tab, TabPanel };
