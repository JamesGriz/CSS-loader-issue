/** @type {import('tailwindcss').Config} */

const spacingMap = {
  // Mobile sizes
  'xs-m': '0.375rem', // 6px
  'sm-m': '0.75rem', // 12px
  'md-m': '1.5rem', // 24px
  'lg-m': '2.25rem', // 36px
  'xl-m': '3rem', // 48px
  '2xl-m': '4.5rem', // 72px
  '3xl-m': '6rem', // 96px
  '4xl-m': '7.5rem', // 120px
  '5xl-m': '9rem', // 144px

  // Desktop sizes
  xs: '0.5rem', // 8px
  sm: '1rem', // 16px
  md: '2rem', // 32px
  lg: '3rem', // 48px
  xl: '4rem', // 64px
  '2xl': '6rem', // 96px
  '3xl': '8rem', // 128px
  '4xl': '10rem', // 160px
  '5xl': '12rem', // 192px
}

const spaceOptions = [
  { label: 'Space 0', value: 0 },
  { label: 'Space 1', value: 1 },
  { label: 'Space 2', value: 2 },
  { label: 'Space 3', value: 3 },
  { label: 'Space 4', value: 4 },
  { label: 'Space 5', value: 5 },
  { label: 'Space 6', value: 6 },
  { label: 'Space 8', value: 8 },
  { label: 'Space 10', value: 10 },
  { label: 'Space 12', value: 12 },
  { label: 'Space 16', value: 16 },
  { label: 'Space 20', value: 20 },
  { label: 'Space 24', value: 24 },
  { label: 'Space 32', value: 32 },
  { label: 'Space 40', value: 40 },
  { label: 'Space 48', value: 48 },
  { label: 'Space 56', value: 56 },
  { label: 'Space 64', value: 64 },
]

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [{ pattern: /^m[trblxy]?-.*/ }, { pattern: /^p[trblxy]?-.*/ }],

  theme: {
    extend: {
      padding: spacingMap,
      margin: spacingMap,
      space: spacingMap,
    },
    fontFamily: {
      serif: ['calluna', 'serif'],
      sans: ['freight-neo-pro', 'sans'],
      mono: ['pragmatica-extended', 'mono'],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      bold: '700',
    },
    fontSize: {
      // DESKTOP SIZES
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.1875rem', // 19px
      xl: '1.75rem', // 28px
      '2xl': '2.375rem', // 38px
      '3xl': '3.0625rem', // 49px
      '4xl': '4.375rem', // 70px
      '5xl': '8.125rem', // 130px
      '6xl': '18.125rem', // 290px

      // MOBILE SIZES
      'lg-m': '1.125rem', // 18px
      'xl-m': '1.5rem', // 24px
      '2xl-m': '1.875rem', // 30px
      '3xl-m': '2.625rem', // 42px
      '4xl-m': '3.375rem', // 54px
      '5xl-m': '6.25rem', // 100px
      '6xl-m': '14rem', // 224px
    },
    colors: {
      // Base colors
      transparent: 'transparent',
      current: 'currentColor',

      // Brand colors - General colors of the brand that can be themed
      // Can include base colors if they are used as a brand color, ie here quaternary is using white
      primary: 'var(--color-primary)',
      'primary/10': 'var(--color-primary-10)',
      'primary/25': 'var(--color-primary-25)',

      secondary: 'var(--color-secondary)',
      'secondary/25': 'var(--color-secondary-25)',

      tertiary: 'var(--color-tertiary)',
      'tertiary/25': 'var(--color-tertiary-25)',

      quaternary: 'var(--color-quaternary)',
      'quaternary/25': 'var(--color-quaternary-25)',

      'accent-primary': 'var(--accent-primary)',
      'accent-primary/25': 'var(--accent-primary-25)',
      'accent-primary/50': 'var(--accent-primary-50)',
      'accent-primary/75': 'var(--accent-primary-75)',

      'accent-secondary': 'var(--accent-secondary)',

      // Status colors - Colors to display meaning
      // -- info
      // -- success
      // -- danger
      // -- warning
      // -- neutral

      // Palette - Should be mainly used in global.css where the theme is defined unless we want to use a color that is consistent with the theme
      // The reason we want to define our colors in a palette like this:
      // -- So that we can have a single source of truth for what our theme colors might translate to
      // -- A way to view the entire palette in storybook
      // -- For any tailwind classes to be
      white: '#ffffff',
      black: '#000000',
      brown: {
        100: '#EFE5DA', //#EFE5DA
        200: '#B58C67', //#B58C67
        300: '#A98759', //#A98759
        400: '#32231E', //#32231E
        500: '#271B17', //#271B17
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
