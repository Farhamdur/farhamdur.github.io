# Website Redesign Plan

## Goals and audiences

Present a clear research identity in trustworthy AI, adversarial machine
learning, multimodal AI safety, alignment, generative attacks, and decentralized
federated learning. The site serves academic collaborators, faculty and research
hiring committees, industry research teams, students, and readers seeking papers
or a CV.

## Information architecture

Primary navigation is Home, Research, Publications, Teaching, News, and CV.
Contact remains a stable page and appears on Home and in the footer. Home leads
with identity and research focus, followed by selected work, current directions,
dated updates, teaching, and contact.

Research uses theme-based project records. Publications separates published work
from submitted and under-review manuscripts. Teaching is chronological. News is
dated and reverse chronological. CV retains open, download, embed, and fallback
paths. The 404 page uses the shared visual and navigation system.

## Presentation and visual system

Project and publication records use consistent title, theme, venue/year, status,
contribution, author, and verified-link fields. The design is light-first with an
optional dark theme, system typography, restrained color, thin borders, minimal
shadows, 44-pixel controls, visible focus, and purposeful optimized imagery.

## Responsive, accessibility, and SEO requirements

Layouts are mobile-first and single-column by default, with refinements near
480, 768, and 1024 pixels. Navigation is keyboard operable and stateful. Pages
use semantic landmarks, logical headings, skip links, descriptive image text,
reduced-motion support, high-contrast focus, and WCAG AA colors.

Every page has a unique title and description, canonical URL, Open Graph and X
metadata, a social card, and valid structured data. Sitemap and robots files use
`https://farhamdur.github.io` as the canonical origin.

## Files and phases

Update all existing HTML pages, shared CSS and JavaScript, portrait assets,
README, and `.gitignore`. Create an optimized WebP portrait, social card,
sitemap, robots file, and this plan. Preserve the plain HTML/CSS/JavaScript
architecture and `docs/resume.pdf`.

Implementation phases are content reconciliation, shared foundation and assets,
core pages, supporting pages, metadata and maintenance, then full verification.

## Confirmation defaults

Omit GitHub until its URL is verified. Include submitted and under-review work
with neutral labels. Remove unsupported single-exposure, transfer, infrastructure,
and teaching claims. Do not publish citation counts or private details. Use the
current resume and Scholar materials for status immediately before each update.

## Acceptance criteria

Preview through a local HTTP server. Verify all links and assets; navigation,
theme, CV, and menu behavior; 320–1440 pixel layouts; keyboard and focus behavior;
heading and landmark structure; image metadata and sizes; factual accuracy;
canonical and structured metadata; console output; and absence of private or
unrelated files from the final change set.
