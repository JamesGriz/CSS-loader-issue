import 'ui/global.css'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Preview } from '@storybook/react'
import { useEffect } from 'react'

const withThemeProvider = (Story: any, context: any) => {
  const theme = context.globals.theme
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    // TODO: Improve this logic if more themes get introduced
    if (theme === 'dark') {
      body.classList.add('dark')
      body.classList.remove('light')
    } else {
      body.classList.add('light')
      body.classList.remove('dark')
    }
  }, [theme])

  return <Story {...context} />
}

const designedViewports = {
  mobile: {
    name: 'mobile (design)',
    styles: {
      width: '375px',
      height: '100%',
    },
  },
  desktop: {
    name: 'desktop (design)',
    styles: {
      width: '1440px',
      height: '100%',
    },
  },
}

const tailwindViewports = {
  sm: {
    name: 'sm (Tailwind)',
    styles: {
      width: '640px',
      height: '100%',
    },
  },
  md: {
    name: 'md (Tailwind)',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  lg: {
    name: 'lg (Tailwind)',
    styles: {
      width: '1024px',
      height: '100%',
    },
  },
  xm: {
    name: 'xl (Tailwind)',
    styles: {
      width: '1280px',
      height: '100%',
    },
  },
  xxl: {
    name: '2xl (Tailwind)',
    styles: {
      width: '1536px',
      height: '100%',
    },
  },
}

const parameters = {
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...tailwindViewports,
      ...designedViewports,
    },
  },
  // backgrounds: {
  //   default: 'light',
  //   values: [
  //     {
  //       name: 'light',w
  //       value: '#EFE5DA',
  //     },
  //     {
  //       name: 'dark',
  //       value: '#32231E',
  //     },
  //   ],
  // },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Welcome', 'Tokens', 'Components', 'Pages'],
    },
  },
}

const preview: Preview = {
  parameters: { ...parameters },
  decorators: [withThemeProvider],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
}

export default preview
