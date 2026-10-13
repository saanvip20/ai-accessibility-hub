# AI Accessibility Hub

A React + Vite website that helps learners with disabilities and their supporters explore existing AI tools for learning and study, compare alternatives, and follow step-by-step guidance.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

To check the project before sharing it:

```bash
npm run lint
npm run build
```

## Main features
- Four-step learning-goal and access-preference assessment
- Ranked tool shortlist with transparent reasons and caveats
- Curated catalogue with search and goal filtering
- Tool-specific setup checklists, copyable example prompts and progress tracking
- Alternatives, limitations, privacy and safe-use reminders
- Optional copy/share/print shortlist for a supporter or organisation
- Larger-text and high-contrast controls, skip link, visible keyboard focus and reduced-motion support

See `FEEDBACK_CHANGES.md` for the transcript feedback mapped to changes and remaining validation work.

## Scope and limitations
The current scope is learning and study. Recommendations are a guide-match score, not a diagnosis, a formal accessibility audit or a guarantee that a third-party tool will work with a particular person's assistive technology. The catalogue is curated, not exhaustive. Check the official tool website for current features, terms and privacy settings.

The site has not been certified as WCAG-conformant. Manual accessibility testing is still needed, including screen-reader and alternative-input testing.

### Illustrated beginner workflows

Each tool page now expands setup steps with an illustrated example screen, a plain-language action, a sign that the step worked, troubleshooting advice and optional keyboard/assistive-technology tips. The diagrams are labelled as illustrations, not real screenshots of third-party products; the live interface can change. For a more tailored deployment, test each guide against the specific device/browser used by the intended audience and replace generic diagrams with current, permission-cleared screenshots or short looping recordings.
