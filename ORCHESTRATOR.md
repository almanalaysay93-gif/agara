# ORCHESTRATOR.md — Agara Research Integration (BuildMe v4)

**Design Read:** DTC functional-beverage landing page for wellness-curious buyers, botanical-editorial language, Vite + React + Tailwind + Framer Motion. New centerpiece: regulatory-cautious ingredient education.

**Subagent model:** haiku (user-specified). Per-agent budget: <=20% session. Max 2 revision rounds.

**Tiebreaker:** user brief -> compliance guardrail -> anti-slop rule -> cited principle -> ask user.

## Grill Me decisions (Phase 2, confirmed)
| Question | Decision |
|---|---|
| Media | Copy originals to `client/public/media/`, rewire consts. Drop external storage proxy dependency. |
| Ingredient depth | Full 12-ingredient accordion, star evidence ratings, safety notes, sources. |
| Design | Extend existing botanical editorial. No arena. |
| Research dashboard | Ship static at `client/public/research.html`, link from footer. |

## Hard constraint
Every ingredient sentence must derive from `research/ingredient_evidence_cards.md` "Landing page language".
Banned-word gate (grep, zero tolerance): jitter-free, jitter free, burns fat, fat burner, thermogenic,
detox, cleanse, clinically proven, controls blood sugar, Ozempic, metformin, appetite suppressant,
weight loss, boosts metabolism, accelerates metabolism, boosts brain power, enhances memory.
FDA disclaimer required on page.

## Work units
| # | Unit | Owner | Contract |
|---|---|---|---|
| U1 | Media relocation + const rewire | main | 6 assets in public/media, Home.tsx consts updated, no remote storage proxy refs |
| U2 | VOICE.md + ingredient copy data | A9 (haiku) | `client/src/data/ingredients.ts` + VOICE.md, banned-word clean |
| U3 | Ingredients & Evidence section | main | accordion, star ratings, safety notes, sources, disclaimer band |
| U4 | 5-benefit row (packaging parity) | main | Energy/Focus/Mood/Appetite/Metabolism, compliant wording |
| U5 | Static research dashboard + footer link | main | public/research.html reachable |
| U6 | Anti-slop gate | A7 (haiku) | 13 detectors, zero block |
| U7 | Bug hunt gate | A8 (haiku) | repro->fix->verify, zero block/major |
| U8 | Perf/a11y gate | A10 (haiku) | contrast 4.5:1, keyboard, 44px targets, budgets |
| U9 | llms.txt | A6 (haiku) | public/llms.txt spec-compliant |

## Checkpoints
- [x] CP0 Phase 0 setup
- [x] CP1 U1+U2 landed
- [x] CP2 U3+U4+U5 landed
- [x] CP3 gates passed (anti-slop PASS; perf/a11y 2 contrast blocks fixed; bug hunt 0 BLOCK)
- [x] CP4 llms.txt + build green
