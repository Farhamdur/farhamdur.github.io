# Personal Academic Website Instructions

## Scope and purpose

This repository contains the personal academic website of Md Farhamdur Reza.
These instructions apply to the entire repository unless a more specific
`AGENTS.md` exists in a subdirectory.

The site is hosted with GitHub Pages and uses plain HTML, CSS, and JavaScript.
Preserve this simple, zero-build architecture unless the user explicitly
approves a framework, package manager, or build-system migration.

## Primary goals

Prioritize work that:

1. Presents a clear professional identity in trustworthy AI, adversarial
   machine learning, multimodal AI safety, and generative AI.
2. Communicates research projects, publications, teaching, and experience
   accurately and clearly.
3. Serves academic, research, and industry audiences with concise,
   professional writing.
4. Improves accessibility, responsive behavior, navigation, SEO, and
   performance without unnecessary complexity.
5. Keeps routine content updates straightforward and low-risk.

## Authoritative content sources

Use these private source files when they are present:

1. `private-input/updated-resume-source.pdf`
2. `private-input/profile-notes.md`
3. `private-input/scholar-publications.pdf`
4. `private-input/linkedin-export.pdf`

The updated resume is the primary source of truth for education, employment,
research experience, teaching, awards, and dates. Use the Scholar export as the
primary source for publication metadata, and use profile notes for approved
positioning or wording that does not conflict with the resume.

If sources disagree, do not silently choose one. Identify the conflict and ask
the user before publishing the disputed information. Existing website content
is not authoritative when it conflicts with the supplied private sources.

Treat everything under `private-input/` as confidential working material. It
may be read to verify public-facing content but must never be copied, linked,
committed, published, or exposed through the website.

## Factual and editorial rules

- Never invent or infer facts, dates, titles, positions, affiliations, awards,
  publications, venues, publication status, citation counts, collaborators,
  contact details, or URLs.
- Verify factual changes against the authoritative sources before editing.
- Do not describe submitted or under-review work as accepted or published.
- Do not hard-code citation counts or other rapidly changing metrics unless the
  user explicitly requests it.
- Do not publish private addresses, phone numbers, immigration information,
  identification data, private documents, metadata from source files, or other
  sensitive information.
- Preserve confirmed existing URLs. Check a replacement before changing a URL.
- Use concise, specific, professional language. Avoid hype, unsupported claims,
  excessive jargon, and generic filler.
- Do not copy another person's website design, source code, or wording.
- When a factual claim cannot be verified, omit it or ask the user.

## Architecture and implementation

- Keep the site compatible with GitHub Pages and static file hosting.
- Prefer semantic HTML, modern CSS, progressive enhancement, and minimal
  dependency-free JavaScript.
- Do not add React, Next.js, npm, a bundler, a static-site generator, analytics,
  remote fonts, or third-party libraries without explicit approval.
- Keep filenames and public URLs stable when practical. Use relative URLs for
  internal assets and navigation.
- Keep shared visual rules in `assets/css/styles.css` and shared behavior in
  `assets/js/app.js`; avoid unnecessary inline styles and scripts.
- Ensure the resume viewer and download links reference `docs/resume.pdf`.
- Optimize images for their rendered size and provide appropriate dimensions,
  formats, and descriptive alt text.
- Avoid committing operating-system files, generated previews, editor state,
  secrets, or private source material.

## Accessibility and responsive design

- Use semantic landmarks and a logical heading hierarchy with one primary
  `h1` per page.
- Ensure all functionality works with a keyboard and has a visible focus state.
- Give informative images meaningful alt text; use empty alt text for purely
  decorative images.
- Give interactive controls accessible names and expose state such as
  `aria-expanded`, `aria-current`, and menu visibility where appropriate.
- Maintain adequate color contrast in every supported theme.
- Respect reduced-motion preferences.
- Make content usable without horizontal scrolling at mobile, tablet, and
  desktop widths.

## SEO and metadata

- Give each page a unique, descriptive title and meta description.
- Keep canonical URLs, Open Graph data, structured data, and visible content
  consistent when those fields are present.
- Do not place unverified claims or empty placeholder values in structured data.
- Use descriptive link text instead of vague labels such as “click here.”

## Working procedure

Before editing:

1. Inspect the relevant files and repository status.
2. Read the applicable authoritative sources for factual changes.
3. Note existing user changes and avoid overwriting unrelated work.
4. Report source conflicts or missing information that materially affects the
   requested result.

While editing:

- Make the smallest coherent change that fully solves the request.
- Preserve the site's established structure unless a broader redesign is
  requested.
- Apply shared changes consistently across all affected pages.
- Do not alter private source files unless the user explicitly requests it.

## Completion checklist

Before declaring website changes complete:

- Preview the site through a local HTTP server rather than only opening files
  directly.
- Test every primary navigation item and the custom 404 page.
- Check internal links, asset paths, downloadable files, and relevant external
  links.
- Check representative mobile, tablet, and desktop viewport widths.
- Verify keyboard navigation, visible focus, menu behavior, image alt text,
  form/control labels, landmarks, and heading order.
- Check both light and dark themes when applicable.
- Check for missing, oversized, or broken images and files.
- Review factual claims against the supplied authoritative sources.
- Confirm that no private files or sensitive data are exposed or staged.
- Inspect the final diff and preserve unrelated user changes.
- Summarize modified files, verification performed, and any remaining caveats.

If a verification step cannot be performed in the available environment, state
that clearly rather than implying it passed.
