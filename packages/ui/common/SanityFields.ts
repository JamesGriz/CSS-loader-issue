import { defineField } from 'sanity'
import { CVAConfig } from './Types'
import { TailwindSpacingInput } from '../../../apps/cms/components/Tailwind'

type InputFieldType = 'padding' | 'margin'

// Define an interface for your input field
interface InputField {
  name: string
  title: string
  type: InputFieldType
}

export const createCtasField = () =>
  defineField({
    name: 'ctas',
    type: 'array',
    of: [{ type: 'cta' }],
  })

export const createHeadlineField = (required?: boolean) =>
  defineField({
    name: 'headline',
    type: 'string',
    title: 'Headline',
    validation: (Rule) =>
      required ? Rule.required().error('This field is required') : Rule,
  })

export const createInputField = (
  name: string,
  title: string,
  required?: boolean,
) =>
  defineField({
    name: name,
    type: 'string',
    title: title,
    validation: (Rule) =>
      required ? Rule.required().error('This field is required') : Rule,
  })

export const createTextAreaField = () => ({
  name: 'description',
  type: 'text',
  title: 'Description',
})

export const createImageField = (required?: boolean) =>
  defineField({
    name: 'image',
    type: 'image',
    title: 'Image',
    validation: (Rule) =>
      required ? Rule.required().error('This field is required') : Rule,
  })

export const createSpacingField = (field: InputField) => {
  return defineField({
    title: field.title || camelToSentenceCase(field.name),
    name: field.name,
    type: 'object',
    fields: [
      {
        title: 'Base',
        name: 'base',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        title: 'Tablet',
        name: 'tablet',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        title: 'Desktop',
        name: 'desktop',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
    options: {
      type: field.type,
    },
    components: {
      input: TailwindSpacingInput,
    },
  })
}

export const createVariantsField = (config: CVAConfig) => {
  const { variants } = config
  return Object.keys(variants).map((variant) => {
    return {
      name: variant,
      title: camelToSentenceCase(variant),
      type: 'string',
      options: {
        list: Object.keys(variants[variant]).map((key) => ({
          title: key,
          value: key,
        })),
        // This will control the format of the dropdown
        layout: 'dropdown',
      },
    }
  })
}

function camelToSentenceCase(input: string) {
  // Add a space before all caps, then replace the first character with its uppercase version, finally trim leading/trailing white space
  return input
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, function (str) {
      return str.toUpperCase()
    })
    .trim()
}
