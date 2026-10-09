import * as z from 'zod'

import { applyDefaultsRecursive } from '../defaults-helper'
import { themeSchemaRegistry } from '../registry'
import { searchHeaderControlsDefaults, searchHeaderControlsShape } from './controls'
import { searchHeaderLayoutDefaults, searchHeaderLayoutShape } from './layout'
import { searchResetPanelDefaults, searchResetPanelShape } from './search-reset-panel'

export const searchHeaderShape = z.object({
  layout: searchHeaderLayoutShape.prefault({}),
  controls: searchHeaderControlsShape.prefault({}),
  searchResetPanel: searchResetPanelShape.prefault({}),
})

export const searchHeaderDefaults = {
  layout: searchHeaderLayoutDefaults,
  controls: searchHeaderControlsDefaults,
  searchResetPanel: searchResetPanelDefaults,
}

export const searchHeader = applyDefaultsRecursive(searchHeaderShape, searchHeaderDefaults).register(
  themeSchemaRegistry,
  {
    id: 'searchHeader',
  }
)
export class SearchHeaderSchema {
  static readonly schema = searchHeader
}
