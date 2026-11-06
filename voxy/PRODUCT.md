# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

ENS holders exploring a more understandable wallet recovery experience. Primary situation: a web3 user worried about losing keys, evaluating whether self-custody can be made recoverable. Job: understand a recovery concept, decide it feels trustworthy, and share the vision. Secondary: the awwwards/jury-style reviewer evaluating craft.

## Product Purpose

Voxy is an ENS-based wallet recovery app concept. This frontend is a brand landing page with an interactive product preview that demonstrates how a familiar ENS name (you.eth) could become the starting point for a configured wallet recovery flow. Success: a memorable, trustworthy concept page that communicates "a name you know, a way back you understand."

## Positioning

Recovery built around your ENS name — identity-first, honest about what recovery requires: an ENS name identifies an account but does not authorize recovery; a compatible wallet needs a planned, authorized recovery mechanism configured in advance.

## Operating Context

Purely illustrative: no ENS lookup, no wallet connection, no contract calls, no transactions are performed. The dialog preview accepts basic ASCII .eth names only; production ENS names require ENSIP-15 normalization. Production integration would require a specified recovery contract and compatible wallet.

## Capabilities and Constraints

- Lenis smooth scrolling with anchors and reduced-motion opt-out.
- Canvas-rendered 24 fps ASCII torus portal; identity card tilts to pointer; motion pauses offscreen/hidden with an explicit pause control; replayable skippable intro.
- Recovery explorer: accessible three-step tab interface (keyboard: Up/Down/Home/End).
- Native dialog (setup/recovery preview) with client-side ENS name validation; FAQ via native disclosure elements.
- Constraint: never request or imply seed phrases/private keys; never simulate a real lookup or transaction result as if it were checked.

## Brand Commitments

Name: Voxy. Voice: calming, honest, lightly editorial ("Lose your keys. Keep your crypto."). Visual world committed in DESIGN.md: charcoal void, warm ivory, signal orange in OKLCH; Sora for editorial type, DM Mono only in short technical labels; ASCII/pixel field as the recurring motif; hard-edged (near-unradius) surfaces in the dark theme.

## Evidence on Hand

Single-commit repository of the full frontend. No testimonials, customers, benchmarks, or deployment claims exist; none may be fabricated. All copy is authored marketing/proof language already in the codebase.

## Product Principles

1. Honesty first: the page never overclaims; it states exactly what recovery does and does not require.
2. The portal is the brand: motion and ASCII craft carry identity, but never block access or comprehension.
3. Calm reassurance at high-stakes moments: recovery is scary; copy and feedback should lower tension.
4. Accessibility as baseline: reduced motion, keyboard paths, native accessible widgets.

## Accessibility & Inclusion

Reduced-motion users must get the full experience without the animation layer: intro skipped, render loop stopped, smoothing disabled, transforms neutralized. Keyboard-only navigation must reach every feature (skip link, tabs, dialog focus management). Target WCAG AA contrast.
