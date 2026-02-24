# Tailwind CSS Configuration

This project uses Tailwind CSS v4 with RTL (Right-to-Left) support for bilingual content (Arabic/English).

## Configuration Files

- `tailwind.config.ts` - Main Tailwind configuration with custom theme
- `app/globals.css` - Global styles with RTL support
- `postcss.config.mjs` - PostCSS configuration

## Custom Theme Colors

The configuration includes professional color palettes suitable for a contracting company:

### Primary Colors (Blue)
- Used for main CTAs, links, and primary actions
- `primary-500` (#3b82f6) - Default primary color
- Range: `primary-50` to `primary-950`

### Secondary Colors (Gray/Slate)
- Used for text, borders, and secondary elements
- `secondary-600` (#475569) - Default secondary color
- Range: `secondary-50` to `secondary-950`

### Accent Colors (Amber/Orange)
- Used for highlights and important elements
- `accent-400` (#f59e0b) - Default accent color
- Range: `accent-50` to `accent-900`

### Utility Colors
- **Success**: Green palette for success states
- **Warning**: Amber palette for warnings
- **Error**: Red palette for errors

## RTL Support

### Using RTL-Aware Classes

The `tailwindcss-rtl` plugin provides directional utilities:

```tsx
// Margin and Padding
<div className="ms-4">  {/* margin-start (left in LTR, right in RTL) */}
<div className="me-4">  {/* margin-end (right in LTR, left in RTL) */}
<div className="ps-4">  {/* padding-start */}
<div className="pe-4">  {/* padding-end */}

// Text Alignment
<div className="text-start">  {/* text-align: start */}
<div className="text-end">    {/* text-align: end */}

// Borders
<div className="border-s">  {/* border-start */}
<div className="border-e">  {/* border-end */}
```

### Setting Direction

Set the `dir` attribute on the HTML element:

```tsx
// For Arabic (RTL)
<html lang="ar" dir="rtl">

// For English (LTR)
<html lang="en" dir="ltr">
```

### RTL Utility Classes

Custom utility classes are available in `globals.css`:

```css
/* Flip elements in RTL */
.rtl-flip {
  transform: scaleX(-1);
}

[dir='rtl'] .rtl-flip {
  transform: scaleX(1);
}
```

## Custom Fonts

The configuration supports custom font families:

```tsx
// In your layout
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cairo = localFont({
  src: './fonts/Cairo-Variable.ttf',
  variable: '--font-cairo',
});

// Apply fonts
<body className={inter.variable}>
  {/* English content uses Inter */}
</body>

<body className={cairo.variable}>
  {/* Arabic content uses Cairo */}
</body>
```

## Usage Examples

### Buttons with Theme Colors

```tsx
// Primary button
<button className="bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-lg">
  Contact Us
</button>

// Secondary button
<button className="bg-secondary hover:bg-secondary-700 text-white px-6 py-3 rounded-lg">
  Learn More
</button>

// Accent button
<button className="bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-lg">
  Get Started
</button>
```

### Cards with RTL Support

```tsx
<div className="bg-white rounded-lg shadow-lg p-6">
  <h3 className="text-xl font-bold text-start mb-4">
    Service Title
  </h3>
  <p className="text-secondary-600 text-start mb-4">
    Service description text that will align correctly in both LTR and RTL.
  </p>
  <div className="flex items-center gap-4">
    <span className="text-primary">Learn More</span>
    <svg className="w-5 h-5 rtl-flip">
      {/* Arrow icon that flips in RTL */}
    </svg>
  </div>
</div>
```

### Responsive Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items will maintain proper spacing in RTL */}
</div>
```

## Accessibility Features

The configuration includes accessibility-focused styles:

- Focus indicators with 2px outline
- Proper color contrast ratios (WCAG AA compliant)
- Smooth transitions for interactive elements
- Semantic color usage

## Testing RTL Layout

To test RTL layout:

1. Add `dir="rtl"` to your HTML element
2. Use browser DevTools to toggle the `dir` attribute
3. Verify that:
   - Text aligns to the right
   - Margins and paddings flip correctly
   - Icons and arrows flip appropriately
   - Navigation flows right-to-left

## Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [tailwindcss-rtl Plugin](https://github.com/20lives/tailwindcss-rtl)
- [Next.js with Tailwind](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)
