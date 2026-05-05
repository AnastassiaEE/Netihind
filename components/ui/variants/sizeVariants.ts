import { cva } from 'class-variance-authority';

/**
 * Unified size system for all UI components.
 * Provides consistent sizing (height, padding, text) across buttons, inputs, selects, dropdown items, etc.
 */

/**
 * Core size values - used by all UI components
 * Includes: height, padding, and text size
 */
const coreSizes = {
  sm: {
    height: 'h-7',
    padding: 'px-2',
    text: 'text-xs',
  },
  md: {
    height: 'h-10',
    padding: 'px-3',
    text: 'text-sm',
  },
  lg: {
    height: 'h-12',
    padding: 'px-6',
    text: 'text-sm',
  },
} as const;

/**
 * Size variants for interactive elements (buttons, select triggers, etc.)
 * Uses core sizes + gap and icon sizing for flex layouts
 */
export const interactiveElementSizeVariants = cva('', {
  variants: {
    size: {
      sm: `${coreSizes.sm.height} gap-1 ${coreSizes.sm.padding} ${coreSizes.sm.text} [&_svg:not([class*='size-'])]:size-3`,
      md: `${coreSizes.md.height} gap-1.5 ${coreSizes.md.padding} ${coreSizes.md.text} [&_svg:not([class*='size-'])]:size-3.5`,
      lg: `${coreSizes.lg.height} gap-2 ${coreSizes.lg.padding} ${coreSizes.lg.text} [&_svg:not([class*='size-'])]:size-5`,
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

/**
 * Size variants for dropdown/select items
 * Uses same padding and text as interactive elements, but with vertical padding for auto-height
 */
export const dropdownItemSizeVariants = cva('', {
  variants: {
    size: {
      sm: `${coreSizes.sm.padding} py-1 ${coreSizes.sm.text}`,
      md: `${coreSizes.md.padding} py-2.5 ${coreSizes.md.text}`,
      lg: `${coreSizes.lg.padding} py-3 ${coreSizes.lg.text}`,
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

/**
 * Plain object export of core sizes for direct usage
 */
export const sizeValues = {
  sm: {
    height: coreSizes.sm.height,
    padding: coreSizes.sm.padding,
    text: coreSizes.sm.text,
  },
  md: {
    height: coreSizes.md.height,
    padding: coreSizes.md.padding,
    text: coreSizes.md.text,
  },
  lg: {
    height: coreSizes.lg.height,
    padding: coreSizes.lg.padding,
    text: coreSizes.lg.text,
  },
} as const;

/**
 * Size variants for input fields (inputs, textareas)
 * Includes horizontal and vertical padding
 */
export const inputFieldSizeVariants = cva('', {
  variants: {
    size: {
      sm: 'px-4 py-2.5 text-sm',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-5 py-3',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

/**
 * Size variants for checkboxes
 */
export const checkboxSizeVariants = cva('', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-4.5',
      lg: 'size-5',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

/**
 * Size variants for field labels
 * Includes bottom margin and text size
 */
export const fieldLabelSizeVariants = cva('', {
  variants: {
    size: {
      sm: 'mb-1.5 text-sm',
      md: 'mb-2 text-sm',
      lg: 'mb-2.5',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

/**
 * Size variants for toggle switch elements
 * Includes switch dimensions and checked state translations
 */
export const toggleSwitchSizeVariants = cva('', {
  variants: {
    size: {
      sm: 'h-5.5 w-10.75 after:size-3.5 peer-checked:after:translate-x-5.25',
      md: 'h-6.75 w-13.25 after:size-4.75 peer-checked:after:translate-x-6.5',
      lg: 'h-8.25 w-16.25 after:size-6.25 peer-checked:after:translate-x-8',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

/**
 * Size variants for toggle switch labels
 * Text sizing for labels next to toggle switches
 */
export const toggleLabelSizeVariants = cva('', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

/**
 * Type helper for size prop
 */
export type ComponentSize = 'sm' | 'md' | 'lg';
