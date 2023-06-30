import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {iconPicker} from 'sanity-plugin-icon-picker'
import {schemaTypes} from './schemas'
import {media, mediaAssetSource} from 'sanity-plugin-media'
// import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  name: '',
  title: '',

  projectId: '',
  dataset: '',

  plugins: [deskTool(), visionTool(), iconPicker(), media()],
  form: {
    // Only use Media plugin when selecting images
    image: {
      assetSources: (previousAssetSources) =>
        previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource),
    },
  },
  schema: {
    types: schemaTypes,
  },
})
