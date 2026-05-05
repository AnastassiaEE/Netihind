'use client';

import * as React from 'react';
import {
  Root,
  Item,
  Trigger,
  Content,
  Header,
} from '@radix-ui/react-accordion';
import classNames from 'classnames';

/**
 * Base Accordion Component
 *
 * Minimal, unstyled accordion primitives that can be customized via className props.
 * For specific use cases, create wrapper components (e.g., FaqAccordion).
 */

function Accordion({ className, ...props }: React.ComponentProps<typeof Root>) {
  return (
    <Root
      data-slot="accordion"
      className={classNames('w-full', className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof Item>) {
  return <Item data-slot="accordion-item" className={className} {...props} />;
}

function AccordionTrigger({
  className,
  children,
  icon,
  ...props
}: React.ComponentProps<typeof Trigger> & {
  icon?: React.ReactNode;
}) {
  return (
    <Header className="flex">
      <Trigger
        data-slot="accordion-trigger"
        className={classNames(
          'group/accordion-trigger flex w-full items-center justify-between text-left transition-all',
          className,
        )}
        {...props}
      >
        {children}
        {icon && <span data-slot="accordion-icon">{icon}</span>}
      </Trigger>
    </Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Content>) {
  return (
    <Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={className}>{children}</div>
    </Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
