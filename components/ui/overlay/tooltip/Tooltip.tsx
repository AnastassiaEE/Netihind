'use client';

import * as React from 'react';
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/overlay/tooltip/TooltipPrimitive';

export default function Tooltip({
  elementToInteract,
  content,
  delayDuration = 100,
  side = 'bottom',
}: {
  elementToInteract: React.ReactNode;
  content: string;
  delayDuration?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
}) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <div className="relative inline-block w-max cursor-pointer">
            {elementToInteract}
          </div>
        </TooltipTrigger>
        <TooltipContent side={side}>
          <p>{content}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
}
