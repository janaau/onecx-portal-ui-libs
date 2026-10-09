import * as z from 'zod'

import { withRef } from '../primitives'

export const searchHeaderLayoutShape = z.object({
  rowGap: withRef(z.string()).optional(),
  columnGap: withRef(z.string()).optional(),
})

export const searchHeaderLayoutDefaults = {
  rowGap: '{{primitives.space.md}}',
  columnGap: '{{primitives.space.md}}',
}
