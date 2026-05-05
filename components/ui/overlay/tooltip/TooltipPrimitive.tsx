'use client';

import * as React from 'react';
import {
  Root,
  Trigger,
  Content,
  Provider,
  Portal,
} from '@radix-ui/react-tooltip';
import classNames from 'classnames';

const TooltipProvider = Provider;

const TooltipRoot = Root;

const TooltipTrigger = Trigger;

const TooltipPortal = Portal;

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPortal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      collisionPadding={8}
      className={classNames(
        'text-muted-dark z-100 max-h-[calc(100vh-32px)] max-w-[min(400px,calc(100vw-32px))] overflow-y-auto rounded-md bg-white p-3 text-sm wrap-break-word shadow-md',
        'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </TooltipPortal>
));
TooltipContent.displayName = Content.displayName;

export { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent };
