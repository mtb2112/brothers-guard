import {type SchemaTypeDefinition} from 'sanity'

import {showType} from './showType'
import {siteSettingsType} from './siteSettingsType'
import {songType} from './songType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [siteSettingsType, showType, songType],
}
