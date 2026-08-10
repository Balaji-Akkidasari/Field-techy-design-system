/* ============================================================
   Field Techy — Design System site · app.js
   All data embedded so the site works from file:// (no fetch).
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Embedded token data (mirrors design-tokens.json) ---------------- */

  var TOKENS_JSON = `{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "name": "Field Techy Design Tokens",
  "version": "2.0",
  "source": "Figma file: Field Techy - Design v2.0 (YT6JQ3g2DEVDF5Es5a0j3N)",
  "color": {
    "brand": {
      "type": "color",
      "description": "Primary brand green palette (swatches 1-8 from Figma 'Colors system').",
      "main": { "value": "#009966", "description": "Brand primary. Primary buttons, links, active states, icons." },
      "hover": { "value": "#00875A", "description": "Primary hover state." },
      "pressed": { "value": "#007750", "description": "Primary pressed/active state. Also used for filled wallet action buttons." },
      "deep": { "value": "#016946", "description": "Darkest brand green. Text/accents on light backgrounds." },
      "light": { "value": "#57C8A1", "description": "Light brand green." },
      "lighter": { "value": "#8CE7C8", "description": "Lighter brand green." },
      "lightest": { "value": "#BEF6E3", "description": "Very light brand green." },
      "tint": { "value": "#CDF0E4", "description": "Brand green tint. Soft chip/tag backgrounds." },
      "cta": { "value": "#00C896", "description": "Brighter green used for secondary CTA text." }
    },
    "info": {
      "type": "color",
      "description": "Blue / information palette.",
      "100": { "value": "#D9F0FF" },
      "200": { "value": "#B6E1FF" },
      "300": { "value": "#86CDFF" },
      "400": { "value": "#3D94FF" },
      "500": { "value": "#1478F3", "description": "Info primary." },
      "600": { "value": "#046FF2" },
      "700": { "value": "#0063DC" },
      "800": { "value": "#0257BE" },
      "chip-text": { "value": "#2563EB", "description": "Info chip text used in job cards." },
      "job-type-text": { "value": "#004A99", "description": "'Full Time' job type text." },
      "action": { "value": "#4794E7", "description": "Check-in / location action buttons." }
    },
    "error": {
      "type": "color",
      "description": "Red / error palette.",
      "100": { "value": "#FFE5E0" },
      "200": { "value": "#EC8686" },
      "300": { "value": "#ED7676" },
      "400": { "value": "#ED6464" },
      "500": { "value": "#EF4444", "description": "Error primary. Destructive text/icons (e.g. Logout)." },
      "600": { "value": "#EA3A3A" },
      "700": { "value": "#E42D2D" },
      "800": { "value": "#DA2316" },
      "reject": { "value": "#D95741", "description": "Reject button background." },
      "required": { "value": "#D50A0A", "description": "Required-field asterisk." }
    },
    "success": {
      "type": "color",
      "description": "Green / success palette.",
      "100": { "value": "#B6E0AA" },
      "200": { "value": "#95DB80" },
      "300": { "value": "#81D866" },
      "400": { "value": "#54D12E" },
      "500": { "value": "#30CC00" },
      "600": { "value": "#3AAA17" },
      "700": { "value": "#369E17" },
      "800": { "value": "#328D17" },
      "approve": { "value": "#2E9A1D", "description": "Approve button background." }
    },
    "warning": {
      "type": "color",
      "description": "Amber / brown (status 4) palette.",
      "100": { "value": "#FFF5D3" },
      "200": { "value": "#FFEEB4" },
      "300": { "value": "#FBE393" },
      "400": { "value": "#FFDA5E" },
      "500": { "value": "#B99100" },
      "600": { "value": "#AA8708" },
      "700": { "value": "#A88400" },
      "800": { "value": "#957A18" }
    },
    "neutral": {
      "type": "color",
      "description": "Dark grays ('Black' palette).",
      "100": { "value": "#B2B2B2" },
      "200": { "value": "#A0A0A0" },
      "300": { "value": "#898989" },
      "400": { "value": "#827F7F" },
      "500": { "value": "#777777" },
      "600": { "value": "#444444" },
      "700": { "value": "#373737" },
      "800": { "value": "#26272C" }
    },
    "neutral-light": {
      "type": "color",
      "description": "Light grays ('Neutral' palette).",
      "100": { "value": "#DCDCDC" },
      "200": { "value": "#D0D0D0" },
      "300": { "value": "#D1D1D1" },
      "400": { "value": "#DBDBDB" },
      "500": { "value": "#DDDDDD" },
      "600": { "value": "#AFAFAF" },
      "700": { "value": "#8E8E8E" },
      "800": { "value": "#8B8B8B" }
    },
    "foundation": {
      "type": "color",
      "description": "Base near-black / near-white.",
      "ink": { "value": "#292D32", "description": "Near-black ink. Icon color, dark text." },
      "off-white": { "value": "#FDFDFD", "description": "Off-white used for text on primary buttons." }
    },
    "semantic": {
      "type": "color",
      "description": "Semantic roles derived from usage.",
      "background": { "value": "#FFFFFF" },
      "background-alt": { "value": "#F9FAFB", "description": "Input field background." },
      "background-muted": { "value": "#F2F2F2", "description": "Social/ghost button background." },
      "surface": { "value": "#FFFFFF" },
      "surface-subtle": { "value": "#FDFDFD" },
      "text-primary": { "value": "#101828", "description": "Primary text / headings." },
      "text-heading": { "value": "#1C1F29", "description": "Secondary headings." },
      "text-body": { "value": "#26272C" },
      "text-muted": { "value": "#6B7280", "description": "Secondary/muted text." },
      "text-muted-2": { "value": "#717182", "description": "Muted text on light screens (auth screens)." },
      "text-placeholder": { "value": "#666666" },
      "text-on-primary": { "value": "#FFFFFF", "description": "Text/icon color on filled primary buttons." },
      "text-on-primary-alt": { "value": "#FDFDFD" },
      "text-inverse": { "value": "#FDFDFD", "description": "Text on gradient/dark cards." },
      "text-link": { "value": "#009966" },
      "text-disabled": { "value": "#9CA3AF" },
      "text-note": { "value": "#838383" },
      "border-default": { "value": "#D7DAE6", "description": "Card border." },
      "border-card": { "value": "#EAECF0", "description": "Card/section border (forms)." },
      "border-input": { "value": "#A3A3A3", "description": "Input border." },
      "divider": { "value": "#E0E0E0" },
      "header-border": { "value": "#E4E5E9" },
      "chip-border": { "value": "#D0DCF2", "description": "Segmented control / chip border." },
      "nav-inactive": { "value": "#A29EB6", "description": "Inactive bottom-nav label/icon." },
      "scrim": { "value": "#000000", "description": "Modal overlay, 40-60% opacity." },
      "highlight": { "value": "#00C896" }
    }
  },
  "gradient": {
    "type": "gradient",
    "hero-auth": { "value": ["#E6FFE2", "#00E19D"], "description": "Splash, login, role-selection and onboarding backgrounds. 45°." },
    "wallet": { "value": ["#009362", "#40D2A1"], "description": "Wallet balance card, AI assistant card." },
    "logo": { "value": ["#00D18C", "#009966"], "description": "Field Techy logo mark and app icon." },
    "benefits": { "value": ["#ECFDF5", "#D0FAE5"], "description": "Soft informational card (Top-up Benefits)." },
    "chatbot": { "value": ["#FFFFFF", "#EDFFEB"], "description": "Chatbot screen background." }
  },
  "font": {
    "type": "fontFamily",
    "primary": { "value": "Poppins", "description": "Primary UI font. Weights: 400, 500, 600, 700, 900." },
    "secondary": { "value": "Inter", "description": "Chat, calendar, tables, compact labels. Weights: 400-700." },
    "display": { "value": "Plus Jakarta Sans", "description": "Occasional bold display labels (800)." },
    "numeric": { "value": "Rubik", "description": "Large money figures on gradient wallet cards (SemiBold)." },
    "fallback": { "value": "Segoe UI", "description": "Current Figma fallback. Replace usages with Poppins during build." }
  },
  "fontSize": {
    "type": "fontSizes",
    "micro": { "value": "10px" }, "xs": { "value": "11px" }, "sm": { "value": "12px" },
    "md": { "value": "13px" }, "base": { "value": "14px" }, "lg": { "value": "15px" },
    "xl": { "value": "16px" }, "2xl": { "value": "18px" }, "3xl": { "value": "20px" },
    "4xl": { "value": "22px" }, "5xl": { "value": "24px" }, "6xl": { "value": "28px" }, "8xl": { "value": "32px" }
  },
  "lineHeight": {
    "type": "lineHeights",
    "tight": { "value": "16px" }, "snug": { "value": "20px" },
    "normal": { "value": "1.5", "description": "Default ratio across most Poppins text (size × 1.5)." },
    "loose": { "value": "42px" }
  },
  "typeRole": {
    "type": "typography",
    "display": { "value": { "fontFamily": "Poppins", "fontWeight": "700", "fontSize": "28px", "lineHeight": "42px" }, "description": "Splash/hero titles." },
    "display-alt": { "value": { "fontFamily": "Poppins", "fontWeight": "700", "fontSize": "28px", "lineHeight": "40px" } },
    "title-large": { "value": { "fontFamily": "Poppins", "fontWeight": "600", "fontSize": "22px", "lineHeight": "33px" }, "description": "Section heroes." },
    "title": { "value": { "fontFamily": "Poppins", "fontWeight": "600", "fontSize": "20px", "lineHeight": "30px" }, "description": "Screen titles." },
    "subtitle": { "value": { "fontFamily": "Poppins", "fontWeight": "600", "fontSize": "18px", "lineHeight": "27px" }, "description": "Card/section headers." },
    "section-title": { "value": { "fontFamily": "Poppins", "fontWeight": "600", "fontSize": "16px", "lineHeight": "24px" }, "description": "Screen headers, card titles, buttons." },
    "button": { "value": { "fontFamily": "Poppins", "fontWeight": "600", "fontSize": "15px", "lineHeight": "22.5px" }, "description": "Primary CTA label." },
    "body": { "value": { "fontFamily": "Poppins", "fontWeight": "400", "fontSize": "14px", "lineHeight": "21px" }, "description": "Default body text." },
    "body-strong": { "value": { "fontFamily": "Poppins", "fontWeight": "600", "fontSize": "14px", "lineHeight": "21px" } },
    "body-medium": { "value": { "fontFamily": "Poppins", "fontWeight": "500", "fontSize": "14px", "lineHeight": "21px" } },
    "input": { "value": { "fontFamily": "Poppins", "fontWeight": "400", "fontSize": "14px", "lineHeight": "20px" }, "description": "Input value / placeholder." },
    "label": { "value": { "fontFamily": "Poppins", "fontWeight": "400", "fontSize": "11px", "lineHeight": "16.5px" }, "description": "Field labels, descriptions." },
    "label-strong": { "value": { "fontFamily": "Poppins", "fontWeight": "600", "fontSize": "11px", "lineHeight": "16.5px" } },
    "meta": { "value": { "fontFamily": "Poppins", "fontWeight": "400", "fontSize": "12px", "lineHeight": "18px" }, "description": "Meta text, tags." },
    "meta-medium": { "value": { "fontFamily": "Poppins", "fontWeight": "500", "fontSize": "12px", "lineHeight": "18px" } },
    "meta-strong": { "value": { "fontFamily": "Poppins", "fontWeight": "600", "fontSize": "12px", "lineHeight": "18px" }, "description": "Chips, tags, card titles." },
    "micro": { "value": { "fontFamily": "Poppins", "fontWeight": "400", "fontSize": "10px", "lineHeight": "15px" } },
    "amount": { "value": { "fontFamily": "Poppins", "fontWeight": "700", "fontSize": "18px", "lineHeight": "27px" }, "description": "Wallet/amount figures on light background." },
    "amount-large": { "value": { "fontFamily": "Rubik", "fontWeight": "600", "fontSize": "30px", "lineHeight": "30px" }, "description": "Large wallet balance on gradient card." },
    "statusbar": { "value": { "fontFamily": "Poppins", "fontWeight": "900", "fontSize": "14px", "lineHeight": "16px" }, "description": "Status bar clock." }
  },
  "spacing": {
    "type": "spacing",
    "0": { "value": "0px" }, "2": { "value": "2px" }, "4": { "value": "4px" }, "6": { "value": "6px" },
    "8": { "value": "8px" }, "10": { "value": "10px" }, "12": { "value": "12px" }, "16": { "value": "16px" },
    "20": { "value": "20px" }, "24": { "value": "24px" }, "28": { "value": "28px" }, "32": { "value": "32px" },
    "40": { "value": "40px" }, "48": { "value": "48px" }, "64": { "value": "64px" }
  },
  "radius": {
    "type": "borderRadius",
    "sm": { "value": "6px", "description": "Approve/Reject buttons." },
    "md": { "value": "8px", "description": "Inputs, standard buttons, direction buttons." },
    "lg": { "value": "13px", "description": "Job cards." },
    "xl": { "value": "14px", "description": "Tracking card, benefits card." },
    "2xl": { "value": "16px", "description": "Cards, bottom nav, section cards." },
    "3xl": { "value": "18px", "description": "Request card." },
    "pill-chips": { "value": "27px", "description": "Segmented control / chips." },
    "banner": { "value": "32px" },
    "full": { "value": "50px", "description": "Primary CTA pills, avatars (circle)." }
  },
  "shadow": {
    "type": "boxShadow",
    "sm": { "value": { "x": "0px", "y": "1px", "blur": "25px", "spread": "0px", "color": "rgba(0,0,0,0.05)" }, "description": "Quick action card." },
    "md": { "value": { "x": "0px", "y": "4px", "blur": "16px", "spread": "0px", "color": "rgba(0,0,0,0.08)" }, "description": "Bottom navigation." },
    "lg": { "value": { "x": "0px", "y": "8px", "blur": "16px", "spread": "0px", "color": "rgba(0,111,255,0.08)" }, "description": "Tracking card elevation." }
  },
  "dimension": {
    "type": "dimension",
    "screen-mobile": { "value": "390px", "description": "Design canvas width for all mobile screens." },
    "statusbar-height": { "value": "44px" },
    "bottomnav-height": { "value": "70px" },
    "input-height": { "value": "45px" },
    "button-height-primary": { "value": "47px", "description": "Full-width primary CTA." },
    "button-height-medium": { "value": "48px" },
    "icon-size-sm": { "value": "16px" },
    "icon-size": { "value": "20px" },
    "icon-size-lg": { "value": "24px" },
    "avatar-size": { "value": "36px" },
    "touch-target-min": { "value": "44px" }
  }
}`;

  /* ---------------- Palette display data ---------------- */

  var PALETTES = [
    { name: 'Brand — Primary', note: 'Swatches 1–8 · green', colors: [
      { n: 'Main', hex: '#009966' }, { n: 'Hover', hex: '#00875A' },
      { n: 'Pressed', hex: '#007750' }, { n: 'Deep', hex: '#016946' },
      { n: 'Light', hex: '#57C8A1' }, { n: 'Lighter', hex: '#8CE7C8' },
      { n: 'Lightest', hex: '#BEF6E3' }, { n: 'Tint', hex: '#CDF0E4' },
      { n: 'CTA', hex: '#00C896' } ] },
    { name: 'Info — Blue', note: 'Information / links', colors: [
      { n: '100', hex: '#D9F0FF' }, { n: '200', hex: '#B6E1FF' },
      { n: '300', hex: '#86CDFF' }, { n: '400', hex: '#3D94FF' },
      { n: '500', hex: '#1478F3' }, { n: '600', hex: '#046FF2' },
      { n: '700', hex: '#0063DC' }, { n: '800', hex: '#0257BE' },
      { n: 'Chip text', hex: '#2563EB' }, { n: 'Job type', hex: '#004A99' },
      { n: 'Action', hex: '#4794E7' } ] },
    { name: 'Error — Red', note: 'Destructive / errors', colors: [
      { n: '100', hex: '#FFE5E0' }, { n: '200', hex: '#EC8686' },
      { n: '300', hex: '#ED7676' }, { n: '400', hex: '#ED6464' },
      { n: '500', hex: '#EF4444' }, { n: '600', hex: '#EA3A3A' },
      { n: '700', hex: '#E42D2D' }, { n: '800', hex: '#DA2316' },
      { n: 'Reject', hex: '#D95741' }, { n: 'Required', hex: '#D50A0A' } ] },
    { name: 'Success — Green', note: 'Approve / success', colors: [
      { n: '100', hex: '#B6E0AA' }, { n: '200', hex: '#95DB80' },
      { n: '300', hex: '#81D866' }, { n: '400', hex: '#54D12E' },
      { n: '500', hex: '#30CC00' }, { n: '600', hex: '#3AAA17' },
      { n: '700', hex: '#369E17' }, { n: '800', hex: '#328D17' },
      { n: 'Approve', hex: '#2E9A1D' } ] },
    { name: 'Warning — Amber', note: 'Status 4 / amber', colors: [
      { n: '100', hex: '#FFF5D3' }, { n: '200', hex: '#FFEEB4' },
      { n: '300', hex: '#FBE393' }, { n: '400', hex: '#FFDA5E' },
      { n: '500', hex: '#B99100' }, { n: '600', hex: '#AA8708' },
      { n: '700', hex: '#A88400' }, { n: '800', hex: '#957A18' } ] },
    { name: 'Neutral — Dark', note: "'Black' palette", colors: [
      { n: '100', hex: '#B2B2B2' }, { n: '200', hex: '#A0A0A0' },
      { n: '300', hex: '#898989' }, { n: '400', hex: '#827F7F' },
      { n: '500', hex: '#777777' }, { n: '600', hex: '#444444' },
      { n: '700', hex: '#373737' }, { n: '800', hex: '#26272C' } ] },
    { name: 'Neutral — Light', note: "'Neutral' palette", colors: [
      { n: '100', hex: '#DCDCDC' }, { n: '200', hex: '#D0D0D0' },
      { n: '300', hex: '#D1D1D1' }, { n: '400', hex: '#DBDBDB' },
      { n: '500', hex: '#DDDDDD' }, { n: '600', hex: '#AFAFAF' },
      { n: '700', hex: '#8E8E8E' }, { n: '800', hex: '#8B8B8B' } ] },
    { name: 'Foundation', note: 'Ink & off-white', colors: [
      { n: 'Ink', hex: '#292D32' }, { n: 'Off-white', hex: '#FDFDFD' } ] }
  ];

  var SEMANTIC = [
    ['Background', 'App screens', '#FFFFFF'],
    ['Background alt', 'Input fields', '#F9FAFB'],
    ['Background muted', 'Social/ghost buttons', '#F2F2F2'],
    ['Surface', 'Cards', '#FFFFFF'],
    ['Text primary', 'Headings / body', '#101828'],
    ['Text heading', 'Secondary headings', '#1C1F29'],
    ['Text body', 'Body copy', '#26272C'],
    ['Text muted', 'Secondary text', '#6B7280'],
    ['Text muted 2', 'Auth screens', '#717182'],
    ['Text placeholder', 'Input placeholders', '#666666'],
    ['Text on primary', 'On filled buttons', '#FFFFFF'],
    ['Text inverse', 'On gradient/dark cards', '#FDFDFD'],
    ['Text link', 'Links', '#009966'],
    ['Text disabled', 'Disabled states', '#9CA3AF'],
    ['Border default', 'Card border', '#D7DAE6'],
    ['Border card', 'Form sections', '#EAECF0'],
    ['Border input', 'Input borders', '#A3A3A3'],
    ['Divider', 'Dividers', '#E0E0E0'],
    ['Header border', 'Top bar', '#E4E5E9'],
    ['Chip border', 'Segmented controls', '#D0DCF2'],
    ['Nav inactive', 'Bottom-nav labels', '#A29EB6'],
    ['Scrim', 'Modal overlay (40–60%)', '#000000'],
    ['Highlight', 'Secondary CTA', '#00C896']
  ];

  var GRADIENTS = [
    { name: 'Hero / Auth', css: 'linear-gradient(135deg, #E6FFE2 0%, #00E19D 100%)', from: '#E6FFE2', to: '#00E19D', note: 'Splash, login, role selection, onboarding · 45°' },
    { name: 'Wallet', css: 'linear-gradient(135deg, #009362 0%, #40D2A1 100%)', from: '#009362', to: '#40D2A1', note: 'Wallet balance + AI assistant cards' },
    { name: 'Logo', css: 'linear-gradient(135deg, #00D18C 0%, #009966 100%)', from: '#00D18C', to: '#009966', note: 'Logo mark & app icon' },
    { name: 'Benefits', css: 'linear-gradient(135deg, #ECFDF5 0%, #D0FAE5 100%)', from: '#ECFDF5', to: '#D0FAE5', note: 'Soft info card · stroke #A4F4CF' },
    { name: 'Chatbot', css: 'linear-gradient(180deg, #FFFFFF 0%, #EDFFEB 100%)', from: '#FFFFFF', to: '#EDFFEB', note: 'Chatbot screen background' }
  ];

  var TYPE_SCALE = [
    { name: 'Display', spec: 'Poppins · 700 · 28/42', desc: 'Splash / hero titles', css: { weight: 700, size: 28, lh: 42 } },
    { name: 'Title large', spec: 'Poppins · 600 · 22/33', desc: 'Section heroes', css: { weight: 600, size: 22, lh: 33 } },
    { name: 'Title', spec: 'Poppins · 600 · 20/30', desc: 'Screen titles', css: { weight: 600, size: 20, lh: 30 } },
    { name: 'Subtitle', spec: 'Poppins · 600 · 18/27', desc: 'Card / section headers', css: { weight: 600, size: 18, lh: 27 } },
    { name: 'Section title', spec: 'Poppins · 600 · 16/24', desc: 'Screen headers, card titles', css: { weight: 600, size: 16, lh: 24 } },
    { name: 'Button', spec: 'Poppins · 600 · 15/22.5', desc: 'Primary CTA label', css: { weight: 600, size: 15, lh: 22.5 } },
    { name: 'Body', spec: 'Poppins · 400 · 14/21', desc: 'Default body text', css: { weight: 400, size: 14, lh: 21 } },
    { name: 'Body strong', spec: 'Poppins · 600 · 14/21', desc: 'Emphasized body / list values', css: { weight: 600, size: 14, lh: 21 } },
    { name: 'Input', spec: 'Poppins · 400 · 14/20', desc: 'Input value / placeholder', css: { weight: 400, size: 14, lh: 20 } },
    { name: 'Meta', spec: 'Poppins · 400 · 12/18', desc: 'Meta text, tags', css: { weight: 400, size: 12, lh: 18 } },
    { name: 'Label', spec: 'Poppins · 400 · 11/16.5', desc: 'Field labels, descriptions', css: { weight: 400, size: 11, lh: 16.5 } },
    { name: 'Amount', spec: 'Poppins · 700 · 18/27', desc: 'Amount figures on light bg', css: { weight: 700, size: 18, lh: 27 } },
    { name: 'Amount large', spec: 'Rubik · 600 · 30/30', desc: 'Wallet balance on gradient', css: { family: 'Rubik', weight: 600, size: 30, lh: 30 } },
    { name: 'Status bar', spec: 'Poppins · 900 · 14/16', desc: 'Status-bar clock', css: { weight: 900, size: 14, lh: 16 } }
  ];

  var SPACING = [0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 64];

  var RADII = [
    { name: 'sm', value: '6px', desc: 'Approve / Reject buttons' },
    { name: 'md', value: '8px', desc: 'Inputs, standard buttons' },
    { name: 'lg', value: '13px', desc: 'Job cards' },
    { name: 'xl', value: '14px', desc: 'Tracking / benefits card' },
    { name: '2xl', value: '16px', desc: 'Cards, bottom nav' },
    { name: '3xl', value: '18px', desc: 'Request card' },
    { name: 'Pill chips', value: '27px', desc: 'Segmented control' },
    { name: 'Banner', value: '32px', desc: 'Hero banners' },
    { name: 'Full', value: '50px', desc: 'Primary CTA pills, avatars' }
  ];

  var SHADOWS = [
    { name: 'sm', css: '0 1px 25px rgba(0,0,0,.05)', desc: 'Quick action card' },
    { name: 'md', css: '0 4px 16px rgba(0,0,0,.08)', desc: 'Bottom navigation' },
    { name: 'lg', css: '0 8px 16px rgba(0,111,255,.08)', desc: 'Tracking card elevation' }
  ];

  var ICONS = [
    { name: 'Home', d: 'M3 10.5 12 3l9 7.5M5 9.5V21h5v-6h4v6h5V9.5' },
    { name: 'Briefcase', d: 'M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M4 7h16v13H4zM16 11h.01' },
    { name: 'Wallet', d: 'M20 6H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14v-5h-4a2 2 0 0 1 0-4h4V6zM20 6V4H5' },
    { name: 'Dispute', d: 'M12 3l7 3v5c0 4.6-2.9 7.7-7 9-4.1-1.3-7-4.4-7-9V6zM8.5 12l2.3 2.3 4.7-4.6' },
    { name: 'Bell', d: 'M6 9a6 6 0 1 1 12 0c0 4 1.5 6 1.5 6H4.5S6 13 6 9M10 19a2 2 0 0 0 4 0' },
    { name: 'User', d: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6s8 2 8 6' },
    { name: 'Search', d: 'M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM21 21l-4.5-4.5' },
    { name: 'Plus', d: 'M12 5v14M5 12h14' },
    { name: 'Check', d: 'M20 6 9 17l-5-5' },
    { name: 'Calendar', d: 'M4 5h16v16H4zM16 3v4M8 3v4M4 11h16' },
    { name: 'Map pin', d: 'M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' },
    { name: 'Star', d: 'M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9z' },
    { name: 'Clock', d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2' },
    { name: 'Camera', d: 'M4 7h3l2-3h6l2 3h3v13H4zM12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z' },
    { name: 'File', d: 'M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6' },
    { name: 'Note', d: 'M6 4h12v16H6zM9 9h6M9 13h6M9 17h3' }
  ];

  var PRINCIPLES = [
    ['Trust & Transparency', 'Show accurate job & payment status at every stage.'],
    ['Simplicity First', 'Break complex flows into small, guided steps.'],
    ['Role-Based Experiences', 'Client, Engineer & Admin see only what matters to them.'],
    ['Consistency', 'Reuse tokens, components and interaction patterns.'],
    ['Secure by Design', 'Payments on hold until approval; confirm destructive actions.'],
    ['Guided UX', 'Clear labels, inline validation, obvious next action.'],
    ['Efficiency', 'Quick filters, saved info, fast paths for frequent tasks.'],
    ['Clear Feedback', 'Loading, success, error & empty states everywhere.'],
    ['Accessible', 'WCAG AA, 44 pt touch targets, never color-only meaning.']
  ];

  var HERO_STRIP = [
    { file: 'dashboard-client', num: '03', name: 'Dashboard' },
    { file: 'job-dispatch-client', num: '11', name: 'Job detail' },
    { file: 'wallet-client', num: '16', name: 'Wallet' },
    { file: 'chatbot-client', num: '04', name: 'Chatbot' },
    { file: 'my-jobs-client', num: '10', name: 'My Jobs' },
    { file: 'dispute-client', num: '19', name: 'Dispute' }
  ];

  var SCREENS = [
    { group: 'Auth & onboarding', flow: 'AUTH', items: [
      { file: 'role-selection', name: 'Role selection' },
      { file: 'client-sign-in', name: 'Client Sign In' } ] },
    { group: 'Client — core', flow: 'CLIENT', items: [
      { file: 'dashboard-client', name: 'Dashboard' },
      { file: 'chatbot-client', name: 'Chatbot' },
      { file: 'post-job-dispatch', name: 'Post a job · Dispatch' },
      { file: 'post-job-full-time', name: 'Post a job · Full Time' },
      { file: 'payment-select-method', name: 'Select payment method' },
      { file: 'payment-card', name: 'Credit / Debit card' },
      { file: 'job-posted-success', name: 'Job posted successfully' },
      { file: 'my-jobs-client', name: 'My Jobs + Filters' } ] },
    { group: 'Client — job & wallet', flow: 'CLIENT', items: [
      { file: 'job-dispatch-client', name: 'Job · Dispatch' },
      { file: 'job-engineer-timeline', name: 'Engineer timeline' },
      { file: 'job-full-time-client', name: 'Job · Full Time' },
      { file: 'chat-engineer-client', name: 'Chat with Engineer' },
      { file: 'receipt-downloaded', name: 'Receipt downloaded' },
      { file: 'wallet-client', name: 'Wallet' },
      { file: 'wallet-top-up', name: 'Top up wallet' },
      { file: 'withdrawal-success', name: 'Withdrawal successful' },
      { file: 'dispute-client', name: 'Dispute' } ] },
    { group: 'Engineer', flow: 'ENGINEER', items: [
      { file: 'dashboard-engineer', name: 'Dashboard' },
      { file: 'chatbot-engineer', name: 'Chatbot' },
      { file: 'recommended-jobs', name: 'Recommended jobs' },
      { file: 'my-jobs-engineer', name: 'My Jobs + Filters' },
      { file: 'job-dispatch-engineer', name: 'Job view · Dispatch' },
      { file: 'job-fulltime-accept', name: 'Job view · Full Time' },
      { file: 'job-scheduled-accept', name: 'Job view · Scheduled' },
      { file: 'wallet-engineer', name: 'Wallet + bank account' },
      { file: 'job-completed', name: 'Job completed' },
      { file: 'profile-information', name: 'Profile information' },
      { file: 'settings', name: 'Settings' },
      { file: 'chat-client-engineer', name: 'Chat with Client' } ] }
  ];

  var CSS_VARS = `:root {
  /* Color */
  --color-brand-main: #009966;
  --color-brand-hover: #00875A;
  --color-brand-pressed: #007750;
  --color-surface: #FFFFFF;
  --color-surface-alt: #F9FAFB;
  --color-text-primary: #101828;
  --color-text-muted: #6B7280;
  --color-border-default: #D7DAE6;
  --color-border-input: #A3A3A3;
  --color-error: #EF4444;
  --color-info: #1478F3;

  /* Gradient */
  --gradient-hero: linear-gradient(135deg, #E6FFE2 0%, #00E19D 100%);
  --gradient-wallet: linear-gradient(135deg, #009362 0%, #40D2A1 100%);

  /* Type */
  --font-primary: "Poppins", "Segoe UI", sans-serif;
  --font-secondary: "Inter", sans-serif;
  --text-3xl: 28px/42px;
  --text-2xl: 22px/33px;
  --text-xl: 20px/30px;
  --text-base: 14px/21px;
  --text-sm: 12px/18px;
  --text-xs: 11px/16.5px;

  /* Shape & elevation */
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 999px;
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
  --space-4: 4px;
  --space-8: 8px;
  --space-16: 16px;
  --space-24: 24px;
}`;

  var QA = [
    'All screens built on the 390 pt canvas; gutters 16–24 pt.',
    'Only Poppins / Inter / Rubik / Plus Jakarta Sans — no Segoe UI.',
    'Colors come only from design-tokens.json (no hardcoded hex).',
    'Primary button = #009966 pill; pressed #007750; disabled gray.',
    'Inputs: 45 pt tall, radius 8, bg #F9FAFB, border #A3A3A3.',
    'Bottom nav active #009966 / inactive #A29EB6, height 70.',
    'Wallet card gradient #009362→#40D2A1 with white Rubik amount.',
    'Auth screens use the #E6FFE2→#00E19D gradient.',
    'Status chips: tinted bg + colored text (never color-only).',
    'Payment status shown at every step (Held / Pending Release / Released).',
    'Destructive actions require a confirmation dialog.',
    'Touch targets ≥ 44 pt; WCAG AA contrast on body text.',
    'Loading + empty + error states on all async screens.',
    'Reduced-motion respected; transitions 200–300 ms.'
  ];

  /* ---------------- Helpers ---------------- */

  function $(sel) { return document.querySelector(sel); }

  function el(tag, className, text) {
    var n = document.createElement(tag);
    if (className) n.className = className;
    if (text != null) n.textContent = text;
    return n;
  }

  var toastTimer = null;
  function showToast(msg) {
    var t = $('#toastCopy');
    t.textContent = msg || 'Copied!';
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 1600);
  }

  function copyText(text, msg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { showToast(msg); }, function () { fallbackCopy(text, msg); });
    } else {
      fallbackCopy(text, msg);
    }
  }

  function fallbackCopy(text, msg) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); showToast(msg); } catch (e) {}
    document.body.removeChild(ta);
  }

  function iconURI(d) {
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'><path d='" + d + "'/></svg>";
    return "url(\"data:image/svg+xml;utf8," + encodeURIComponent(svg) + "\")";
  }

  /* ---------------- Render: palettes ---------------- */

  function luminance(hex) {
    var h = hex.replace('#', '');
    if (h.length === 3) h = h.replace(/(.)/g, '$1$1');
    var r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }

  function renderPalettes() {
    var root = $('#palette-root');
    PALETTES.forEach(function (p) {
      var block = el('div', 'palette');
      var head = el('div', 'palette-head');
      head.appendChild(el('b', null, p.name));
      head.appendChild(el('span', 'mono', p.note));
      block.appendChild(head);

      var swatches = el('div', 'palette-swatches');
      p.colors.forEach(function (c) {
        var s = el('div', 'swatch');
        s.style.background = c.hex;
        s.style.color = c.hex;
        s.appendChild(el('span', 's-hex', c.hex.toUpperCase()));
        s.appendChild(el('span', 's-name', c.n));
        if (luminance(c.hex) > 0.62) s.classList.add('s-dark');
        s.title = c.n + '  ' + c.hex + '  (click to copy)';
        s.addEventListener('click', function () { copyText(c.hex, 'Copied ' + c.hex); });
        swatches.appendChild(s);
      });
      block.appendChild(swatches);
      root.appendChild(block);
    });
  }

  /* ---------------- Render: semantic ---------------- */

  function renderSemantic() {
    var root = $('#semantic-root');
    SEMANTIC.forEach(function (row) {
      var r = el('div', 'token-row');
      r.appendChild(el('div', 't-name', row[0]));
      r.appendChild(el('div', 't-use', row[1]));
      r.appendChild(el('div', 't-hex', row[2]));
      var sw = el('span', 'token-swatch');
      sw.style.background = row[2];
      r.appendChild(sw);
      r.addEventListener('click', function () { copyText(row[2], 'Copied ' + row[2]); });
      root.appendChild(r);
    });
  }

  /* ---------------- Render: gradients ---------------- */

  function renderGradients() {
    var root = $('#gradient-root');
    GRADIENTS.forEach(function (g) {
      var card = el('div', 'gradient-card');
      var bar = el('div', 'gradient-bar');
      bar.style.background = g.css;
      card.appendChild(bar);
      var body = el('div', 'g-body');
      body.appendChild(el('b', null, g.name));
      body.appendChild(el('span', 'muted', g.from + ' → ' + g.to + ' · ' + g.note));
      card.appendChild(body);
      card.addEventListener('click', function () { copyText(g.css, 'Copied gradient CSS'); });
      root.appendChild(card);
    });
  }

  /* ---------------- Render: typography ---------------- */

  function renderType() {
    var root = $('#type-root');
    TYPE_SCALE.forEach(function (t) {
      var row = el('div', 'type-row');
      var demo = el('span', 'type-demo', 'Field Techy — ' + t.name + ' ');
      demo.style.fontFamily = t.css.family || 'Poppins';
      demo.style.fontWeight = t.css.weight;
      demo.style.fontSize = t.css.size + 'px';
      demo.style.lineHeight = t.css.lh + 'px';
      row.appendChild(demo);
      var spec = el('span', 'type-spec');
      spec.appendChild(el('span', null, t.spec + ' · '));
      spec.appendChild(el('span', 't-desc', t.desc));
      row.appendChild(spec);
      row.addEventListener('click', function () {
        var c = t.css;
        var txt = 'font-family: ' + (c.family || 'Poppins') + '; font-weight: ' + c.weight + '; font-size: ' + c.size + 'px; line-height: ' + c.lh + 'px;';
        copyText(txt, 'Copied ' + t.name + ' style');
      });
      root.appendChild(row);
    });
  }

  /* ---------------- Render: spacing / radius / shadow ---------------- */

  function renderSpacing() {
    var root = $('#spacing-root');
    SPACING.forEach(function (v) {
      var row = el('div', 'spacing-row');
      row.appendChild(el('span', 'spacing-name', v === 0 ? 'none' : v + ''));
      row.appendChild(el('span', 'spacing-px', v + 'px'));
      var wrap = el('div');
      var bar = el('div', 'spacing-bar');
      bar.style.width = Math.max(3, v * 1.6) + 'px';
      wrap.appendChild(bar);
      row.appendChild(wrap);
      root.appendChild(row);
    });
  }

  function renderRadius() {
    var root = $('#radius-root');
    RADII.forEach(function (r) {
      var card = el('div', 'radius-card');
      var box = el('div', 'radius-box');
      box.style.borderRadius = r.value;
      card.appendChild(box);
      card.appendChild(el('b', null, r.name));
      card.appendChild(el('span', null, r.value));
      card.title = r.desc;
      card.addEventListener('click', function () { copyText(r.value, 'Copied ' + r.value); });
      root.appendChild(card);
    });
  }

  function renderShadows() {
    var root = $('#shadow-root');
    SHADOWS.forEach(function (s) {
      var card = el('div', 'shadow-card');
      var box = el('div', 'shadow-box', s.name);
      box.style.boxShadow = s.css;
      card.appendChild(box);
      card.appendChild(el('b', null, s.name));
      card.appendChild(el('span', 'muted', s.css + ' · ' + s.desc));
      card.addEventListener('click', function () { copyText('box-shadow: ' + s.css + ';', 'Copied ' + s.name); });
      root.appendChild(card);
    });
  }

  /* ---------------- Render: icons ---------------- */

  function renderIcons() {
    var root = $('#icons-root');
    ICONS.forEach(function (ic) {
      var card = el('div', 'icon-card');
      var icn = el('span', 'ic');
      icn.style.setProperty('--icon', iconURI(ic.d));
      card.appendChild(icn);
      card.appendChild(el('span', null, ic.name));
      card.addEventListener('click', function () { copyText(ic.name.toLowerCase().replace(/ /g, '-'), 'Copied ' + ic.name); });
      root.appendChild(card);
    });
  }

  /* ---------------- Render: screens ---------------- */

  function renderPrinciples() {
    var root = $('#principles-root');
    PRINCIPLES.forEach(function (p, i) {
      var li = el('li');
      li.appendChild(el('span', 'p-num', '0' + (i + 1)));
      li.appendChild(el('h4', null, p[0]));
      li.appendChild(el('p', null, p[1]));
      root.appendChild(li);
    });
  }

  function renderHeroStrip() {
    var root = $('#heroStrip');
    HERO_STRIP.forEach(function (s) {
      var item = el('a', 'hs-item');
      item.href = '#screens';
      var img = el('img');
      img.src = 'assets/screens/' + s.file + '.png';
      img.alt = s.name;
      img.loading = 'lazy';
      item.appendChild(img);
      var cap = el('span', 'hs-cap');
      cap.appendChild(el('span', null, '(' + s.num + ')'));
      cap.appendChild(el('span', null, s.name));
      item.appendChild(cap);
      root.appendChild(item);
    });
  }

  function renderScreens() {
    var root = $('#screens-root');
    var n = 0;
    SCREENS.forEach(function (g) {
      var group = el('div', 'screen-group');
      var h = el('h3');
      h.appendChild(el('span', 'mono', pad2(n + 1) + '–' + pad2(n + g.items.length)));
      h.appendChild(document.createTextNode(g.group));
      group.appendChild(h);

      var grid = el('div', 'screen-grid');
      g.items.forEach(function (item) {
        n += 1;
        var card = el('a', 'screen-card');
        card.href = '#screens';
        var imw = el('div', 'sc-img');
        var img = el('img');
        img.src = 'assets/screens/' + item.file + '.png';
        img.alt = item.name;
        img.loading = 'lazy';
        imw.appendChild(img);
        imw.appendChild(el('span', 'sc-num', pad2(n)));
        card.appendChild(imw);
        var name = el('div', 'sc-name');
        name.appendChild(el('span', null, item.name));
        name.appendChild(el('span', 'sc-flow', g.flow));
        card.appendChild(name);
        grid.appendChild(card);
      });
      group.appendChild(grid);
      root.appendChild(group);
    });
  }

  function pad2(x) { return (x < 10 ? '0' : '') + x; }

  /* ---------------- Render: token blocks & QA ---------------- */

  function renderTokens() {
    var pre = $('#tokens-root');
    pre.textContent = TOKENS_JSON;
    $('#copyTokens').addEventListener('click', function () { copyText(TOKENS_JSON, 'Copied design-tokens.json'); });
  }

  function renderCss() {
    var pre = $('#css-root');
    pre.textContent = CSS_VARS;
    var copy = function () { copyText(CSS_VARS, 'Copied CSS variables'); };
    $('#copyCss').addEventListener('click', copy);
    $('#copyAll').addEventListener('click', copy);
  }

  function renderQA() {
    var root = $('#qa-root');
    QA.forEach(function (q) { root.appendChild(el('li', null, q)); });
  }

  function renderAnimation() {
    var pre = $('#animation-root');
    if (!pre) return;
    var json = window.ANIMATION_JSON;
    if (!json) { pre.textContent = 'animation.json not found'; return; }
    pre.textContent = JSON.stringify(json, null, 2);
    $('#copyAnimation').addEventListener('click', function () { copyText(JSON.stringify(json, null, 2), 'Copied animation.json'); });
  }

  /* ---------------- Interactions ---------------- */

  function initNavToggle() {
    var nav = $('#mhNav');
    $('#mhToggle').addEventListener('click', function () { nav.classList.toggle('open'); });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.mh-nav a'));
    var map = {};
    links.forEach(function (l) { map[l.getAttribute('href').slice(1)] = l; });
    var sections = links.map(function (l) { return document.getElementById(l.getAttribute('href').slice(1)); }).filter(Boolean);

    function update() {
      var pos = window.scrollY + 120;
      var current = sections[0];
      sections.forEach(function (s) { if (s.offsetTop <= pos) current = s; });
      links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + current.id); });
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function initBottomNavDemo() {
    var items = document.querySelectorAll('#bottomNavDemo .nav-item');
    var icons = { Dashboard: 'M3 10.5 12 3l9 7.5M5 9.5V21h5v-6h4v6h5V9.5', Jobs: 'M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M4 7h16v13H4zM16 11h.01', Wallet: 'M20 6H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14v-5h-4a2 2 0 0 1 0-4h4V6zM20 6V4H5', Dispute: 'M12 3l7 3v5c0 4.6-2.9 7.7-7 9-4.1-1.3-7-4.4-7-9V6zM8.5 12l2.3 2.3 4.7-4.6' };
    items.forEach(function (item) {
      var icon = item.querySelector('.ni-icon');
      icon.style.setProperty('--icon', iconURI(icons[item.textContent.trim()] || icons.Dashboard));
      item.addEventListener('click', function () {
        items.forEach(function (i) { i.classList.remove('active'); i.querySelector('.ni-icon').style.setProperty('--icon', iconURI(icons[i.textContent.trim()] || icons.Dashboard)); });
        item.classList.add('active');
        icon.style.setProperty('--icon', iconURI(icons[item.textContent.trim()] || icons.Dashboard));
      });
    });
  }

  function initModal() {
    var modal = $('#modalDemo');
    var scrim = $('#scrim');
    function open() { modal.hidden = false; scrim.hidden = false; }
    function close() { modal.hidden = true; scrim.hidden = true; }
    $('#showModal').addEventListener('click', open);
    $('#closeModal').addEventListener('click', close);
    scrim.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ---------------- Splash / login animation ---------------- */

  var SPLASH_STEP = 2000;

  function initSplashAnim() {
    var stage = $('#saStage');
    if (!stage) return;
    var frames = Array.prototype.slice.call(stage.querySelectorAll('.sa-frame'));
    if (frames.length < 2) return;
    var counter = $('#saFrame');
    var progress = $('#saProgress');
    var idx = 0;
    var paused = false;
    var timer = null;

    function show(i) {
      frames.forEach(function (f, k) { f.classList.toggle('on', k === i); });
      if (counter) counter.textContent = pad2(i + 1) + ' / ' + pad2(frames.length);
      if (progress) progress.style.width = Math.round(((i + 1) / frames.length) * 100) + '%';
    }

    function tick() {
      if (paused) return;
      idx = (idx + 1) % frames.length;
      show(idx);
    }

    show(0);
    timer = setInterval(tick, SPLASH_STEP);
    stage.addEventListener('mouseenter', function () { paused = true; });
    stage.addEventListener('mouseleave', function () { paused = false; show(idx); });
  }

  /* ---------------- Boot ---------------- */

  document.addEventListener('DOMContentLoaded', function () {
    renderPrinciples();
    renderHeroStrip();
    renderPalettes();
    renderSemantic();
    renderGradients();
    renderType();
    renderSpacing();
    renderRadius();
    renderShadows();
    renderIcons();
    renderScreens();
    renderTokens();
    renderCss();
    renderQA();
    renderAnimation();
    initNavToggle();
    initScrollSpy();
    initBottomNavDemo();
    initModal();
    initSplashAnim();
  });
})();
