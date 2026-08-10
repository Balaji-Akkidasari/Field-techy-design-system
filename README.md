# Field Techy — Design System Handoff

Design-system & style-guide deliverables for the Field Techy mobile app, extracted directly from the Figma file **"Field Techy - Design-v2.0"** (v2.0).

## Files

| File | What it is | Use it for |
|---|---|---|
| [`style-guide.md`](./style-guide.md) | The full design system & style guide | The main handoff document — colors, typography, spacing, components, patterns, states, screens, responsive, accessibility, QA |
| [`design-tokens.json`](./design-tokens.json) | Machine-readable design tokens (W3C/DTCG format) | Import into Tokens Studio, CSS variables, Tailwind config, or React Native/Flutter theme files |
| [`design-system-site/`](./design-system-site/) | Standalone browsable design-system site (Zeroheight/Storybook style) | Visual handoff — component previews, copy-to-clipboard tokens, screen inventory |

## Design-system site

`design-system-site/index.html` is a static, dependency-free site that works straight from a double-click — all data is embedded, nothing is fetched.

- **Open locally:** double-click `design-system-site/index.html`
- **Share a link:** drag-and-drop the folder to [Netlify Drop](https://app.netlify.com/drop), [Vercel](https://vercel.com/new), or push it to GitHub Pages — no build step needed
- **What's inside:** palettes, semantic tokens, gradients, full type scale, spacing, radius, shadows, icons, component previews (buttons, inputs, cards, wallet, bottom nav, chips, dialog, chat, timeline), status flow, screen inventory, and the full `design-tokens.json` + CSS variables with one-click copy

## Quick reference

- **Canvas:** 390 × 844 pt · **Primary font:** Poppins · **Brand color:** `#009966`
- **Auth/splash gradient:** `#E6FFE2 → #00E19D` · **Wallet gradient:** `#009362 → #40D2A1`
- **Primary button:** pill radius, `#009966` fill, Poppins SemiBold 15 white label
- **Bottom nav:** Dashboard · Jobs · Wallet · Dispute (active `#009966`, inactive `#A29EB6`)

## How to hand off to the developer

1. Send the developer `style-guide.md` + `design-tokens.json` and point them at `design-system-site/` to browse it visually.
2. Tell them the Figma file and the **Mobile high fidelity design** page.
3. Load `design-tokens.json` into their token pipeline (or use the CSS variable mapping in §16.2 of the guide).
4. Use §17 QA checklist at the end of the build.

## Source

- Figma: https://www.figma.com/design/YT6JQ3g2DEVDF5Es5a0j3N/Field-Techy---Design-v2.0
- All values were read programmatically from the Figma REST API (colors, type, radii, shadows, gradients, component geometry, and screen inventory).
