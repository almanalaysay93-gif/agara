# Agara — Elevated Life Design Direction

## Three stylistic approaches

### 1. Botanical Editorial Ritual
A warm, tactile wellness landing page that treats daily energy as a considered ritual: natural materials, editorial typography, botanical color, and calm but responsive movement.

**Probability:** 0.06

### 2. Clinical Modern Vitality
A brighter, more evidence-led direction built around precise typographic rhythm, crisp product diagrams, mineral whites, and restrained green accents for a trust-first functional wellness feel.

**Probability:** 0.03

### 3. Roasted Atelier
A darker, more cinematic coffee-house direction with ember copper, deep espresso, dramatic product light, and tactile motion inspired by premium packaging and small-batch craft.

**Probability:** 0.08

## Chosen approach: Botanical Editorial Ritual

### Design Movement
Contemporary botanical editorialism with quiet-luxury packaging cues and tactile still-life composition.

### Core Principles
- **Ritual over rush:** The experience should make a daily beverage feel intentional, not optimized into a sterile productivity tool.
- **Material honesty:** Cream paper, leaf green, roasted brown, brushed copper, and soft shadow should feel physically touchable.
- **Asymmetric calm:** Use off-center compositions, open space, and deliberate overlaps instead of a centered marketing stack.
- **Benefit clarity:** Product benefits should be legible at a glance without becoming loud or medicalized.

### Color Philosophy
Agara’s signature world is built from a quiet cream ground, living matcha green, roasted espresso, and a narrow line of copper warmth. Cream keeps the page breathable; green signals botanical vitality; espresso anchors the brand in real ingredients and daily ritual; copper adds the elevated, optimistic spark seen in the packaging mark. The palette should feel sun-warmed and natural rather than trendy or overly saturated.

**Signature brand color:** Agara Copper `#B86538` — a warm, ownable copper-orange that connects matcha and coffee through the shared idea of elevation.

### Layout Paradigm
A long-scroll editorial canvas with an asymmetric split hero: copy and ritual cue occupy the quieter left rail while the hero product still life takes visual priority on the right. Sections should alternate between broad breathing room and close-up material moments, using vertical rules, offset captions, and product-led overlaps rather than uniform card grids.

### Signature Elements
- Fine copper rules and small-caps labels that echo premium packaging information architecture.
- A leaf-to-flame visual vocabulary: botanical forms for calm and roasted forms for energy.
- A floating vertical ritual index that turns scrolling into a guided progression through “wake / focus / restore.”

### Interaction Philosophy
Interactions should feel like handling a beautiful object: responsive, lightly physical, and never noisy. Product controls should reveal information through small shifts, not abrupt UI panels. Buttons should compress on press, image crops should drift gently on hover, and the product’s variant selection should visually recompose the hero rather than behave like a generic form.

### Animation
Use soft entrance choreography with 30–70ms staggered offsets. Product images may use a slow 14–18s ambient float and a subtle parallax response, while typography enters with a short opacity + translate reveal. Hover transitions stay in the 160–260ms range with a strong ease-out. Avoid animating layout dimensions; prefer opacity, transform, and clip-path. Honor `prefers-reduced-motion` by removing ambient movement while preserving clear state changes.

### Typography System
Use **Cormorant Garamond** for large editorial statements and poetic section titles; pair it with **DM Sans** for navigation, benefits, controls, and readable body copy. Headlines use light-to-regular weights with generous line-height and occasional italic emphasis. UI labels use DM Sans at 10–12px, uppercase, with 0.18–0.24em tracking. Body text should remain compact and warm, never overly technical.

### Brand Essence
For wellness-minded people who want energy that feels grounded, Agara turns everyday matcha and coffee into a more intentional ritual through functional ingredients and elevated sensory design.

**Personality:** grounded, optimistic, discerning.

### Brand Voice
Headlines sound like a quiet invitation with a point of view. CTAs are specific and lightly sensorial. Microcopy is concise, human, and never overpromises.

> “Make your everyday feel a little more elevated.”
>
> “Choose your ritual.”

### Wordmark & Logo
Use an airy uppercase wordmark with a custom copper caret replacing the “A” crossbar, paired with a simple leaf-flame monogram: two opposing tapered forms meeting at a calm central point. The mark should work as a favicon and as a visible header icon without relying on text.

### Asset Direction
The hero visual should be a custom, high-key botanical still life featuring the two hero products—functional matcha and dark roast coffee—on a warm wood surface, with the packages remaining the focal point. Supporting imagery should be limited to one tactile matcha close-up and one coffee ritual detail so the page feels curated rather than like an asset gallery.

## Style Decisions

- Do not use purple gradients, generic rounded cards, or a centered SaaS landing-page stack.
- Keep the page light and warm, using dark espresso text for contrast on cream backgrounds.
- Make the product image the dominant visual anchor; UI supports the image instead of competing with it.
- Use visual hierarchy from scale, whitespace, and copper rules rather than heavy shadows or excessive borders.
- Keep commerce actions present but non-functional placeholders for now; the requested scope is a landing page, not checkout.
- Every edited CSS/component/page file should preserve this Botanical Editorial Ritual direction.

## Style Decisions — Drive Media Revision

- Supplied Drive media is the source of truth for product storytelling; the portrait product image anchors the hero, while the horizontal matcha and coffee compositions support the ritual chapter.
- Motion now carries the “wake / focus / restore” arc through three supplied 16:9 films rather than functioning as decorative background video.
- The page uses named phases — Wake, Focus, Restore, The Formula, and Your Next Ritual — as recurring editorial markers.
- The Agara leaf-flame monogram repeats beside each phase label as a branded pause and transition cue.
- Video is muted, looped, inline, and user-controllable with a pause/play control; reduced-motion users receive poster frames instead of autoplay motion.
