# Website Reference Research

Research date: 2026-07-13

## Scope and approach

This document reviews ten personal websites belonging to AI/ML researchers,
faculty members, research scientists, and recent Ph.D. graduates. The references
were found through web search and inspected in a browser. A small mobile sample
was also checked at a 390 by 844 CSS-pixel viewport.

The goal is not to reproduce any reference. Each entry records only a reusable
design or content lesson. No wording, source code, branding, layout, or visual
identity should be copied.

The comparison with this repository uses the findings in `WEBSITE_AUDIT.md` and
the current plain-HTML/CSS/JavaScript implementation. Recommendations preserve
the zero-build GitHub Pages architecture required by `AGENTS.md`.

## 1. Reference websites

### [Josh Hills](https://josh-hills.github.io/)

Reusable lesson: place a specific research role and a short, evidence-based
summary immediately beside the name, followed by a compact row of high-value
destinations such as résumé, GitHub, Scholar, and LinkedIn. Publication cards
benefit from visible status labels and a small, consistent set of links such as
Paper and Website. On the inspected mobile viewport, the page avoided horizontal
overflow and reduced the desktop navigation to a menu control.

### [Zifan (Sail) Wang](https://zifanw.github.io/)

Reusable lesson: a brief About section can establish current affiliation and
research focus before a selective, visual publication list. Each publication is
more useful when its title, venue/status, authors, thumbnail, and artifact links
are grouped as one scannable unit. A separate complete-publications page keeps
the homepage selective without hiding the broader record.

### [Brian Jay Tang](https://www.bjaytang.com/)

Reusable lesson: research projects become legible to both academic and industry
readers when each entry explains the problem, the system or method, the outcome,
and the researcher's contribution, then offers direct Paper, Code, or Blog links.
Distinct routes for News, Papers, Mission, and Service show how a substantial
record can remain navigable.

### [Luca Baroni](https://lucabaroni.com/)

Reusable lesson: a single-page structure can work for an early-career researcher
when the navigation maps directly to About, Publications, CV, and Contact. Clear
chronology for education and research experience supports credibility without a
long biography. The inspected mobile page had no horizontal overflow.

### [Justin Shenk](https://www.justinshenk.com/)

Reusable lesson: distinguish a concise résumé from a full academic CV and make
both easy to find near the professional summary. A compact social/profile cluster
can connect GitHub, LinkedIn, email, and Google Scholar without turning the hero
into a directory. The site also demonstrates the value of stating the current
research question rather than listing only broad interest areas.

### [Dorsa Sadigh](https://dorsa.fyi/)

Reusable lesson: a faculty homepage can remain short when it clearly states the
research intersection and delegates detailed research and publications to a lab
site. Teaching, biography, and contact remain first-class destinations. For this
repository, the transferable principle is deliberate separation of personal
identity from detailed project material—not dependence on a lab site.

### [Been Kim](https://beenkim.github.io/)

Reusable lesson: selected media, talks, demonstrations, and project imagery can
make abstract interpretability research more understandable. A candid pointer to
Google Scholar is useful when a hand-maintained publication list is intentionally
selective. This also illustrates why a site should make the boundary between
curated highlights and the authoritative complete record explicit.

### [Chelsea Finn](https://robotics.stanford.edu/~cbfinn/)

Reusable lesson: durable academic sites prioritize the essentials—current role,
one clear research statement, CV, Scholar, lab affiliation, news, talks,
students, and teaching. Rich visual effects are not necessary for authority when
the information hierarchy and links are strong.

### [Percy Liang](https://cs.stanford.edu/~pliang/)

Reusable lesson: research can be organized around a small number of named themes
that link outward to papers, software, groups, and executable artifacts. Dense
professional content remains useful when link labels are explicit and the page
serves as a dependable index rather than a promotional landing page.

### [Lilian Weng](https://lilianweng.github.io/)

Reusable lesson: date-driven posts, archives, tags, and search make a long-lived
technical site easy to revisit. Consistent typography and restrained page chrome
allow technical titles and summaries to carry the visual hierarchy. For the
current repository, the transferable element is the dated, maintainable update
pattern rather than adopting a full research blog.

## 2. Useful patterns across the references

### A. Research identity appears before credentials

The strongest homepages answer three questions in the first viewport:

1. Who is this person?
2. What specific problems do they work on?
3. What should a visitor open next?

The current `index.html` has the right ingredients, but “Trustworthy &
Generative AI • Adversarial ML • Alignment” is repeated and remains broader than
the authoritative resume. A stronger version would pair the name and current
role with one short statement connecting adversarial ML, multimodal safety,
alignment, and decentralized learning, followed by direct links to selected
work, CV, Scholar, GitHub if verified, and LinkedIn.

### B. The hero is compact and functional

A professional research hero does not need a full-screen photograph or animated
background. The recurring effective pattern is:

- a properly sized portrait;
- name and current role;
- one or two sentences of research positioning;
- a restrained set of primary links;
- optionally, one current-status line.

This suits the repository's existing `.hero` structure. The portrait path,
cropping, file size, and metadata must first be corrected as documented in
`WEBSITE_AUDIT.md`.

### C. Selected work is presented as evidence, not a topic list

The best selected-work sections treat each paper or project as a compact record:

- title;
- venue and accurate status;
- author line;
- one-sentence contribution or outcome;
- a small link set: Paper, Project, Code, Data, Talk, or BibTeX, only when those
  destinations are verified;
- an optional meaningful thumbnail.

The current `research.html` and `publications.html` use bare list items. They
communicate topics but provide no path to inspect the work. A shared publication
entry pattern would improve credibility and reduce inconsistent status wording.

### D. Homepage selection and complete record are separate

Several references curate a short homepage list while pointing to a full
publications page or Google Scholar. This is a good fit here:

- homepage: two to four signature/current works;
- `publications.html`: selected publications grouped by status or year;
- Google Scholar: complete and changing publication/citation record.

This preserves the desired current AI identity without erasing the earlier
publication record visible in the authoritative Scholar export. Citation counts
should not be hard-coded.

### E. Links are placed at the object they describe

Paper and code links are most useful inside the corresponding publication or
project entry, not only in a global social-links row. The current site links to
Scholar but not to individual research artifacts. Future links should be
verified and attached directly to the relevant entry.

### F. News is dated, short, and reverse chronological

Effective update sections use dates and specific events: a paper acceptance, a
new preprint, an award, a talk, or a role change. The current `news.html` has two
undated, stale bullets. A compact list using semantic `<time>` elements would be
more trustworthy and easier to maintain.

### G. CV and profile links are visible early

CV, Scholar, GitHub, and LinkedIn links should be reachable from the homepage
without opening a menu and should reappear in a restrained footer or contact
area. This repository already exposes Scholar and LinkedIn, but the CV is less
prominent, the LinkedIn slug conflicts with the authoritative notes, and no
verified GitHub profile is currently supplied in the authoritative sources.

Do not infer a GitHub URL. Add it only after the user provides or verifies it.

### H. Content hierarchy does most of the visual work

Strong examples rely on consistent headings, comfortable line length, visible
dates/statuses, restrained color, and predictable spacing. The lesson is not to
add decorative complexity; it is to make scanning effortless. This supports
retaining local system fonts, minimal JavaScript, and a small CSS surface.

### I. Responsive behavior is intentionally simplified

In the mobile sample, the inspected sites avoided horizontal overflow and either
collapsed navigation or used a compact link treatment. The current repository's
homepage grid does not stack and its menu lacks complete interaction state. A
mobile design should make the content one column, reduce header competition, and
keep primary actions comfortably tappable.

### J. Long-term maintenance is visible in the content model

Sites that age well tend to use repeatable units: dated news entries,
publication records with the same fields, and a clear distinction between
selected and complete work. The repository can adopt those semantic patterns in
plain HTML without introducing a framework.

## 3. Patterns that would not suit this website

### A. Copying a lab-style or senior-faculty information density

Large student rosters, extensive talk archives, recruiting instructions, and
lab-level navigation make sense for established faculty but would distract from
Md Farhamdur Reza's current goals. The site should emphasize personal research
contributions, teaching, selected work, and availability—not imitate a lab hub.

### B. Turning the site into a full technical blog

Archives, tags, and search are valuable when there is a sustained publication
cadence. Adding a blog now would create empty navigation and a significant
maintenance obligation. Use a dated News section first; introduce writing only
when there are several durable articles to publish.

### C. Heavy media galleries

Robotics and HCI work often benefits from videos and large visual demonstrations.
This site focuses on adversarial ML, multimodal safety, alignment, and federated
learning, where carefully selected diagrams or paper thumbnails may help, but a
media-heavy gallery would increase bandwidth and compete with the evidence.

### D. Highly dense single-page CV presentation

Placing all education, appointments, awards, service, teaching, projects, and
publications on the homepage would weaken the current multi-page architecture and
make mobile scanning harder. Keep the homepage selective and let the CV remain
the complete chronological record.

### E. Overly minimal legacy markup

Older faculty sites demonstrate durability, but some omit semantic landmarks,
responsive navigation, descriptive page metadata, and modern accessibility
features. Their content-first discipline is reusable; their markup and visual
limitations are not.

### F. Framework-heavy portfolio effects

Animated page transitions, custom cursors, WebGL backgrounds, parallax, typing
effects, and client-rendered content would add little academic value while
hurting performance, accessibility, and maintenance. They also conflict with the
zero-build constraint.

### G. Skill meters, citation counters, and prestige decoration

Progress bars for skills, live-looking metrics without a reliable data source,
venue-logo walls, and excessive badges can read as promotional rather than
scholarly. Use specific evidence and accurate publication status instead.

### H. Copying reference branding

Do not reproduce another person's typography pairing, color palette, card
geometry, illustration style, icon set, wording, or page composition. The goal is
to adopt information-design principles and build a distinct visual identity from
the site's own content.

## 4. Recommended visual direction

### Direction: precise, calm, research-forward

The site should feel like a modern academic dossier rather than a generic dark
technology template. Preserve the lightweight foundation but refine it into a
more editorial visual system.

Recommended characteristics:

- Use the person's name as the homepage's dominant heading, followed by current
  role and a concise, source-verified research statement.
- Use a professionally cropped, optimized portrait at a modest size; do not make
  photography the main visual identity.
- Retain a dark option, but make the light theme equally intentional and ensure
  link/focus contrast passes WCAG requirements.
- Reduce heavy shadows and repeated large cards. Use whitespace, subtle rules,
  compact status labels, and typography to organize content.
- Use one restrained accent color with a second color only for meaningful states,
  not decoration.
- Keep body text near a readable 65-75 character line length.
- Use publication/project thumbnails only when they explain the work; otherwise
  prefer a clean text entry.
- Replace textual “Theme” and “Menu” controls with accessible controls whose
  state and purpose remain clear. Icons may supplement but must not replace
  accessible names.
- Give keyboard focus a strong visible treatment and design touch targets for
  mobile use.
- Keep animation optional, subtle, and nonessential.

The visual tone should communicate technical rigor, clarity, and approachability.
It should not rely on futuristic gradients, neon effects, or copied conference
branding to signal AI expertise.

## 5. Recommended information architecture

The existing filenames should remain stable. A refined architecture can improve
hierarchy without breaking GitHub Pages URLs.

### Primary navigation

1. **Home** — identity, current role, research statement, selected work, recent
   updates, and primary profile links.
2. **Research** — three or four research themes followed by selected projects,
   each with a short contribution statement and verified artifacts.
3. **Publications** — selected publications grouped clearly by published/accepted
   and submitted/under-review status, with a link to the complete Scholar record.
4. **Teaching** — roles, dates, named courses, mentorship, and a concise teaching
   approach.
5. **News** — dated reverse-chronological updates.
6. **CV** — open/download actions and embedded viewer fallback.

`contact.html` should remain available to preserve its URL, but Contact does not
necessarily need to occupy scarce mobile primary-navigation space. It can remain
in the desktop navigation or move to the footer if email and verified profiles
are already prominent on Home. This is a design choice, not an instruction to
remove the page.

### Homepage sequence

1. Compact hero: portrait, name, role, research statement, CV/Scholar/verified
   profile links.
2. Selected research: two to four high-value works with direct artifact links.
3. Current research themes: a short, coherent map of the research agenda.
4. Recent updates: three dated items with a route to all news.
5. Teaching/mentorship preview: one concise evidence-based block if space allows.
6. Footer: email, verified profiles, navigation, and current copyright.

### Research and publication entry model

Use consistent fields so updates do not become prose rewrites:

- title;
- type or theme;
- venue and year;
- status;
- authors;
- one-sentence contribution;
- optional thumbnail with meaningful alt text;
- verified artifact links.

For work that is submitted or under review, use explicit neutral status labels
and avoid venue styling that could imply acceptance.

### News entry model

Each entry should contain:

- machine-readable date;
- one concise update;
- optional link to the related publication, project, event, or official source.

This pattern is simple enough to maintain manually in static HTML.

## 6. Risks and maintenance implications

### Repeated shared markup

The current seven-page site duplicates metadata, JSON-LD, header, navigation,
and footer. A visual refresh will multiply the cost of that duplication unless
shared changes are carefully applied to every page. Within the zero-build
constraint, use a documented canonical page template and a checklist. Do not
inject essential navigation through JavaScript, because that would harm
resilience, accessibility, and SEO.

If the site later grows substantially, a static-site generator could reduce
duplication, but that requires explicit approval under `AGENTS.md`.

### Publication-status drift

Recent submissions and reviews change quickly. Status must remain a discrete,
easy-to-find field rather than being buried inside promotional prose. Every
update should be checked against the authoritative resume and Scholar source.
Changing citation counts should remain off the site.

### Link maintenance

More Paper, Code, Project, and social links improve usefulness but create more
failure points. Add only verified URLs, use descriptive labels, and include link
checking in the completion workflow. The current authoritative sources do not
provide a verified GitHub profile, so GitHub integration remains pending user
confirmation.

### News freshness

A News page creates an expectation of recency. Prefer a small number of dated,
meaningful entries over frequent low-value updates. If updates stop, the section
should still read as a dated archive rather than “latest” content.

### Image and media costs

Thumbnails and diagrams can clarify research but must be optimized, locally
hosted where licensing permits, and supplied with meaningful alternatives. The
current portrait already demonstrates the risk of oversized files and retained
metadata. Avoid embedding large video players on the homepage.

### Accessibility regressions

Custom cards, icon-only links, menus, theme controls, and status chips can reduce
accessibility if semantics are treated as decoration. Keep native links and
buttons, visible focus, logical headings, accurate alt text, sufficient contrast,
and stateful ARIA. Test the mobile menu with keyboard and screen-reader-relevant
state, not only by visual resizing.

### Visual sameness

Many academic templates converge on the same portrait-plus-card design. A
distinct result should come from source-verified research framing, careful
typography, restrained color, and meaningful project artifacts—not copied
composition or ornamental novelty.

### Browser and CSS compatibility

The current CSS uses modern features such as `color-mix()` and
`backdrop-filter`. Preserve graceful fallbacks and avoid making essential
legibility dependent on advanced effects. Keep JavaScript minimal and make
content/navigation usable if scripts fail.

### Maintenance budget

Every new section should justify its ongoing cost. The recommended design adds
structure rather than a large feature surface: reusable publication entries,
dated news, verified links, and improved navigation. It does not require a
framework, CMS, analytics service, remote font, icon package, or production
dependency.

## Recommended synthesis for this repository

The most suitable combination is:

- the immediate identity and link clarity seen in early-career researcher sites;
- the artifact-rich selected-work entries used by strong research portfolios;
- the durability and content-first discipline of established faculty sites;
- the dated maintenance model of well-run technical publications;
- the repository's existing fast, local, zero-build foundation.

That combination would improve professional credibility and usability without
turning the site into a clone, a lab portal, a full blog, or a JavaScript-heavy
portfolio.
