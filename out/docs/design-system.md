# Ambika Builders - Design System Documentation

## Overview
This document contains all design tokens, patterns, and guidelines for the Ambika Builders luxury real estate website.

---

## Color Palette

### Primary Colors (Gold)
| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#C5A059` | Primary gold - buttons, accents, highlights |
| `--primary-light` | `#D4AF37` | Lighter gold - hover states |
| `--primary-dark` | `#B8860B` | Darker gold - borders, subtle accents |
| `--primary-muted` | `#E2C285` | Muted gold - gradients, backgrounds |

### Background Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-dark` | `#0B0E14` | Main page background |
| `--bg-darker` | `#0A0E17` | Darker sections, cards |
| `--bg-default` | `#121212` | Alternative dark background |
| `--bg-navy` | `#0B1221` | Navy-tinted sections |

### Surface Colors (Cards, Panels)
| Token | Hex | Usage |
|-------|-----|-------|
| `--surface-dark` | `#161B26` | Card backgrounds, panels |
| `--surface-default` | `#151B23` | Secondary surfaces |
| `--surface-light` | `#1E1E1E` | Lightest dark surface |
| `--surface-charcoal` | `#1A1A1A` | Charcoal sections |
| `--surface-navy` | `#141C2F` | Navy surfaces |

### Border Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--border-light` | `rgba(197, 160, 89, 0.3)` | Gold-tinted borders |
| `--border-subtle` | `rgba(255, 255, 255, 0.1)` | Subtle white borders |
| `--border-default` | `rgba(255, 255, 255, 0.05)` | Very subtle borders |

### Text Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--text-white` | `#FFFFFF` | Primary text |
| `--text-muted` | `rgba(255,255,255,0.6)` | Secondary text |
| `--text-subtle` | `rgba(255,255,255,0.4)` | Tertiary/caption text |
| `--text-faint` | `rgba(255,255,255,0.2)` | Placeholder, disabled |

---

## Typography

### Font Families
- **Display/Headings**: `Playfair Display`, `Cinzel`, serif
- **Body**: `Inter`, `Montserrat`, `Plus Jakarta Sans`, sans-serif

### Font Sizes
| Size | Value | Usage |
|------|-------|-------|
| `2xs` | `9px` | Labels, badges, tags |
| `xs` | `10px` | Uppercase tracking text, captions |
| `sm` | `11px` | Small body text, navigation |
| `base` | `16px` | Default body text |
| `lg` | `18px` | Large body text |
| `xl` | `20px` | Subheadings |
| `2xl` | `24px` | Small headings |
| `3xl` | `30px` | Medium headings |
| `4xl` | `36px` | Large headings |
| `5xl` | `48px` | Hero subheadings |
| `6xl` | `60px` | Hero headings |
| `7xl` | `72px` | Large hero |
| `8xl` | `96px` | Extra large hero |

### Letter Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `tracking-widest` | `0.3em` | Uppercase headings, labels |
| `tracking-wider` | `0.2em` | Navigation, buttons, uppercase text |

---

## Spacing Scale

### Section Padding
- **Desktop**: `8rem` (128px) top/bottom
- **Tablet**: `6rem` (96px) top/bottom
- **Mobile**: `4rem` (64px) top/bottom

### Container Widths
- **Wide**: `1280px` max-width
- **Default**: `1152px` max-width
- **Narrow**: `768px` max-width

### Component Spacing
- **xs**: `4px`
- **sm**: `8px`
- **md**: `16px`
- **lg**: `24px`
- **xl**: `32px`
- **2xl**: `48px`
- **3xl**: `64px`

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-primary` | `0 0 20px rgba(197, 160, 89, 0.2)` | Gold glow on hover |
| `--shadow-card` | `0 25px 50px -12px rgba(0, 0, 0, 0.5)` | Card shadows |
| `--shadow-lg` | `0 10px 40px rgba(0, 0, 0, 0.4)` | Large element shadows |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `none` | `0` | Sharp corners (buttons, some cards) |
| `sm` | `0.125rem` | Subtle rounding |
| `DEFAULT` | `0.25rem` | Default rounding |
| `md` | `0.375rem` | Medium rounding |
| `lg` | `0.5rem` | Large rounding |
| `xl` | `0.75rem` | Extra large (cards) |
| `2xl` | `1rem` | Pills, badges |
| `full` | `9999px` | Circles |

---

## Component Patterns

### Buttons

#### Primary Button
```
Background: var(--primary)
Text: var(--bg-dark)
Padding: 0.75rem 1.5rem
Font: 10px, uppercase, letter-spacing 0.15em, font-weight 700
Hover: brightness(1.1), shadow-gold
```

#### Outline Button
```
Background: transparent
Border: 1px solid var(--primary)
Text: var(--primary)
Padding: 0.75rem 1.5rem
Font: 10px, uppercase, letter-spacing 0.15em, font-weight 700
Hover: background var(--primary), text var(--bg-dark)
```

### Cards

#### Property Card
- Background: `var(--surface-dark)`
- Border: `1px solid rgba(255,255,255,0.05)`
- Border Radius: `1rem`
- Image Height: `288px`
- Hover: Border color changes to gold, image scales 1.05

#### Service Card
- Background: `var(--bg-dark)`
- Border: `1px solid rgba(255,255,255,0.05)`
- Padding: `2.5rem`
- Hover: Background changes to surface-dark, icon scales

### Forms

#### Dark Input
```
Background: #0F172A
Border: 1px solid rgba(255,255,255,0.2)
Text: white
Padding: 0.75rem 1rem
Border Radius: 0.5rem
Focus: border var(--primary), ring 1px var(--primary)
```

### Navigation

#### Navbar
- Position: Fixed, top
- Background: `rgba(11, 14, 20, 0.9)` with backdrop-blur
- Height: `80px` (5rem)
- Border Bottom: `1px solid rgba(255,255,255,0.05)`
- On Scroll: Padding reduces, background becomes solid

---

## Effects & Animations

### Glass Effect
```css
.glass-panel {
  background: rgba(22, 27, 38, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-light);
}
```

### Gradient Text
```css
.gradient-text-gold {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-muted) 50%, var(--primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Hover Transitions
- Default: `0.3s ease`
- Slow: `0.5s ease`
- Slower: `0.7s ease`

### Scroll Animations
- Elements use `.reveal` class
- Animation: Fade in + slide up (30px)
- Duration: `0.6s ease-out`
- Trigger: When 10% visible

---

## Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| `sm` | `640px` | Small devices |
| `md` | `768px` | Tablets |
| `lg` | `1024px` | Small desktops |
| `xl` | `1280px` | Large desktops |
| `2xl` | `1536px` | Extra large screens |

---

## Icon Usage

### Material Symbols Outlined
```html
<span class="material-symbols-outlined">icon_name</span>
```

### Common Icons
- Navigation: `menu`, `close`
- Property: `apartment`, `king_bed`, `square_foot`, `location_on`
- Services: `gavel`, `account_balance`, `architecture`, `real_estate_agent`
- Contact: `phone`, `mail`, `location_on`
- UI: `arrow_forward`, `arrow_back`, `favorite`, `search`, `share`

---

## Accessibility Guidelines

### Color Contrast
- Text on dark backgrounds: Minimum 4.5:1 ratio
- Large text (18px+): Minimum 3:1 ratio
- Interactive elements: Clear focus states with gold outline

### Focus States
```css
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## File Organization

```
ambika-builders-website/
├── index.html                  # Homepage
├── pages/
│   ├── properties.html         # Property listings
│   ├── services.html           # Specialized services
│   ├── about.html              # About us & trust center
│   └── contact.html            # Contact & evaluation portal
├── assets/
│   ├── css/
│   │   └── main.css           # Main stylesheet
│   ├── js/
│   │   └── main.js            # Shared JavaScript
│   └── images/
│       ├── properties/        # Property photos
│       ├── services/          # Service images
│       ├── about/             # About page images
│       ├── icons/             # SVG icons
│       └── backgrounds/       # Hero backgrounds
├── components/
│   ├── header.html            # Navigation component
│   ├── footer.html            # Footer component
│   └── property-card.html     # Property card template
└── docs/
    └── design-system.md       # This file
```

---

## Implementation Notes

### CDN Resources
- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **Google Fonts**: Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`
- **Material Icons**: `Material Icons` and `Material Symbols Outlined`

### Performance
- Use `loading="lazy"` on images below fold
- Preload hero images with `<link rel="preload">`
- Defer non-critical JavaScript
- Use Intersection Observer for scroll animations

### SEO
- Semantic HTML5 elements (`nav`, `main`, `section`, `article`)
- Descriptive alt text for all images
- Meta descriptions for each page
- Structured data (Schema.org) for properties

---

## Version History

### v1.0.0
- Initial design system creation
- Unified color palette across all 5 pages
- Shared component architecture
- Responsive design patterns
