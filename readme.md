# React Aria Tailwind Starter

A modern, accessible React component library built with **React Aria Components** and styled with **Tailwind CSS v4**. This starter provides a comprehensive set of pre-built, customizable UI components that follow accessibility best practices.

## ✨ Features

- 🎯 **Accessibility First**: Built on React Aria Components for WAI-ARIA compliance
- 🎨 **Modern Styling**: Powered by Tailwind CSS v4 with custom design system
- 📚 **Storybook Integration**: Interactive component documentation and testing
- 🧪 **Comprehensive Testing**: Vitest with Storybook Test addon
- 🔧 **TypeScript Support**: Full type safety and IntelliSense
- 🌙 **Dark Mode**: Built-in dark theme support
- ⚡ **Performance Optimized**: Tree-shakeable components with minimal bundle size

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react-aria-tailwind-starter.git
cd react-aria-tailwind-starter

# Install dependencies
pnpm install

# Start Storybook development server
pnpm storybook
```

Visit <http://localhost:6006> to explore the component library.

## 📦 Available Components

### Form Controls

- `Button` - Primary, secondary, destructive, and icon variants
- `TextField` - Text input with validation
- `NumberField` - Numeric input with formatting
- `SearchField` - Search input with clear functionality
- `DateField` - Date input with picker
- `TimeField` - Time input with validation
- `Checkbox` - Single and group checkboxes
- `RadioGroup` - Radio button groups
- `Switch` - Toggle switches
- `Slider` - Range and multi-thumb sliders

### Selection Controls
- `ToggleButton` - Toggle switches
- `ToggleButtonGroup` - Toggle button groups

### Selection Controls

- `Select` - Dropdown selection
- `ComboBox` - Searchable dropdown
- `Autocomplete` - Auto-complete input
- `ListBox` - Selectable list
- `GridList` - Grid-based selection
- `TagGroup` - Tag selection and management

### Date & Time

- `Calendar` - Single date picker
- `RangeCalendar` - Date range selection
- `DatePicker` - Date picker with input
- `DateRangePicker` - Date range picker

### Color Controls

- `ColorPicker` - Full-featured color picker
- `ColorField` - Color input field
- `ColorArea` - 2D color selection
- `ColorSlider` - Color channel sliders
- `ColorWheel` - HSB color wheel
- `ColorSwatch` - Color display
- `ColorSwatchPicker` - Predefined color selection

### Layout & Navigation

- `Table` - Sortable, selectable data tables
- `Tabs` - Tab navigation
- `Breadcrumbs` - Navigation breadcrumbs
- `Tree` - Hierarchical tree view
- `Menu` - Context and dropdown menus
- `Toolbar` - Action toolbars

### Feedback & Overlays

- `Dialog` - Modal dialogs
- `AlertDialog` - Confirmation dialogs
- `Modal` - Modal containers
- `Popover` - Contextual popovers
- `Tooltip` - Hover tooltips
- `ProgressBar` - Progress indicators
- `Meter` - Measurement displays

### Utilities

- `Form` - Form validation and submission
- `Field` - Form field wrapper
- `Separator` - Visual dividers
- `Link` - Accessible links
- `Disclosure` - Expandable content

## 🎨 Styling System

The project uses a sophisticated styling approach:

- **Tailwind Variants**: Dynamic component variants with `tailwind-variants`
- **Focus Management**: Consistent focus ring utilities
- **Dark Mode**: Automatic dark theme support
- **Custom Plugin**: `tailwindcss-react-aria-components` for React Aria states
- **Animation**: `tailwindcss-animate` for smooth transitions

### Customizing Components

Each component accepts standard React Aria props plus custom variant props:

```tsx
import { Button } from './src/Button';

// Different variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="destructive">Delete</Button>
<Button variant="icon"><TrashIcon /></Button>

// With React Aria props
<Button 
  variant="primary"
  isDisabled={loading}
  onPress={() => handleSubmit()}
>
  Submit
</Button>
```

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
pnpm test

# Run Storybook tests specifically
pnpm test-storybook

# Generate coverage report
pnpm coverage
```

### Testing Approach

- **Stories as Tests**: All Storybook stories automatically become tests
- **Interactive Testing**: Play functions for user interaction testing
- **Visual Testing**: Automated visual regression testing
- **Accessibility Testing**: Built-in a11y checks

See [TESTING.md](./TESTING.md) for detailed testing documentation.

## 📖 Development

### Project Structure

```text
src/
├── components/           # React Aria component implementations
├── utils.ts             # Shared utilities (focus rings, etc.)
└── index.css           # Global styles and Tailwind imports

stories/
├── *.stories.tsx       # Storybook stories and tests

vitest.config.ts        # Vitest configuration
tailwind.config.ts      # Tailwind CSS configuration
```

### Building Components

1. Create the component in `src/`
2. Add Storybook stories in `stories/`
3. Export from appropriate index files
4. Add tests using play functions

### Scripts

```bash
pnpm storybook          # Start Storybook dev server
pnpm build-storybook    # Build Storybook for production
pnpm test              # Run tests
pnpm test-storybook    # Run Storybook-specific tests
pnpm coverage          # Generate test coverage
```

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS v4 with custom configuration:

- **React Aria Plugin**: Automatic styling for component states
- **Animation Plugin**: Smooth transitions and animations
- **Custom Utilities**: Focus rings and accessibility helpers

### TypeScript

Full TypeScript support with:

- Strict type checking
- React Aria Components types
- Custom prop interfaces
- IntelliSense support

## 📱 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Add your component and stories
4. Write tests for your component
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Aria](https://react-spectrum.adobe.com/react-aria/) - Accessibility primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Storybook](https://storybook.js.org/) - Component development environment
- [Vitest](https://vitest.dev/) - Fast unit testing framework

## 📚 Resources

- [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
- [Testing Guide](./TESTING.md)
- [Release Notes](./RELEASE.md)
