type TextSize = keyof typeof textSize
type Alignment = keyof typeof alignment
type LetterSpacing = keyof typeof letterSpacing
type LineHeight = keyof typeof lineHeight
type TextWeight = keyof typeof textWeight
type FontFamily = keyof typeof fontFamily
type TextTransform = keyof typeof textTransform

const textSize = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg-m sm:text-lg',
  xl: 'text-xl-m sm:text-xl',
  '2xl': 'text-2xl-m sm:text-2xl',
  '3xl': 'text-3xl-m sm:text-3xl',
  '4xl': 'text-4xl-m sm:text-4xl',
  // Used by Hero, size will have to incorporate these sizes into text style
  // '5xl': 'text-5xl-m sm:text-5xl',
  // '6xl': 'text-6xl-m sm:text-6xl',
}

const alignment = {
  center: 'text-center',
  left: 'text-left',
  right: 'text-right',
}

const letterSpacing = {
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
}

// TODO: configure in TW config
const lineHeight = {
  none: 'leading-none',
  xs: 'leading-3',
  sm: 'leading-4',
  md: 'leading-5',
  lg: 'leading-6',
  xl: 'leading-7',
  '2xl': 'leading-8',
  '3xl': 'leading-9',
  '4xl': 'leading-[4.25rem]',
  '5xl': 'leading-11',
  flush: 'leading-[0.71]',
}

const textWeight = {
  light: 'font-light',
  normal: 'font-normal',
  bold: 'font-bold',
}

const fontFamily = {
  sans: 'font-sans',
  serif: 'font-serif',
  mono: 'font-mono',
}

const textTransform = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  normal: 'normal-case',
}

function getTextStyleClassNames({
  size,
  font,
  weight,
  tracking,
  leading,
  transform,
}: {
  size: TextSize
  font: FontFamily
  weight: TextWeight
  tracking: LetterSpacing
  leading: LineHeight
  transform: TextTransform
}): string {
  return `${textSize[size]} ${fontFamily[font]} ${textWeight[weight]} ${letterSpacing[tracking]} ${lineHeight[leading]} ${textTransform[transform]}`
}

const textStyle = {
  // TODO: incorporate hero sizes as textStyle variants
  caption: getTextStyleClassNames({
    size: 'sm',
    font: 'serif',
    weight: 'normal',
    tracking: 'normal',
    leading: 'xs',
    transform: 'normal',
  }),
  p2: getTextStyleClassNames({
    size: 'lg',
    font: 'serif',
    weight: 'normal',
    tracking: 'normal',
    leading: 'xl',
    transform: 'normal',
  }),
  p1: getTextStyleClassNames({
    size: 'xl',
    font: 'serif',
    weight: 'light',
    tracking: 'normal',
    leading: '2xl',
    transform: 'normal',
  }),
  h5: getTextStyleClassNames({
    size: 'xs',
    font: 'mono',
    weight: 'light',
    tracking: 'wide',
    leading: 'sm',
    transform: 'uppercase',
  }),
  h4: getTextStyleClassNames({
    size: '2xl',
    font: 'sans',
    weight: 'normal',
    tracking: 'normal',
    leading: 'none',
    transform: 'uppercase',
  }),
  h3: getTextStyleClassNames({
    size: '2xl',
    font: 'serif',
    weight: 'light',
    tracking: 'normal',
    leading: 'none',
    transform: 'capitalize',
  }),
  h2: getTextStyleClassNames({
    size: '3xl',
    font: 'sans',
    weight: 'normal',
    tracking: 'normal',
    leading: 'none',
    transform: 'uppercase',
  }),
  h1: getTextStyleClassNames({
    size: '4xl',
    font: 'sans',
    weight: 'normal',
    tracking: 'normal',
    leading: 'none',
    transform: 'uppercase',
  }),
}

export type TextStyleType = keyof typeof textStyle

export {
  textStyle,
  textSize,
  lineHeight,
  textWeight,
  fontFamily,
  letterSpacing,
  textTransform,
  alignment,
}
