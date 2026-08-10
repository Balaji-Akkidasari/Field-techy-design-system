# Field Techy — Design System & Style Guide v2.0

**Handoff document for Product / App Developers**

| | |
|---|---|
| **Product** | Field Techy — field-service marketplace platform |
| **Platform** | Mobile (iOS + Android), Tablet, Web (Admin/Client) |
| **Figma file** | [Field Techy - Design-v2.0](https://www.figma.com/design/YT6JQ3g2DEVDF5Es5a0j3N/Field-Techy---Design-v2.0?node-id=1279-34079&t=hYKIolSEIIOIVt4K-1) |
| **Design canvas** | 390 × 844 pt (mobile) — all mobile frames are 390 pt wide |
| **Primary font** | Poppins |
| **Version** | 2.0 |
| **Author** | Design team |
| **Companion files** | [`design-tokens.json`](./design-tokens.json) — machine-readable tokens |

> This guide is the **single source of truth** for implementing the Field Techy UI. It documents colors, typography, spacing, components, patterns, states, and handoff conventions extracted from the Figma design file. If you find a discrepancy between this guide and the Figma file, **the Figma file wins** — update this guide.

---

## Table of contents

1. [Product context](#1-product-context)
2. [Design principles](#2-design-principles)
3. [Figma file map](#3-figma-file-map)
4. [Color system](#4-color-system)
5. [Typography](#5-typography)
6. [Spacing & layout](#6-spacing--layout)
7. [Corner radius](#7-corner-radius)
8. [Elevation & shadows](#8-elevation--shadows)
9. [Iconography](#9-iconography)
10. [Components](#10-components)
11. [Status system & patterns](#11-status-system--patterns)
12. [Screen inventory](#12-screen-inventory)
13. [States & motion](#13-states--motion)
14. [Responsive behavior](#14-responsive-behavior)
15. [Accessibility](#15-accessibility)
16. [Developer handoff](#16-developer-handoff)
17. [QA checklist](#17-qa-checklist)

---

## 1. Product context

**Field Techy** is a service-marketplace platform that connects individuals and organizations with verified engineers for on-site and remote technical services. It manages the complete job lifecycle: job creation → secure payment → engineer matching → service execution → sign-off → payment release → rating → dispute resolution.

**Three personas:**

- **Client** — posts jobs (Dispatch / Full Time / Scheduled), pays into a wallet, approves engineers, tracks progress, reviews sign-off, releases payment, rates, raises disputes.
- **Engineer** — browses/recommended jobs, applies, accepts, checks in at location, performs work, submits sign-off sheets & timesheets, receives payment, rates, raises disputes.
- **Administrator** — manages users, job categories, skills, rate cards, payments, and disputes (admin experience lives on the Web page).

**Monetization / trust model:** payment is required before a job is published; funds are **held** until the client approves completed work; engineer cannot be paid before client approval; if a dispute is raised, payment stays on hold until resolution.

---

## 2. Design principles

Source: Figma → *Field Techy — Design Documentation Hub → 05 Design Principles*.

1. **Trust & Transparency** — Show accurate job/payment status at every stage. Communicate payment states (`Held`, `Pending Release`, `Released`) and verified-engineer badges clearly.
2. **Simplicity First** — Break complex workflows into small steps (multi-step job creation wizard, guided payment, simple application review). Progressive disclosure for advanced options.
3. **Role-Based Experiences** — Client, Engineer, and Admin see only what is relevant to them.
4. **Consistency Across the Platform** — Reuse components, tokens, and interaction patterns everywhere.
5. **Secure by Design** — Protect payments until approval; require confirmation for destructive actions (logout, delete account, cancel job).
6. **Guided User Experience** — Clear labels, meaningful error messages, inline validation, highlight the next logical action.
7. **Efficiency & Productivity** — Quick filters, saved information, recent-activity shortcuts, bulk actions.
8. **Clear Feedback & System Status** — Loading indicators, success confirmations, informative empty states, notifications.
9. **Accessibility & Inclusivity** — WCAG contrast, keyboard navigation, ≥ 44 pt touch targets, never color-only meaning.

---

## 3. Figma file map

| Page | Contents |
|---|---|
| **Mobile high fidelity design** | All mobile screens for Client + Engineer (auth, dashboard, jobs, wallet, disputes, chat, settings). Starts at the link above. |
| **Web High fielity design** | Admin / web experience. |
| **Design system** | `Colors system`, icon library (vuesax linear + bold), component anatomy specs ("Spectral" frames), tokens. |
| **Field Techy — Design Documentation Hub** | Product overview, UX process, user flows, IA, design principles, patterns, feature/screen docs, responsive, accessibility, QA. |
| **Page 4** | Archive/scratch. |

**Key section names in *Mobile high fidelity design*:** `Client login`, `Dashboard - Client`, `Post a job`, `Payment`, `My Jobs - Client`, `Job - Dispatch (Client)`, `Job - Full Time (Client)`, `Job - Scheduled (Client)`, `Client Wallet`, `Engineer Wallet`, `Dispute`, `Engineer login`, `Dashboard - Engineer`, `My Jobs - Engineer`, `Recommended Jobs - Engineer`, `Engineer - Job View (Dispatch / Full time / Scheduled)`, `Engineer Settings/Profile`, `notification`, `chat/Settings/Profile`, `Role selection`.

---

## 4. Color system

All values below were extracted from Figma → *Design system → Colors system*. The file defines **8 ramps**. Use the **semantic tokens** when implementing; use ramps to derive variants.

### 4.1 Brand — Primary (green)

| Token | Hex | Usage |
|---|---|---|
| `brand/main` | `#009966` | **Primary brand.** Primary buttons, links, active nav item, active chip, `Forgot Password?`, amounts on light bg |
| `brand/hover` | `#00875A` | Hover state of primary |
| `brand/pressed` | `#007750` | Pressed/active state; "Add Balance" filled button |
| `brand/deep` | `#016946` | Darkest green — accents/text on light backgrounds |
| `brand/light` | `#57C8A1` | Light brand green |
| `brand/lighter` | `#8CE7C8` | Lighter tint |
| `brand/lightest` | `#BEF6E3` | Soft backgrounds |
| `brand/tint` | `#CDF0E4` | Chip/tag backgrounds |
| `brand/cta` | `#00C896` | Brighter green CTA text (`Post a Job`, `Create a Project`) |

### 4.2 Supporting palettes

**Blue / Information** — `#1478F3` (primary), `#046FF2`, `#0063DC`, `#0257BE`, `#3D94FF`, `#86CDFF`, `#B6E1FF`, `#D9F0FF`. Chip text `#2563EB`, "Full Time" type text `#004A99`, Check-in/location action buttons `#4794E7`.

**Red / Error** — `#EF4444` (error primary, e.g. Logout text), `#EA3A3A`, `#E42D2D`, `#DA2316`, `#ED6464`, `#ED7676`, `#EC8686`, `#FFE5E0` (error tint). Reject button `#D95741`. Required asterisk `#D50A0A`.

**Green / Success** — `#30CC00`, `#3AAA17`, `#369E17`, `#328D17`, `#54D12E`, `#81D866`, `#95DB80`, `#B6E0AA`. Approve button `#2E9A1D`.

**Amber / Brown (Status 4 / Warning)** — `#B99100`, `#AA8708`, `#A88400`, `#957A18`, `#FFDA5E`, `#FBE393`, `#FFEEB4`, `#FFF5D3`.

**Neutral (dark grays — "Black")** — `#26272C`, `#373737`, `#444444`, `#777777`, `#827F7F`, `#898989`, `#A0A0A0`, `#B2B2B2`.

**Neutral light ("Neutral")** — `#8B8B8B`, `#8E8E8E`, `#AFAFAF`, `#D0D0D0`, `#D1D1D1`, `#DBDBDB`, `#DCDCDC`, `#DDDDDD`.

**Foundation** — `#292D32` (near-black "ink", default icon color), `#FDFDFD` (off-white, text on primary buttons).

### 4.3 Semantic tokens (use these in code)

| Token | Hex | Used for |
|---|---|---|
| `semantic/background` | `#FFFFFF` | Screen background |
| `semantic/background-alt` | `#F9FAFB` | Input field background |
| `semantic/background-muted` | `#F2F2F2` | Social / ghost buttons |
| `semantic/text-primary` | `#101828` | Headings, primary text |
| `semantic/text-heading` | `#1C1F29` | Secondary headings, card titles |
| `semantic/text-body` | `#26272C` | Body copy |
| `semantic/text-muted` | `#6B7280` | Secondary text, nav labels (inactive) |
| `semantic/text-muted-2` | `#717182` | Muted text on light auth screens |
| `semantic/text-placeholder` | `#666666` | Input placeholders |
| `semantic/text-on-primary` | `#FFFFFF` | Text/icon on primary buttons |
| `semantic/text-inverse` | `#FDFDFD` | Text on gradient/dark cards |
| `semantic/text-link` | `#009966` | Links |
| `semantic/text-disabled` | `#9CA3AF` | Disabled text |
| `semantic/text-note` | `#838383` | Helper text |
| `semantic/border-default` | `#D7DAE6` | Card border |
| `semantic/border-card` | `#EAECF0` | Form/section card border |
| `semantic/border-input` | `#A3A3A3` | Input border |
| `semantic/divider` | `#E0E0E0` | Dividers |
| `semantic/header-border` | `#E4E5E9` | Header bottom border |
| `semantic/chip-border` | `#D0DCF2` | Segmented control / chip border |
| `semantic/nav-inactive` | `#A29EB6` | Inactive bottom-nav |
| `semantic/scrim` | `#000000` | Modal overlay (40–60% opacity) |

### 4.4 Gradients

| Token | Stops | Used on |
|---|---|---|
| `gradient/hero-auth` | `#E6FFE2 → #00E19D` | Splash, login/OTP/forgot-password, role selection, onboarding, "Join the Network" banner |
| `gradient/wallet` | `#009362 → #40D2A1` | Wallet balance card, AI-assistant card |
| `gradient/logo` | `#00D18C → #009966` | Field Techy logo mark / app icon |
| `gradient/benefits` | `#ECFDF5 → #D0FAE5` | Informational cards (Top-up Benefits) — stroke `#A4F4CF` |
| `gradient/chatbot` | `#FFFFFF → #EDFFEB` | Chatbot screens |

### 4.5 Text-on-color rules

- On **primary green** (`#009966`) and **wallet gradient**: white `#FFFFFF` / `#FDFDFD`.
- On **light tints** (`#CDF0E4`, `#BEF6E3`, `#ECFDF5→#D0FAE5`): dark green text `#004F3B` or `#006045`.
- On **white**: `#101828` (headings), `#6B7280` (muted), `#009966` (links/amounts).
- Amounts are green `#009966` on light backgrounds; white on gradient wallet cards.

---

## 5. Typography

### 5.1 Font families

| Family | Role | Weights used |
|---|---|---|
| **Poppins** | Primary UI (default everywhere) | 400 Regular, 500 Medium, 600 SemiBold, 700 Bold, 900 Black |
| **Inter** | Chat UI, calendar, tables, compact labels | 400, 500, 600, 700 |
| **Plus Jakarta Sans** | Occasional display labels | 800 ExtraBold |
| **Rubik** | Large money figures on gradient wallet cards | 600 SemiBold |

> ⚠️ Some frames use **Segoe UI** (a Figma fallback for text like `Email ID *` labels and the status-bar clock). **Replace all Segoe UI with Poppins during build** unless the frame is intentionally web.

### 5.2 Type scale

The standard line-height ratio is **1.5×** the font size (e.g., 14/21, 16/24, 18/27, 20/30, 22/33, 24/36, 28/42).

| Role | Family / Weight | Size | Line height | Usage |
|---|---|---|---|---|
| Display | Poppins Bold 700 | 28 | 42 | Splash/hero titles (`Field Tech On-Demand`) |
| Display alt | Poppins Bold 700 | 28 | 40 | `Smart Field Service. Faster Dispatch.` |
| Title large | Poppins SemiBold 600 | 22 | 33 | Section heroes (`Choose Your Account Type`) |
| Title | Poppins SemiBold 600 | 20 | 30 | Screen titles (`Join the Network`) |
| Subtitle | Poppins SemiBold 600 | 18 | 27 | Card/section headers (`Payment`, amounts) |
| Section title | Poppins SemiBold 600 | 16 | 24 | Screen headers, card titles, button labels (`Select payment method`) |
| Button | Poppins SemiBold 600 | 15 | 22.5 | Primary CTA label (`Sign in`) |
| Body | Poppins Regular 400 | 14 | 21 | Default body copy |
| Body strong | Poppins SemiBold 600 | 14 | 21 | List values, amounts |
| Input | Poppins Regular 400 | 14 | 20 | Input value & placeholder (`Enter here`) |
| Label | Poppins Regular 400 | 11 | 16.5 | Field labels, descriptions, table headers |
| Meta | Poppins Regular 400 | 12 | 18 | Meta text, tag content |
| Meta medium | Poppins Medium 500 | 12 | 18 | Job card titles, secondary values |
| Meta strong | Poppins SemiBold 600 | 12 | 18 | Chips, tags, card titles, nav labels |
| Micro | Poppins Regular 400 | 10 | 15 | Timestamps, tiny captions |
| Amount | Poppins Bold 700 | 18 | 27 | Wallet/amount figures on light bg |
| Amount large | Rubik SemiBold 600 | 30 | 30 | Large wallet balance on gradient card |
| Status bar | Poppins Black 900 | 14 | 16 | Clock `9:41` |

### 5.3 Common text colors

Headings `#101828` / `#1C1F29` · muted `#6B7280` / `#717182` · placeholders `#666666` · links/active `#009966` · on-primary `#FFFFFF` · inverse `#FDFDFD` · error `#EF4444` · success/positive values `#009966` · info `#2563EB` / `#1478F3`.

---

## 6. Spacing & layout

- **Base unit: 4 pt.** Observed scale: `4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 48, 64`.
- **Screen width:** 390 pt. Standard horizontal gutter **16–24 pt** (headers 16, cards 16, banners 24, full-width buttons edge-to-edge minus 2×16/28).
- **Component gaps:** card internal padding 16–24; vertical rhythm between stacked cards 12–16.
- **Bottom nav:** height 70 pt, horizontal padding 19, icon 24 pt, label gap 4.
- **Input height:** 45 pt; **standard button height:** 47–48 pt; **min touch target:** 44 pt.

---

## 7. Corner radius

| Token | Value | Used on |
|---|---|---|
| `sm` | 6 | Approve/Reject buttons |
| `md` | 8 | Inputs, standard buttons, card CTAs, direction buttons |
| `lg` | 13 | Job cards |
| `xl` | 14 | Tracking card, benefits card |
| `2xl` | 16 | Cards, bottom nav, form section cards |
| `3xl` | 18 | Request card |
| `27` | 27 | Chips / segmented control |
| `32` | 32 | Banner, spec surfaces |
| `full` | 50 / 999 | Primary CTA pills, avatars (circles) |

---

## 8. Elevation & shadows

| Token | Value | Used on |
|---|---|---|
| `shadow/sm` | `0 1 25 rgba(0,0,0,0.05)` | Quick-actions card |
| `shadow/md` | `0 4 16 rgba(0,0,0,0.08)` (+ optional `4 0 16`) | Bottom navigation |
| `shadow/lg` | `0 8 16 rgba(0,111,255,0.08)` | Tracking card |

Cards default to a **1 pt stroke** (`#D7DAE6` or `#EAECF0`) plus a soft shadow. Modals use a `rgba(0,0,0,0.4–0.6)` scrim.

---

## 9. Iconography

- **Icon set: Vuesax / Linear** (`vuesax/linear/*`). Both **Linear** and **Bold** sets are imported in *Design system → Icons library* (66 groups, e.g. Money, Arrow, Users, Location, Delivery, Search, Settings, Notifications, Call, Time, Security, Building, Business, Grid, Content, Programming, Essential, Emails, Files, Weather).
- **Sizes:** 16 (inline with small buttons), 20 (CTA trailing arrow), 24 (bottom nav, list icons).
- **Color:** inherit text color — `#292D32` default ink, `#009966` active, `#A29EB6` inactive, `#FFFFFF` on primary buttons.
- Third-party marks: Google logo in social login buttons.

---

## 10. Components

### 10.1 Buttons

**Primary (default)** — Figma: `Frame 13` / `Frame 14`
- Fill `brand/main` `#009966`; radius **50 (pill)**; height **47 pt** (full-width) with trailing arrow icon 20 pt.
- Label Poppins **SemiBold 15 / 22.5**, color `#FFFFFF`; icon gap 5 pt; horizontal padding 20.
- States: hover `#00875A`, pressed `#007750`, disabled gray `#E5E7EB` bg + `#9CA3AF` text (see tokens).

**Secondary filled (dark green)** — `Frame 457` "Add Balance"
- Fill `brand/pressed` `#007750`, radius 33, height 48, stroke `#30DDA4`, label Poppins Medium 16 `#FDFDFD`.

**Standard / medium (radius 8)** — e.g. Check-in (`#4794E7`, Poppins SemiBold 16 white, icon 16), "Directions" outline (`radius 8`, stroke `#009966`).

**Approve / Reject pair** — `Component 27` & `Approve/Reject 2`
- Approve: fill `#2E9A1D`, radius 6, 148×40. Reject: fill `#D95741`, radius 6, 148×40. Both white 600-weight labels.

**Social / ghost** — `Frame 40`
- Fill `#F2F2F2`, radius 8, 81×48, 2 pt transparent stroke, 20 pt icon. Label Poppins Medium 12 `#009966`.

**Segmented control (job type)** — active segment fill `#009966` + white label; inactive fill `#FFFFFF` + stroke `#D0DCF2`; radius 27; gap 8.

### 10.2 Text inputs

- Container: radius **8**, height **45**, fill `#F9FAFB`, border `#A3A3A3`, horizontal padding 17.
- Label above field: Poppins **600 / 12**, `#000000` (`Email ID *` — required `*` in `#D50A0A`), gap 5–6.
- Placeholder: Poppins **400 / 14**, `#666666`.
- Variants in file: password fields with eye toggle, OTP digit boxes, textarea (`Enter Remarks`), file-upload chips, date fields (`MM/DD/YYYY`), card-number/payment fields.

### 10.3 Cards

| Card | Radius | Border | Shadow | Padding |
|---|---|---|---|---|
| Job card | 13 | `#D7DAE6` | soft | 16–24 |
| Tracking card | 14 | `#D7DAE6` | `0 8 16 rgba(0,111,255,.08)` | 24 |
| Request card | 18 | `#D7DAE6` | — | 16, dividers `#E0E0E0` |
| Form/section card | 16 | `#EAECF0` | — | 16, gap 14 |
| Quick actions card | 8 | — | `0 1 25 rgba(0,0,0,.05)` | 16 |

### 10.4 Wallet balance card

- Gradient `#009362 → #40D2A1`, radius **16**, padding 28.
- "Your Balance" micro label white 400/12; balance figure **Rubik SemiBold 30** white; "Withdraw" / "Top Up" white pill CTAs; avatar/row of recent activity.

### 10.5 AI assistant card

- Same gradient `#009362→#40D2A1`, radius 16, padding 16; title Poppins 500/12 `#E6FFF2`; CTA white `radius 8`, gap 6.

### 10.6 Gradient hero banner ("Join the Network")

- Gradient `#E6FFE2 → #00E19D`, radius 32 (section), padding 24/16/20; title Poppins **Bold 20** `#101828`; subtitle Poppins **Medium 12** `#009966`; 120 pt circular illustration (login animation).

### 10.7 Bottom navigation

- Container: height 70, radius 16, fill `#FFFFFF`, shadow `0 4 16 rgba(0,0,0,.08)`, horizontal padding 19.
- Items: icon 24 pt + label (Poppins/Segoe 600/12) stacked, gap 4.
- **Active:** icon + label `#009966`. **Inactive:** `#A29EB6`.
- Client nav: **Dashboard · Jobs · Wallet · Dispute**. Engineer nav: **Dashboard · Jobs · Wallet · Profile**.

### 10.8 Headers & top bars

- App header: 64 pt, fill `#FFFFFF`, bottom border `#E4E5E9`, horizontal padding 16; left = avatar + "Field Techy" (Poppins SemiBold 15/16), right = bell with unread dot (`Group 330`), hamburger.
- Section headers ("Back-Button" pill `#009966` + title row) used in wallet/transaction screens.

### 10.9 Modals, alerts & bottom sheets

- Log-out / Delete-account / Reject-engineer popups: scrim `rgba(0,0,0,0.4–0.6)`, centered dialog (radius ~16, padding 16–24), title Poppins 400/14 `#101828` ("Are you sure you want to Log out?"), destructive action in `#EF4444` or `#D95741`.
- "Job posted successfully!" success screens: centered green check in gradient circle + Poppins SemiBold titles.
- Chat composer: rounded input with paperclip/camera/send; "Type your message…" placeholder (Inter 400/13 `#94A3B8`).

### 10.10 Chat

- Chat screen bg gradient `#FFFFFF → #EDFFEB`; message bubbles white (client) / `#009966` (engineer or vice-versa per direction); composer pinned bottom; Inter type for message text.

### 10.11 Progress & dispatch timeline

- Dispatch job view uses a vertical **timeline** (task → location → sign-off → rating → payment) with numbered progress dots; active step green, completed steps filled, upcoming gray.

---

## 11. Status system & patterns

**Job lifecycle:** `Job posted → Payment held → Engineers apply → Client approves engineer → Engineer accepts → Engineer check-in/arrived → Work in progress → Sign-off submitted → Awaiting approval → Client approved → Payment released → Rating → Job completed`.

**Payment states:** `Held`, `Pending Release`, `Released`. Also `On hold` during dispute.

**Status chips / tags** (tint background + colored text):
- Active/positive: green `#009966` (e.g. "Waiting for Assign").
- Info/category: blue `#2563EB` (e.g. "EUC"); "Full Time" `#004A99`.
- Warning/pending: amber `#B99100` family.
- Error/rejected: red `#EF4444` / `#D95741`.
- Neutral: gray ramp + `#6B7280` text.

**Empty/loading/error:** follow principle 2.8 — informative empty states, loading indicators, clear inline errors.

---

## 12. Screen inventory

> Full canvas: *Mobile high fidelity design*. All frames 390 pt wide. "tablet" suffix = 768+ pt layouts in the same file.

**Shared / auth:** Role selection (Client/Engineer) · Splash & login animation · Client & Engineer Sign In (+ OTP, Verify account) · Forgot / Reset password · Create Client/Engineer Account (multi-step 1/3–3/3).

**Client flows:** Dashboard · Chatbot · Post a Job — Dispatch / Full Time / Scheduled · Payment (Select method, Credit/Debit card) · Job posted successfully · My Jobs + Filters · Job — Dispatch/Full Time/Scheduled (detail, engineer timeline, chat with engineer, reject-engineer popup, engineer-rejected popup) · Generate invoice · Receipt downloaded · Wallet (balance, Top up, Withdraw, Withdrawal successful, bank details) · Dispute (list, raise, detail/evidence/communication) · Notifications · Settings · Delete account.

**Engineer flows:** Dashboard · Chatbot · Recommended Jobs + Wishlist · My Jobs + Filters · Job View — Dispatch (check-in, location, sign-off, rating, payment, timeline) / Full Time (accept, timesheet, add task, deployment popup) / Scheduled · Job is Completed · Generate invoice · Wallet + Bank account + Adding bank · Dispute · Profile (information, edit, engineer↔client) · Notifications · Settings · Chat with Client.

---

## 13. States & motion

Reference: *Login animation v1.0 mobile* component set (7 states) and *Mobile animation*.

- **Splash / login:** ambient floating illustration; gradient background. No heavy motion — subtle float.
- **Transitions:** 200–300 ms ease; screens are flat (no strong parallax).
- **Progress feedback:** confirmations (job posted, withdrawal successful), timeline step updates, payment-processing indicator.
- **Bottom sheets / popups:** quick fade + slight scale-up of dialog over scrim.
- Respect **reduced-motion** — keep essential cross-fades only.

---

## 14. Responsive behavior

- **Mobile (base):** 390 pt canvas. All components above.
- **Tablet:** sibling screens (`-tablet` suffix) — same tokens, wider gutters (24–28), cards up to 620 pt, BalanceCard 756×176.
- **Web/Admin:** separate *Web High fielity design* page; same color/type tokens, desktop navigation.
- Breakpoints to implement: **mobile ≤ 767 · tablet 768–1023 · desktop ≥ 1024**.

---

## 15. Accessibility

- Maintain WCAG AA contrast. Verify: `#009966` on white only for **large/bold** text (e.g., 18/27 bold) or as a UI accent — for small body text prefer `#00875A`/`#016946` (e.g., "Top-up Benefits" uses `#004F3B` on light green).
- Minimum touch target **44 pt**.
- Never rely on color alone — pair chips with icon/text labels.
- Label every input (labels above fields in the design).
- Screen-reader labels for icon-only buttons (bell, hamburger, back).
- Focus/visible states for keyboard navigation on web/tablet.

---

## 16. Developer handoff

### 16.1 Token source of truth

Import **`design-tokens.json`** (in this folder, W3C/DTCG format) into Tokens Studio or your styling pipeline. It contains: `color` (ramps + semantic + gradients), `font`, `fontSize`, `lineHeight`, `typeRole`, `spacing`, `radius`, `shadow`, `dimension`.

### 16.2 CSS variable example

```css
:root {
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
}
```

### 16.3 Implementation notes

- **Fonts:** load Poppins (400/500/600/700/900), Inter (400/500/600/700), Rubik (600), Plus Jakarta Sans (800). Replace all `Segoe UI` text with Poppins.
- **Buttons:** implement one `<Button>` primitive with `variant` = `primary | dark | outline | ghost | approve | reject | social`, `size` = `lg (47pt) | md (48pt) | sm`, `fullWidth`, `icon` (trailing 20 pt).
- **Bottom nav:** 4 slots, `active` prop switches color to `#009966`.
- **Cards:** base Card = `bg white · radius 16 · border #D7DAE6 · pad 16–24`; specializations for job/tracking/request/quick-actions.
- **Wallet card:** gradient fill + white text; amounts use Rubik.
- **Naming:** kebab-case CSS vars ↔ `camelCase` tokens in `design-tokens.json`.
- **Dark mode:** not designed in v2.0 — keep single light theme.
- **Localization:** text expands ~30% in some languages — allow flexible heights (no fixed-height text boxes).

---

## 17. QA checklist

- [ ] All screens built on 390 pt canvas; gutters 16–24 pt.
- [ ] Only Poppins/Inter/Rubik/Plus Jakarta Sans — no Segoe UI.
- [ ] Colors come only from `design-tokens.json` (no hardcoded hex).
- [ ] Primary button = `#009966` pill; pressed `#007750`; disabled gray.
- [ ] Inputs: 45 pt, radius 8, bg `#F9FAFB`, border `#A3A3A3`.
- [ ] Bottom nav active `#009966` / inactive `#A29EB6`, height 70.
- [ ] Wallet card gradient `#009362→#40D2A1`, white Rubik amount.
- [ ] Auth screens use `#E6FFE2→#00E19D` gradient.
- [ ] Status chips: tinted bg + colored text (no color-only meaning).
- [ ] Payment statuses shown at every step (Held / Pending Release / Released).
- [ ] Destructive actions require confirmation dialog.
- [ ] Touch targets ≥ 44 pt; WCAG AA contrast on body text.
- [ ] Loading + empty + error states on all async screens.
- [ ] Reduced-motion respected; transitions 200–300 ms.
