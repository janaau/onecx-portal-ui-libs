import { CssRule } from '../../mapper.types'

export const breadcrumbCssRules: CssRule[] = [
  {
    selector: '.p-breadcrumb .p-breadcrumb-item',
    declarations: [
      {
        property: 'font-weight',
        from: 'usages.breadcrumb.item.defaultVariant.defaultState.label.font.weight',
      },
      {
        property: 'font-size',
        from: 'usages.breadcrumb.item.defaultVariant.defaultState.label.font.size',
      },
      {
        property: 'background',
        from: 'usages.breadcrumb.item.defaultVariant.defaultState.background.color',
      },
      {
        property: 'border-color',
        from: 'usages.breadcrumb.item.defaultVariant.defaultState.border.color',
      },
      {
        property: 'border-width',
        from: 'usages.breadcrumb.item.defaultVariant.defaultState.border.width',
      },
      {
        property: 'padding-inline',
        from: 'usages.breadcrumb.item.defaultVariant.defaultState.paddingX',
      },
      {
        property: 'padding-block',
        from: 'usages.breadcrumb.item.defaultVariant.defaultState.paddingY',
      },
    ],
  },
  {
    selector: '.p-breadcrumb .p-breadcrumb-item:not(.p-disabled):hover',
    declarations: [
      {
        property: 'background',
        from: 'usages.breadcrumb.item.defaultVariant.hover.background.color',
      },
      {
        property: 'border-color',
        from: 'usages.breadcrumb.item.defaultVariant.hover.border.color',
      },
      {
        property: 'border-width',
        from: 'usages.breadcrumb.item.defaultVariant.hover.border.width',
      },
    ],
  },
  {
    selector: '.p-breadcrumb .p-breadcrumb-item:not(.p-disabled):focus-visible',
    declarations: [
      {
        property: 'background',
        from: 'usages.breadcrumb.item.defaultVariant.focus.background.color',
      },
      {
        property: 'border-color',
        from: 'usages.breadcrumb.item.defaultVariant.focus.border.color',
      },
      {
        property: 'border-width',
        from: 'usages.breadcrumb.item.defaultVariant.focus.border.width',
      },
    ],
  },
  {
    selector: '.p-breadcrumb .p-breadcrumb-item:not(.p-disabled):focus-visible .p-breadcrumb-item-link',
    declarations: [
      {
        property: 'color',
        from: 'usages.breadcrumb.item.defaultVariant.focus.color',
      },
    ],
  },
  {
    selector: '.p-breadcrumb .p-breadcrumb-item:not(.p-disabled):focus-visible .p-breadcrumb-item-icon',
    declarations: [
      {
        property: 'color',
        from: 'usages.breadcrumb.item.defaultVariant.focus.icon.color',
      },
    ],
  },
  // Separator symbol: PrimeNG renders the divider as a chevron `<svg>` and its
  // preset only exposes `separator.color`, so the glyph is driven here. The
  // chevron is hidden and a text glyph is rendered from the themeable
  // `separator.symbol` token (stored as a quoted CSS string — e.g. '">" — because
  // the theme pipeline writes `--onecx-theme-*` values unquoted and
  // `content: var(--…)` only renders a glyph for a valid quoted string).
  {
    selector: '.p-breadcrumb .p-breadcrumb-separator svg',
    declarations: [{ property: 'display', value: 'none' }],
  },
  {
    selector: '.p-breadcrumb .p-breadcrumb-separator::after',
    declarations: [
      {
        property: 'content',
        from: 'usages.breadcrumb.separator.defaultVariant.symbol',
      },
    ],
  },
]
