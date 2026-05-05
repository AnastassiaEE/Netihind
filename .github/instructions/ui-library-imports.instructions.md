---
description: Guidelines for importing UI library components (Radix UI) with consistent import patterns
applyTo: '**/*.tsx'
---

# UI Library Imports Instructions

## Import Patterns

### Radix UI Components

**CRITICAL RULE**: For all UI library components from Radix UI, use **named imports** directly from the package. Do NOT use namespace imports (import \* as).

#### ✅ Correct Patterns

**Pattern 1: Direct aliasing at import**

```typescript
import {
  Root as SelectRoot,
  Trigger as SelectTrigger,
  Content as SelectContent,
  Portal as SelectPortal,
} from '@radix-ui/react-select';
```

**Pattern 2: Import and assign**

```typescript
import { Root, Trigger, Content, Provider } from '@radix-ui/react-tooltip';

const TooltipRoot = Root;
const TooltipTrigger = Trigger;
const TooltipContent = Content;
const TooltipProvider = Provider;
```

Both patterns are valid. Use Pattern 1 when you need immediate aliasing, and Pattern 2 when you want to re-export or create references.

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

When importing Radix UI components, use one of the following patterns:

1. **Direct aliasing**: Import with renamed exports (PascalCase component names prefixed with the component type)
2. **Import and assign**: Import with original names, then assign to descriptive const names

#### Example Patterns

**Direct aliasing pattern:**

```typescript
// Import with aliases
import {
  Root as SelectRoot,
  Trigger as SelectTrigger,
  Content as SelectContent,
  Item as SelectItem,
} from '@radix-ui/react-select';

// Use directly
export { SelectRoot, SelectTrigger, SelectContent, SelectItem };
```

**Import and assign pattern:**

```typescript
// Import without aliases
import { Root, Trigger, Content, Provider } from '@radix-ui/react-tooltip';

// Assign to descriptive names
const TooltipRoot = Root;
const TooltipTrigger = Trigger;
const TooltipContent = Content;
const TooltipProvider = Provider;

// Re-export or use
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

### After (Option 1: Direct aliasing)

```typescript
import {
  Root as TooltipRoot,
  Trigger as TooltipTrigger,
} from '@radix-ui/react-tooltip';
```

### After (Option 2: Import and assign)

```typescript
import { Root, Trigger } from '@radix-ui/react-tooltip';

const TooltipRoot = Root;
const TooltipTrigger = Trigger;
```

## Rationale

- **Consistency**: All UI library imports follow the same pattern (named imports only)
- **Tree-shaking**: Named imports enable better dead code elimination
- **Clarity**: Direct imports make dependencies explicit
- **Performance**: Reduces bundle size by importing only what's needed
- **Standards**: Aligns with modern ES module best practices
- **Flexibility**: Two valid patterns allow choosing the most appropriate for each use case

## Notes

- This rule applies to ALL Radix UI packages (@radix-ui/\*)
- Namespace imports remain acceptable ONLY for React and standard libraries
- Both import patterns (direct aliasing and import+assign) are valid - choose based on context
- When refactoring existing components, update all namespace imports to named imports
- Prefer Pattern 1 (direct aliasing) for most cases as it's more concise
- Use Pattern 2 (import and assign) when you need to re-export or create local references
