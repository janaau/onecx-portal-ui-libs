import * as z from 'zod'
import { color, withRef } from '../primitives'

const breadcrumbSeparatorVariantShape = z.object({
  color: color.optional(),
  width: withRef(z.string()).optional(),
  // The separator glyph (e.g. ">" or "/"). Stored as a *quoted* CSS string
  // (">") because the theme pipeline writes `--onecx-theme-*` values unquoted and
  // the CSS mapper emits `content: var(--...)`, which only renders a glyph for a
  // valid (quoted) `<string>` value. See the CSS mapper (breadcrumb.rules.ts).
  symbol: withRef(z.string()).optional(),
})

export const breadcrumbSeparatorShape = z.object({
  defaultVariant: breadcrumbSeparatorVariantShape.prefault({}),
})

export const breadcrumbSeparatorDefaults = {
  defaultVariant: {
    color: '{{primitives.defaultVariant.defaultState.defaultSeverity.border.color}}',
    width: '{{primitives.border.width.md}}',
    symbol: '">"',
  },
}
