module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name(e.g. Hero, Header, Input):',
        validate: (name) => {
          if (name === '') {
            return 'Please input component name or press `ctrl-c` to quit'
          }
          return true
        },
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select the component type:',
        choices: ['Token', 'Element', 'Component', 'Composition'],
      },
      {
        type: 'confirm',
        name: 'includeCva',
        message: 'Do you want to include cva boilerplate?',
        default: false,
      },
      {
        type: 'checkbox',
        name: 'props',
        message: 'Select the props you want to include:',
        choices: [
          {
            name: 'children',
            value:
              '/** Content of the component */\nchildren?: string | React.ReactNode;',
            defaultValue: '<code>Code</code>',
          },
          {
            name: 'headline',
            value: '/** Headline of the component */\nheadline?: string;',
            defaultValue: '"Headline"',
          },
          {
            name: 'color',
            value: '/** Color of the component */\ncolor?: FontColor | null;',
            defaultValue: '"red"',
          },
          {
            name: 'bgColor',
            value:
              '/** Background color of the component */\nbgColor?: Color | null;',
            defaultValue: '"red"',
          },
          {
            name: 'visual',
            value:
              '/** Visual element of the component */\nvisual?: React.ReactElement | undefined;',
            defaultValue: '<code>Code</code>',
          },
          {
            name: 'ctas',
            value:
              '/** CTAs of the component */\nctas?: React.ReactElement | React.ReactNode;',
            defaultValue: '<code>Code</code>',
          },
          {
            name: 'subtitle',
            value: '/** Subtitle for the component */\nsubtitle?: string;',
            defaultValue: '"subtitle"',
          },
        ].map((choice) => ({
          ...choice,
          value: {
            name: choice.name,
            definition: choice.value,
            defaultValue: choice.defaultValue,
          },
        })),
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: './packages/ui/components/{{properCase name}}',
        base: './.plop/component',
        templateFiles: './.plop/component/**/*.hbs',
        globOptions: {
          expandDirectories: false,
        },
      },
      {
        type: 'append',
        path: './packages/ui/index.tsx',
        template: "export * from './components/{{properCase name}}';",
      },
    ],
  })
}
