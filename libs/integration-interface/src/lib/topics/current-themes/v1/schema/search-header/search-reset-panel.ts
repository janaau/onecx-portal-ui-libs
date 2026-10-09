import * as z from 'zod'

import { withRef } from '../primitives'

export const searchResetPanelShape = z.object({
  paddingX: withRef(z.string()).optional(),
  paddingY: withRef(z.string()).optional(),
  alignItems: withRef(z.string()).optional(),
})

export const searchResetPanelDefaults = {
  paddingX: '{{primitives.space.md}}',
  paddingY: '{{primitives.space.md}}',
  alignItems: 'center',
}
