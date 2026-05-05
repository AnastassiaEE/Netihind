---
description: Guidelines for importing UI library components (Radix UI) with consistent import patterns
applyTo: '**/*.tsx'
---

# UI Library Imports Instructions

## Import Patterns

### Radix UI Components

**CRITICAL RULE**: For all UI library components from Radix UI, use **named imports** directly from the package. Do NOT use namespace imports (import \* as).

#### ✅ Correct Pattern

```typescript
import {
  Root as TooltipRoot,
  Trigger as TooltipTrigger,
  Content as TooltipContent,
  Provider as TooltipProvider,
} from '@radix-ui/react-tooltip';
```

```typescript
import {
  Root as AccordionRoot,
  Item as AccordionItem,
  Trigger as AccordionTrigger,
  Content as AccordionContent,
} from '@radix-ui/react-accordion';
```

#### ❌ Incorrect Pattern

```typescript
// NEVER use namespace imports for Radix UI
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

// NEVER use namespace imports for other UI libraries
import * as AccordionPrimitive from '@radix-ui/react-accordion';
```

### Standard Libraries

Namespace imports (import \* as) are **ONLY** allowed for:

1. **React**: `import * as React from 'react';`
2. **Standard libraries**: Node.js built-ins, etc.

#### ✅ Allowed Namespace Imports

```typescript
import * as React from 'react';
import * as path from 'path';
import * as fs from 'fs';
```

### Component Naming Convention

When importing Radix UI components, use the following naming pattern:

1. Import with named imports and alias with descriptive names
2. Use PascalCase component names prefixed with the component type
3. Re-export with clear, semantic names

#### Example Pattern

```typescript
// Import
import {
  Root as TooltipRoot,
  Trigger as TooltipTrigger,
  Content as TooltipContent,
  Provider as TooltipProvider,
} from '@radix-ui/react-tooltip';

// Re-export or use directly
export { TooltipRoot, TooltipTrigger, TooltipContent, TooltipProvider };
```

## Migration Guide

If you encounter existing code using namespace imports for UI libraries:

### Before

```typescript
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
```

### After

```typescript
import {
  Root as TooltipRoot,
  Trigger as TooltipTrigger,
} from '@radix-ui/react-tooltip';
```

## Rationale

- **Consistency**: All UI library imports follow the same pattern
- **Tree-shaking**: Named imports enable better dead code elimination
- **Clarity**: Direct imports make dependencies explicit
- **Performance**: Reduces bundle size by importing only what's needed
- **Standards**: Aligns with modern ES module best practices

## Notes

- This rule applies to ALL Radix UI packages (@radix-ui/\*)
- Namespace imports remain acceptable ONLY for React and standard libraries
- When refactoring existing components, update all namespace imports to named imports
