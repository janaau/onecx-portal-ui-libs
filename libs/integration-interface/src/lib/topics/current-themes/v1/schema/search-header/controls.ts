import * as z from 'zod'

import { withRef } from '../primitives'

export const searchHeaderControlsShape = z.object({
  gap: withRef(z.string()).optional(),
})

export const searchHeaderControlsDefaults = {
  gap: '{{primitives.space.md}}',
}
