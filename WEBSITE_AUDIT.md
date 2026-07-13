# Website Audit

Audit date: 2026-07-13

## Scope and method

This audit covers every non-Git file in the repository: the eight HTML pages,
shared CSS and JavaScript, image and document assets, repository documentation,
and the authoritative source material under `private-input/`. No website file
was modified.

Content was checked primarily against `private-input/updated-resume-source.pdf`,
with `private-input/scholar-publications.pdf` used for publication metadata and
`private-input/profile-notes.md` plus the available LinkedIn export used as
supplementary sources. The published `docs/resume.pdf` is byte-for-byte identical
to the updated resume source at the time of this audit.

The filename named in `AGENTS.md` for the LinkedIn export does not exist:
`private-input/linkedin-export.pdf`. The repository instead contains
`private-input/linkedin-profile-july-2026.pdf`. This documentation mismatch
should be resolved before automating source ingestion.

External LinkedIn and Google Scholar pages could not be independently fetched
during the audit because those services blocked automated access. Their URLs
were therefore assessed against the supplied authoritative source files rather
than treated as live-link verification.

## Executive summary

The site is a lightweight, dependency-free academic portfolio with a sensible
seven-page information architecture, consistent dark/light styling, and working
relative navigation. Its most urgent problems are factual accuracy, a broken
portrait path, sensitive image metadata, weak publication presentation, and
mobile/accessibility defects.

Highest-priority findings:

1. Every standard page requests the missing `assets/img/profile.jpg`, while the
   actual portrait is `assets/img/profile.jpeg`. The browser therefore falls
   back to the generic SVG on every page.
2. The untracked 4.2 MB `assets/img/profile.jpeg` retains phone-camera EXIF
   metadata, including a GPS metadata section. It should be resized and stripped
   of metadata before publication.
3. `publications.html` gives the targeted-transfer paper the wrong venue and
   describes the ICASSP 2026 paper as under review even though the authoritative
   resume and Scholar export identify it as an ICASSP 2026 publication.
4. The authoritative profile notes specify the LinkedIn URL
   `https://www.linkedin.com/in/farhamdur/`; all site references use an older,
   conflicting slug.
5. The homepage's two-column research/links grid never collapses on mobile, so
   its cards remain narrow 7/12 and 5/12 columns below the 920 px breakpoint.
6. Navigation does not expose its current or expanded state to assistive
   technology, and the site has no visible keyboard-focus treatment.
7. Structured data is duplicated on all seven pages, contains an empty `url`,
   and repeats the conflicting LinkedIn URL.
8. The seven full pages duplicate their header, navigation, metadata, structured
   data, and footer. The footer year is stale everywhere.

## Repository inventory

### Public pages

- `index.html`: homepage and professional overview.
- `research.html`: research areas, selected projects, and tooling.
- `publications.html`: short selected-publications list and Scholar link.
- `teaching.html`: teaching experience and a brief teaching philosophy.
- `news.html`: two undated research updates.
- `resume.html`: embedded PDF viewer with open/download links.
- `contact.html`: email, LinkedIn, and Google Scholar links.
- `404.html`: bare not-found heading.

### Shared public assets

- `assets/css/styles.css`: all shared colors, layout, components, animation, and
  the single responsive breakpoint.
- `assets/js/app.js`: theme persistence, mobile-menu toggle, and active-page
  detection.
- `assets/img/profile.jpeg`: intended portrait; currently untracked, oversized,
  metadata-bearing, and not referenced by the HTML because of the extension
  mismatch.
- `assets/img/profile.svg`: generic fallback portrait.
- `favicon.svg`: site icon.
- `docs/resume.pdf`: public resume; currently matches the authoritative updated
  resume exactly.

### Repository/support files

- `README.md`: two-line template note; outdated and insufficient.
- `.gitignore`: ignores only `private-input/`.
- `AGENTS.md`: repository-wide content, privacy, technical, and verification
  instructions.
- `.DS_Store` and `docs/.DS_Store`: macOS metadata files; the latter is staged.
- `private-input/`: confidential content sources correctly ignored by Git.

There is no package manifest, framework, build system, third-party script,
remote font, or runtime dependency. This is appropriate for the stated
zero-build architecture.

## Page-by-page structure and purpose

### `index.html`

Purpose: establish the professional identity, summarize the research program,
and route visitors to contact/profile resources.

Structure:

- Lines 3-11: title, generic description, Open Graph metadata, and Person JSON-LD.
- Lines 13-33: shared sticky header and navigation.
- Line 34: page masthead with a second research-positioning statement.
- Lines 35-48: portrait hero and short biography.
- Lines 49-66: research highlights and quick links in a 12-column grid.
- Lines 67-76: current-focus list.
- Line 77: shared footer.

Findings:

- Lines 16 and 37 reference nonexistent `assets/img/profile.jpg`; the available
  portrait is `assets/img/profile.jpeg`.
- “Profile photo” is generic alt text. The header image is arguably decorative,
  while the main portrait should identify the person.
- Lines 34 and 39 repeat nearly the same positioning statement, and the `h1`
  “Home” is less informative than the subject's name or professional identity.
- Line 40 is broadly consistent with the resume, but “robustness and
  controllability” understates the more specific current work on transferable
  attacks, multimodal jailbreaks, alignment, and decentralized learning.
- Line 55 says CGBA has “strong black-box transfer.” The authoritative resume
  describes state-of-the-art attack success through boundary geometry, not
  transferability; this wording should be verified or changed.
- Lines 56 and 71 refer to “single-exposure jailbreaks.” That project framing is
  absent from the updated resume, whose current submitted MLLM work is the
  reconstruction-concealment jailbreak framework. Treat this as stale or
  unverified rather than silently publishing it.
- Line 62 uses the conflicting LinkedIn slug.
- The current-focus list has no project, publication, code, or detail links.
- Inline grid-column styles on lines 51 and 59 contribute to the mobile layout
  defect and should live in shared CSS.

### `research.html`

Purpose: summarize research areas, recent projects, and technical tooling.

Structure:

- Lines 35-44: three research areas.
- Lines 45-55: four current/recent projects.
- Lines 56-65: tooling and infrastructure list.

Findings:

- The three research areas broadly match the resume but omit the explicit
  computer-vision dimension and do not distinguish published, accepted,
  submitted, and ongoing work.
- Line 51 should identify the targeted-transfer project as under review at IEEE
  TIFS 2026, not leave it venue-less.
- Line 52 incorrectly calls the distribution-aware mobility-assisted DFL paper
  “under review.” The resume and Scholar export identify it as ICASSP 2026.
- The current submitted MLLM jailbreak project is missing entirely.
- Lines 60-62 contain claims not clearly supported by the primary source:
  explicit 4/8-bit quantization, multi-GPU use, SLURM, and containerized
  workflows. The resume supports QLoRA, CUDA, LSF/HPC, and the named libraries,
  but these additional infrastructure claims need verification.
- The page offers no project summaries beyond one sentence, no research
  outcomes, and no links to papers, code, posters, talks, or project pages.

### `publications.html`

Purpose: present representative publications and send readers to Google Scholar.

Structure:

- Lines 35-46: one card containing four publications and a Scholar link.

Findings:

- Line 41 is materially wrong: “Boosting Targeted Adversarial Transferability”
  is listed as an ICLR 2026 submission, while the authoritative resume identifies
  it as under review at IEEE TIFS in 2026.
- Line 42 is outdated: “Distribution-Aware Mobility-Assisted Decentralized
  Federated Learning” is an ICASSP 2026 paper, not under review.
- The authoritative resume includes a submitted NeurIPS 2026 MLLM jailbreak
  paper and several additional under-review 2026 works that are absent. Selection
  is acceptable, but the criteria and statuses should be explicit.
- The Scholar export shows a substantial earlier publication record in antenna
  arrays, beamforming, sensing, and related work. A four-item list focused only
  on recent AI work can support current positioning, but it should not imply
  that it is the complete publication history.
- Publication titles are not links. There are no DOI, proceedings, arXiv,
  project, code, BibTeX, or abstract links.
- Entries use abbreviated author lists and inconsistent title styling. Consider
  a consistent citation format with the author's name emphasized and status
  labels separated from bibliographic text.
- Line 44's Scholar link is valid against the supplied profile identifier, but
  lacks `rel="noopener"` despite opening a new tab.

### `teaching.html`

Purpose: summarize teaching appointments, courses, mentorship, and instructional
approach.

Structure:

- Lines 35-44: institutions, course numbers/topics, and mentorship.
- Lines 45-54: three teaching-practice statements.

Findings:

- The page omits appointment titles and dates, making extensive experience look
  like a short course list. The resume supports Graduate Teaching Assistant,
  Assistant Professor, and Lecturer roles with date ranges.
- Line 39 lists NC State course numbers without names; the authoritative resume
  supplies the titles.
- Line 40 omits Computational Methods in Electrical Engineering from the RUET
  Assistant Professor course list.
- Line 41 says outcomes include “IEEE papers and a journal publication.” The
  resume supports five conference papers and one journal article but does not
  establish that all conference papers were IEEE publications. This wording
  should be made source-accurate.
- Lines 49-51 mix supported practices with unverified embellishment. Structured
  rubrics, inclusive learning, mentorship, and hands-on work are supported;
  reproducible notebooks and open-source classroom projects are not stated in
  the primary source and need confirmation.
- There is no material on office hours, recitations, lab/manual design, academic
  advising, course coordination, or graduate/undergraduate research mentorship,
  all of which could add credible depth from the resume.

### `news.html`

Purpose: communicate recent professional and research updates.

Structure:

- Lines 35-43: one card with two undated bullets.

Findings:

- Line 39 is stale and factually ambiguous. The targeted-transfer work is under
  review at TIFS, not ICLR, and the mobility-aware DFL work is an ICASSP 2026
  publication rather than a current submission.
- Line 40 uses the unsupported/stale “single-exposure” framing instead of the
  current reconstruction-concealment MLLM submission described in the resume.
- Neither update has a date, link, venue status, or enough detail to function as
  news.
- The page omits notable, source-supported updates such as the 2026 ICASSP
  publication and current submitted/under-review work. Awards and service may
  also be suitable news items if the user wants them public.
- Use semantic dates (`<time datetime="...">`) and reverse-chronological entries
  when this page is rebuilt.

### `resume.html`

Purpose: embed, open, and download the public resume PDF.

Structure:

- Lines 35-43: labeled viewer, open/download actions, embedded PDF, and fallback.

Findings:

- All three references correctly point to `docs/resume.pdf`, as required by
  `AGENTS.md`.
- The public PDF currently matches the authoritative updated resume source.
- The embedded `<object>` may be poorly supported or awkward on mobile browsers;
  the open/download actions are therefore important and should remain prominent.
- `.viewer .frame` uses `height: calc(100vh - 240px)` with no minimum height,
  which can produce an impractically short viewer in a small landscape viewport.
- The fallback is nested correctly but could be a direct link rather than only
  instructions to use buttons elsewhere.
- The action links are visually styled as buttons but remain links, which is
  semantically appropriate. The Open link correctly includes `rel="noopener"`.

### `contact.html`

Purpose: provide direct professional contact and external profile links.

Structure:

- Lines 35-42: email, LinkedIn, and Scholar links.

Findings:

- Line 39 uses the old/conflicting LinkedIn slug. The authoritative profile notes
  specify `https://www.linkedin.com/in/farhamdur/`.
- Line 40's Scholar profile identifier matches the authoritative notes/export.
- External links opened with `target="_blank"` lack `rel="noopener"`.
- The page is very sparse and repeats information already available on the
  homepage. It could remain intentionally minimal, but should explain the
  preferred contact purpose or add only verified professional profiles.
- Do not copy private phone, address, alternate email, references, or other
  sensitive data from the source PDFs onto this page.

### `404.html`

Purpose: GitHub Pages custom not-found response.

Findings:

- The file contains only `<h1>404 — Not Found</h1>`.
- It lacks a doctype, language, charset, viewport, title, description, shared
  styles, navigation, footer, and a route back to the homepage.
- It is visually and structurally disconnected from the rest of the site and
  is the weakest page in the repository.

## Shared navigation, footer, and visual system

### Navigation

The seven main pages repeat the same sticky header and seven-item navigation
(`index.html`, `research.html`, `publications.html`, `teaching.html`,
`news.html`, `resume.html`, and `contact.html`, lines 13-33 on each page).
Internal link targets all exist.

Strengths:

- Navigation labels are clear and consistent.
- Relative links are GitHub Pages-compatible.
- `assets/js/app.js` lines 5-6 correctly handles the repository root by treating
  an empty pathname as `index.html`.
- The active page receives a visible class.

Problems:

- The brand is a noninteractive `<div>` rather than a homepage link.
- The navigation label is placed on a wrapper `<div role="navigation">` while a
  semantic `<nav>` is nested inside it. This creates redundant navigation
  semantics; the label should be on `<nav>`.
- The active link receives only `.active`; JavaScript does not set
  `aria-current="page"`.
- The menu button does not expose `aria-expanded` or `aria-controls` and the menu
  has no stable `id`.
- The mobile menu does not close on Escape, outside click, link activation, or
  viewport transition. Focus is not managed when it opens.
- The generic visible labels “Theme” and “Menu” do not report current theme or
  menu state.
- Header action layout is repeated as the inline style
  `style="display:flex;gap:8px"` on all seven pages.

### Footer

Every full page repeats `© 2025 Md Farhamdur Reza • Signature theme` on its last
line.

Problems:

- The year is stale in 2026.
- “Signature theme” reads as template residue and has no user-facing value.
- The footer has no navigation or contextual links and is not shared through a
  maintainable include mechanism.
- `404.html` has no footer.

### Shared visual patterns

`assets/css/styles.css` defines a dark default theme, a light class-based theme,
sticky blurred header, mastheads, cards, badges, a 12-column grid, hero portrait,
PDF viewer, footer, and one responsive breakpoint.

Strengths:

- CSS custom properties keep colors and dimensions reasonably centralized.
- The system font stack avoids a remote-font dependency.
- Layout uses modern Grid/Flexbox and a bounded content width.
- Animation is limited to users who have not requested reduced motion.
- Cards, borders, radii, and shadows create consistent page rhythm.

Problems:

- The entire stylesheet is compressed into 19 long lines. This is valid but
  makes review, maintenance, and line-specific debugging unnecessarily hard.
- `--surface` and `--acc2` are defined but effectively unused in the current CSS.
- Several styles are embedded in HTML rather than shared CSS: header actions on
  every page, homepage heading margin, and homepage grid spans.
- There is no explicit `:focus-visible` styling for links or buttons.
- The light-theme accent `#60a5fa` on a white card/background is likely
  insufficient for normal-size link text under WCAG contrast requirements and
  should be measured and adjusted before release.
- `color-mix(in oklab, ...)` and `backdrop-filter` are progressive modern
  features, but no simple fallback background is defined before the `color-mix`
  declaration for older browsers.
- The portrait wrapper crops overflow, but the portrait image itself has no
  width/height/object-fit rule. The intended JPEG's tall aspect ratio will not
  reliably fill the square crop as designed.
- Global section padding creates generous but somewhat repetitive vertical
  space on pages with only one small card.

## Responsive-design audit

The only responsive rule is `assets/css/styles.css` line 19 at 920 px.

Issues:

- The homepage `.grid` remains a 12-column grid at all widths, and its two cards
  retain inline `grid-column: span 7` and `span 5`. On phones they remain side by
  side in very narrow columns instead of stacking.
- The mobile navigation is `position: fixed` below the header but has no
  `max-height` or overflow behavior. At short landscape heights it can cover
  content and may extend beyond the viewport.
- The header uses a fixed 64 px height, a full name, and two controls without a
  narrow-phone strategy. The brand/control combination can crowd or overflow at
  very small widths or increased text zoom.
- The breakpoint is broad and singular; there are no refinements for very small
  phones, intermediate tablet widths, or large screens.
- The PDF frame's viewport-based height can become too small on mobile landscape
  and embedded PDFs may not be usable on all mobile browsers.
- Tap targets are not guaranteed to meet a comfortable 44 by 44 CSS-pixel size;
  navigation links and header buttons use relatively small padding.
- There is no CSS protection for long URLs, publication titles, or other
  unbroken text that future content may introduce.
- The portrait's 4.2 MB source is far larger than its 120-160 px display size,
  causing unnecessary mobile bandwidth, decode cost, and Largest Contentful
  Paint risk.

## Accessibility audit

Positive elements:

- Main pages declare `lang="en"` and include viewport metadata.
- Each standard page has one visible `h1` and subsequent `h2` headings.
- Native links and buttons are used rather than click handlers on generic
  elements.
- The PDF viewer region and object type are labeled.
- Reduced-motion preferences are respected.

Issues:

- `404.html` lacks a language declaration and all basic document structure.
- No visible `:focus` or `:focus-visible` style is defined.
- Mobile menu state and active-page state are not announced (`aria-expanded`,
  `aria-controls`, and `aria-current` are absent).
- Mobile menu keyboard/focus behavior is incomplete, as described above.
- The navigation wrapper uses redundant ARIA instead of labeling the native
  `<nav>`.
- “Profile photo” is weak alt text and is duplicated for two different image
  contexts on the homepage. Header avatars repeated on every page may be
  decorative and should not add repetitive screen-reader noise.
- Theme state is communicated only visually; the button accessible name does not
  say whether activating it will switch to light or dark mode.
- There is no skip link for bypassing repeated navigation.
- Link color/contrast in the light theme needs remediation and formal contrast
  verification.
- External links do not indicate that they open a new tab; this is not always a
  strict failure, but it can be disorienting.
- The PDF fallback tells users to use “the buttons above” instead of providing a
  self-contained fallback link.
- The active link hover/background state should be verified under high contrast
  and forced-color modes.

## SEO and structured-data audit

All seven standard pages include a unique title, a meta description, Open Graph
title/description/type, and identical Person JSON-LD. This is a useful start but
is incomplete.

Issues affecting every standard page:

- JSON-LD `url` is an empty string, which is a placeholder and violates the
  repository instruction against empty structured-data values.
- JSON-LD `sameAs` includes the conflicting old LinkedIn slug.
- The identical Person block is duplicated on every page and can drift. It also
  does not distinguish the person from the current `WebSite`/`WebPage`.
- There is no canonical link.
- Open Graph metadata lacks `og:url`, `og:image`, `og:site_name`, and image alt
  text. There are no Twitter/X card fields.
- Meta descriptions such as “Overview, hero, highlights,” “Representative
  works,” and “Reach out” are generic and provide little search-result value.
- The homepage title begins with the generic word “Home” rather than leading
  with the person's name and expertise.
- No page specifies a social-preview image.
- There is no sitemap or robots file. These are optional for a small GitHub Pages
  site but could improve explicit discovery once the canonical public origin is
  confirmed.
- Publication entries have no scholarly metadata, stable external identifiers,
  or direct links, limiting discoverability.
- `404.html` has no `<title>` or `noindex` handling.

The JSON-LD job title “Ph.D. Candidate” and NC State affiliation remain
consistent with the primary resume. The supplementary LinkedIn export contains
a historical expected completion date, but the primary resume says the Ph.D. is
in progress; per source precedence, the site should not infer graduation.

## Broken, incomplete, and placeholder links/assets

### Confirmed internal failures

- `assets/img/profile.jpg` is missing and is referenced in the header of all
  seven standard pages (`line 16`) and the homepage hero (`index.html` line 37).
  JavaScript-free inline `onerror` fallback loads `assets/img/profile.svg`, so
  visitors see a placeholder instead of the real portrait.

### Confirmed existing internal targets

- All seven primary HTML navigation targets exist.
- `favicon.svg`, `assets/css/styles.css`, and `assets/js/app.js` exist.
- `docs/resume.pdf` exists and is referenced correctly by `resume.html`.
- The `onerror` fallback `assets/img/profile.svg` exists.

### Conflicting or incomplete external links

- Old LinkedIn URL appears in JSON-LD on all seven pages, `index.html` line 62,
  and `contact.html` line 39. It conflicts with the authoritative profile-notes
  URL. Live redirect behavior could not be verified due LinkedIn blocking.
- Google Scholar links use the correct profile identifier from the authoritative
  notes. Some omit the supplementary `oi=ao` query parameter, which is not
  required for profile identity.
- All external `target="_blank"` links except the resume Open action omit
  `rel="noopener"`.
- There are no direct publication, project, code, DOI, ORCID, GitHub, laboratory,
  or institutional-profile links. Do not invent them; add only user-supplied or
  independently verified URLs.
- `README.md` line 3 instructs maintainers to replace
  `assets/img/profile.jpg`, perpetuating the extension mismatch and reading like
  unfinished template documentation.

## Outdated, conflicting, or unverified professional information

### Confirmed corrections supported by authoritative sources

- `publications.html` line 41: targeted-transfer work is under review at IEEE
  TIFS in 2026, not ICLR 2026.
- `publications.html` line 42 and `research.html` line 52: the distribution-aware
  mobility-assisted DFL work is an ICASSP 2026 publication, not under review.
- `news.html` line 39: the combined “ICLR/ICASSP submissions” wording is stale
  and conflates two works with different current venues/statuses.
- LinkedIn references throughout the site conflict with the canonical URL in
  `private-input/profile-notes.md`.
- Every standard page's footer says 2025 and is stale as of this audit.

### Claims requiring confirmation rather than silent editing

- “Single-exposure jailbreak” language in `index.html` and `news.html` does not
  appear in the current resume.
- CGBA “strong black-box transfer” in `index.html` is not the framing used by the
  resume.
- SLURM, containerized workflows, explicit 4/8-bit quantization, and multi-GPU
  infrastructure in `research.html` are not established by the primary source.
- “Reproducible notebooks” and “open-source projects” in `teaching.html` are not
  established by the primary source.
- “IEEE papers” as a mentorship outcome in `teaching.html` is more specific than
  the resume's “conference papers.”

### Source conflict requiring caution

The LinkedIn export includes a historical Ph.D. date range ending in 2026, while
the current resume says Fall 2021-present. The resume is authoritative, so the
site's current “Ph.D. candidate” status should remain until the user supplies a
new primary source or explicitly confirms a status change.

## Missing or weak content

- Homepage: no prominent resume/publications call to action; current projects
  lack links and the positioning is repeated rather than developed.
- Research: no dedicated MLLM jailbreak project, project outcomes, methods,
  collaborator context, or verified artifacts.
- Publications: only four text-only entries; no categorization by published,
  accepted, submitted, or under review; no direct links or complete citation
  details; earlier body of work is invisible.
- Teaching: roles, dates, course names, responsibilities, advising, and concrete
  evidence of teaching impact are underrepresented.
- News: only two undated and outdated bullets.
- Resume: good functional baseline, though mobile fallback could be stronger.
- Contact: minimal but functional; LinkedIn must be corrected.
- Site-wide: honors/awards, professional service/reviewing, selected projects,
  education, and institutional/lab context are absent. These need not all become
  new pages, but carefully selected source-backed content would strengthen the
  professional narrative.

No changing citation count should be added to the site. The Scholar export is a
point-in-time reference, not suitable for a hard-coded metric.

## Maintainability and future updates

Current risks:

- Seven pages duplicate approximately the same head metadata, JSON-LD, header,
  seven navigation links, controls, and footer. Any profile URL, year, menu, or
  accessibility change must be repeated consistently.
- HTML heads and closing structures are compressed onto long lines, and the CSS
  is minified despite being source code. This makes diffs and reviews difficult.
- Repeated inline styles undermine the shared stylesheet.
- Publication and news content has no consistent reusable entry schema, which
  contributed to stale status labels.
- `README.md` does not document local preview, deployment, source precedence,
  content-update steps, or verification.
- `.gitignore` omits `.DS_Store`; one such file is currently staged and another
  is untracked.
- There is no automated internal-link, missing-asset, HTML, or accessibility
  check.

Zero-build-compatible improvements:

1. Reformat HTML/CSS as readable source and consolidate inline styles into
   `assets/css/styles.css`.
2. Define a documented page template and an update checklist in `README.md`,
   even if shared markup remains manually duplicated.
3. Use consistent HTML structures/classes for publication and news entries,
   including explicit status and date fields.
4. Add a lightweight repository script only if desired to check internal links,
   required files, duplicate IDs, and common metadata. It can remain a
   maintainer tool without becoming a production dependency or build step.
5. Add `.DS_Store` and other local artifacts to `.gitignore` while preserving
   `private-input/`.
6. Keep canonical profile values in a clearly documented maintenance section so
   repeated metadata can be updated safely.

A templating system could remove duplication more fully, but Jekyll or another
generator would introduce a build/authoring workflow change. Per `AGENTS.md`, do
not make that migration without explicit approval. Injecting headers and content
with client-side JavaScript is not recommended because it would weaken
no-JavaScript navigation, accessibility, and SEO.

## Dependencies and duplicated styles

- No unnecessary runtime dependency exists. The site uses only browser-native
  HTML, CSS, JavaScript, and local assets.
- No external font, icon library, analytics script, or UI framework is loaded.
- Duplicate CSS rules are limited because most styles are centralized, but the
  same inline header-action declaration is repeated on all seven pages.
- The larger duplication problem is repeated HTML and metadata rather than
  repeated selectors.
- The unused `--surface` and `--acc2` custom properties can be removed if a
  redesign does not use them.
- The large portrait is an unnecessary asset cost in its current form; provide
  appropriately resized modern and fallback formats without adding a runtime
  dependency.

## Recommended implementation order

No changes are implemented by this audit. A future remediation pass should use
this order:

1. Protect privacy and basic correctness: sanitize/resize the portrait, fix its
   path, remove `.DS_Store`, and correct verified venue/status/LinkedIn data.
2. Repair mobile and accessibility fundamentals: stack the homepage grid,
   improve narrow-header/menu behavior, add focus states and stateful ARIA, and
   correct image alternatives.
3. Upgrade publication, research, teaching, and news content using only verified
   authoritative facts and links.
4. Complete page metadata, canonical/social data, and structured data after the
   production origin and social-preview asset are confirmed.
5. Rebuild the 404 page within the shared visual system.
6. Reformat source files, remove inline styles, improve `README.md`, and add
   zero-build maintenance checks.

## Verification record and limitations

- Inspected all repository files outside `.git`.
- Extracted and compared the authoritative PDFs and public resume.
- Confirmed the public resume and updated resume source have identical SHA-1
  hashes at audit time.
- Parsed every HTML `href`, `src`, and `data` reference and checked local target
  existence.
- Confirmed all internal navigation and resume targets exist.
- Confirmed the `.jpg` portrait targets are missing.
- Inspected CSS and JavaScript behavior statically.
- Inspected portrait dimensions, size, file type, and metadata presence.
- Did not modify or publish any private source.
- Did not run a full browser/assistive-technology matrix or formal automated
  WCAG audit; responsive and accessibility findings are based on code inspection.
- Could not conclusively verify live LinkedIn or Scholar HTTP responses because
  those services rejected automated fetches.
