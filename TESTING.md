# Testing Guide for React Aria Tailwind Starter

## Overview

This project uses **Storybook Test** with the Vitest addon for comprehensive UI component testing. All stories automatically become tests, and you can add interactive tests using play functions.

## Testing Stack

- **Framework**: Vitest with browser mode
- **Browser Engine**: Playwright (Chromium)
- **Testing Utilities**: Storybook Test (`storybook/test`)
- **Coverage**: V8 coverage provider
- **Integration**: Stories as tests approach

## Quick Start

### Running Tests

```bash
# Run all tests
pnpm test

# Run only Storybook tests
pnpm test-storybook

# Run tests with coverage
pnpm coverage

# Watch mode for development
pnpm test-storybook --watch
```

## Writing Tests

### Basic Story Test (Smoke Test)

Every story is automatically a smoke test that verifies the component renders without errors:

```typescript
export const Primary = {
  args: {
    variant: 'primary'
  },
  // This automatically tests that the component renders
};
```

### Interactive Tests with Play Functions

Add user interactions and assertions using the `play` function:

```typescript
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src/Button';
import { expect, fn, userEvent, within } from 'storybook/test';

export const InteractiveButton: Story = {
  args: {
    variant: 'primary',
    onClick: fn() // Create mock function for spying
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    
    // Find elements
    const button = canvas.getByRole('button');
    
    // Test rendering
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent('Button');
    
    // Test interaction
    await userEvent.click(button);
    
    // Verify mock was called
    await expect(args.onClick).toHaveBeenCalled();
  },
};
```

## Testing Utilities

### Available Functions from `storybook/test`

```typescript
import { 
  expect,     // Assertions (Jest-compatible)
  fn,         // Mock functions
  userEvent,  // User interactions
  within,     // Element scoping
  waitFor,    // Async waiting
  screen      // Global queries
} from 'storybook/test';
```

### Common Test Patterns

#### Testing Component States

```typescript
export const LoadingState: Story = {
  args: { isLoading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('progressbar')).toBeInTheDocument();
  },
};
```

#### Testing Form Interactions

```typescript
export const FormSubmission: Story = {
  args: { onSubmit: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    
    const input = canvas.getByLabelText('Email');
    await userEvent.type(input, 'test@example.com');
    
    const submitButton = canvas.getByRole('button', { name: /submit/i });
    await userEvent.click(submitButton);
    
    await expect(args.onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        email: 'test@example.com'
      })
    );
  },
};
```

#### Testing Accessibility

```typescript
export const AccessibilityTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test keyboard navigation
    const button = canvas.getByRole('button');
    button.focus();
    await expect(button).toHaveFocus();
    
    // Test ARIA attributes
    await expect(button).toHaveAttribute('aria-label');
  },
};
```

## Configuration

### Test Configuration Files

- **`vitest.config.ts`** - Main Vitest configuration with Storybook plugin
- **`.storybook/vitest.setup.ts`** - Storybook-specific test setup

### Coverage Configuration

Coverage is provided by `@vitest/coverage-v8` and can be activated via:

```bash
pnpm coverage
```

Or enable in the Storybook UI testing panel.

## Best Practices

1. **Use descriptive test names**: Story names become test names
2. **Test user workflows**: Focus on how users interact with components
3. **Mock external dependencies**: Use `fn()` for callbacks and event handlers
4. **Test accessibility**: Include keyboard navigation and ARIA attributes
5. **Keep tests focused**: Each story should test one specific scenario

## CI/CD Integration

Add to your CI workflow:

```yaml
- name: Run tests
  run: pnpm test-storybook --run

- name: Run tests with coverage
  run: pnpm coverage --run
```

## Current Test Status

✅ **45 story files** automatically tested as components  
✅ **70 tests passing** including interactive tests  
✅ **Browser-based testing** with Playwright for high fidelity  
✅ **Real-time feedback** with watch mode during development  
✅ **Coverage reporting** available for code quality insights  
✅ **CI/CD ready** for automated testing in pipelines
