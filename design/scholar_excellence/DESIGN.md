# Design System Document: Scholarly Excellence

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Ivory Tower"**

This design system is built to evoke the prestige of a world-class academic institution while maintaining the accessibility of a modern digital experience. We are moving away from the "template" look of traditional educational portals. Instead, we embrace a **High-End Editorial** aesthetic. 

The system achieves this through **Intentional Asymmetry**—where large-scale typography meets tight, functional UI—and **Tonal Depth**. We treat the screen not as a flat canvas, but as a series of layered, premium materials. By pairing the technical precision of *Inter* with the literary soul of *Newsreader*, we bridge the gap between "Modern Professionalism" and "Spiritual Heritage."

---

## 2. Colors & Atmospheric Depth

Our palette is rooted in the deep authority of Navy and the refined success of Gold. To maintain a premium feel, we avoid "flatness" at all costs.

### The Palette (Material Design Tokens)
*   **Primary (The Authority):** `#002447` (Primary) / `#1B3A5F` (Primary Container)
*   **Secondary (The Achievement):** `#735c00` (Secondary) / `#FED65B` (Secondary Container)
*   **Neutral (The Canvas):** `#F7F9FB` (Surface) / `#FFFFFF` (Surface Lowest)

### Signature Application Rules
*   **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit on a `surface` background to create a "zone" without using a line.
*   **Surface Hierarchy & Nesting:** Treat the UI as stacked sheets of fine vellum. Use the `surface-container` tiers (Lowest to Highest) to create nested depth. An inner card should always be a "step" higher or lower than its parent container to define importance.
*   **The "Glass & Gradient" Rule:** Use Glassmorphism for floating navigation or modal overlays. Apply a `surface` color at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Textures:** For Hero sections or primary Call-to-Actions, use a subtle linear gradient from `primary` to `primary-container` (at a 135-degree angle) to provide a "sheen" reminiscent of high-quality silk or leather.

---

## 3. Typography: The Scholarly Voice

The typographic system is a dialogue between modern utility and classic narrative.

*   **Display & Headlines (Inter):** These are the "Architectural" elements. Use wide tracking (-0.02em) and heavy weights for `display-lg` to create an authoritative, modern punch.
*   **Titles & Body (Newsreader):** These are the "Humanist" elements. The serif font provides a scholarly, rhythmic reading experience. Use `title-lg` for quotes or introductory "vision" paragraphs to ground the high-tech UI in tradition.
*   **Labels (Inter):** Small-scale metadata must remain hyper-legible. All `label` tokens use Inter in Medium or Bold weights to ensure they don't get lost in the serif texture.

| Role | Token | Font | Size |
| :--- | :--- | :--- | :--- |
| Hero | `display-lg` | Inter | 3.5rem |
| Section | `headline-md` | Inter | 1.75rem |
| Narrative | `title-lg` | Newsreader | 1.375rem |
| Body | `body-lg` | Newsreader | 1rem |
| Utility | `label-md` | Inter | 0.75rem |

---

## 4. Elevation & Depth: Tonal Layering

We reject the "drop shadow" defaults of the early web. Our depth is environmental and soft.

*   **The Layering Principle:** Avoid shadows for static content. Use the `surface-container-lowest` (#FFFFFF) on top of `surface-container-low` (#F2F4F6) to create a natural, "physical" lift.
*   **Ambient Shadows:** For interactive floating elements (e.g., active cards), use an extra-diffused shadow: `box-shadow: 0 12px 32px rgba(27, 58, 95, 0.06)`. Note the use of a Navy tint in the shadow rather than pure black; this mimics natural light in a prestigious space.
*   **The "Ghost Border":** If a container requires a border for accessibility, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Roundedness Scale:**
    *   `md` (12px): Standard buttons and small cards.
    *   `lg` (16px): Main content containers and high-level feature cards.

---

## 5. Components & UI Patterns

### Buttons (The "Seal of Excellence")
*   **Primary:** A solid `primary` container with `on-primary` text. Apply a subtle `secondary` (Gold) 2px bottom-glow on hover to signal "achievement."
*   **Secondary:** An `outline` variant using the Ghost Border rule. Never use a heavy stroke.
*   **Tertiary:** Purely typographic using `label-md` in `primary` color, with a slight background shift on hover.

### Cards & Lists (The Editorial Grid)
*   **Forbidden:** Divider lines. 
*   **Requirement:** Separate list items using a 16px or 24px vertical gap from the spacing scale. 
*   **Academic Cards:** Use `surface-container-lowest` with a `lg` (16px) radius. If the card contains a "Scholarly Quote," the text must switch to `Newsreader` (Serif).

### Input Fields
*   Fields should not be boxes, but "Wells." Use `surface-container-high` as the background with a 0.5rem radius. On focus, the background shifts to `surface-container-lowest` with a 1px `primary` Ghost Border.

### Signature Component: The "Achievement Chip"
*   Used for student or school accolades. Uses `secondary-container` (Gold) background with `on-secondary-container` text. It should feel like a modern digital medal.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use whitespace as a luxury. Large margins convey "Prestige."
*   **DO** overlap elements. Let a serif `title-lg` partially overlap a `primary-container` image block to create an editorial, magazine-like feel.
*   **DO** use the Gold (`secondary`) sparingly. It is a reward for the eye, not a primary structural color.

### Don’t
*   **DON’T** use 100% black text. Always use `on-surface` (#191C1E) or `primary` for text to keep the palette sophisticated.
*   **DON’T** use standard "Material Blue." Stick strictly to the Navy and Tonal Gray tokens provided.
*   **DON’T** use sharp 0px corners. This system is about "Spiritual Warmth"—everything must feel approachable yet firm.