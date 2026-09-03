# FinTech Tomorrow Website — Business Requirements

**Product:** Official FinTech Tomorrow digital platform  
**Document type:** Business Requirements Document (BRD)  
**Target state:** Full production website and publishing platform, not the current static MVP  
**Status:** Baseline for product, content, design, and implementation planning  
**Version:** 1.0 — 3 September 2026

## 1. Executive summary

The FinTech Tomorrow website is the official public home for the brand founded by Gegham Zakharyan. It must establish credibility in banking technology, publish practical insights, present working MVPs, grow an owned audience, and convert relevant visitors into conversations with banks, fintechs, technology partners, and industry professionals.

The full product must evolve from a static landing page into a maintainable content and project platform with a CMS, structured insight library, live demo catalog, strong search/SEO, newsletter and contact workflows, analytics, accessibility, privacy controls, security, performance, and editorial governance.

## 2. Problems to solve

1. FinTech Tomorrow content and project links are distributed across LinkedIn and standalone demo URLs without one canonical, searchable source.
2. Social platforms do not provide full ownership of audience reach, navigation, content structure, or historical discoverability.
3. Potential collaborators need a concise explanation of the brand, expertise, project value, and how to start a conversation.
4. Static site updates require code changes, increasing delay and the risk of stale project/content information.
5. Working MVPs need consistent descriptions, screenshots, status, documentation, and related insights.
6. The brand needs privacy-respectful measurement of which topics and projects generate useful engagement.
7. Search engines and AI discovery need structured, authoritative, canonical content rather than social snippets alone.
8. Contact and subscription flows must limit spam and handle personal data responsibly.

## 3. Product vision

Create a credible, independent banking and fintech lab online: visitors can understand an important problem, read the analysis, test a working concept, and start a relevant professional conversation in a few clear steps.

## 4. Business objectives and success measures

| Objective | Initial success measure |
|---|---|
| Establish authority | Consistent publication of high-quality banking/fintech insights and project case studies |
| Increase discovery | Growth in qualified organic and LinkedIn referral traffic to canonical content |
| Demonstrate capability | Every active MVP has a complete project page, live demo, problem statement, workflow, and next-step concept |
| Build owned audience | Measurable, consented newsletter subscriptions and returning readers |
| Generate conversations | Qualified contact submissions attributable to content/project journeys |
| Improve engagement | Track project opens, article completion, CTA conversion, and return visits without unnecessary personal profiling |
| Maintain trust | No stale/broken featured links; accessibility, security, privacy, and performance targets met |

Targets and analytics events must be baselined after launch; vanity traffic must not replace qualified engagement measures.

## 5. Audiences and personas

| Audience | Primary need |
|---|---|
| Bank executives and technology leaders | Strategic issues, practical solutions, credibility, and collaboration path |
| Architecture/engineering/platform leaders | Detailed patterns, tradeoffs, working demos, and implementation thinking |
| Digital banking/product/operations leaders | Business problem, user workflow, value, and operating-model impact |
| Risk/compliance/resilience/data leaders | Governance, controls, evidence, and regulatory implications |
| Fintech and technology partners | Shared opportunity, complementary capability, and contact route |
| Recruiters/industry peers/speakers/media | Founder profile, expertise, point of view, and selected work |
| Subscribers/followers | Consistent, relevant insight notifications and easy unsubscribe/preferences |
| Site editor/administrator | Safe, fast publishing without code changes and with approval/version history |

## 6. Brand and editorial principles

1. Practical banking technology—working ideas, not generic trend summaries.
2. Clear distinction between an MVP/concept, planned product, production capability, opinion, and verified fact.
3. Evidence-backed writing with direct sources and publication/update dates.
4. Independent voice; sponsorship or commercial relationships disclosed.
5. No real bank/customer/confidential data in public demos or content.
6. Accessible, mobile-first, fast, professional, and consistent visual identity.
7. Content should be understandable to business and technology readers without unnecessary jargon.

## 7. Business scope

### 7.1 In scope

- Public home, about/founder, projects, project detail, insights/articles, topics, contact, privacy, terms, accessibility, and subscription pages.
- Structured project catalog for AI Governance, BankGraph, DORA Resilience, AI Banking Operations Copilot, Payment Data Readiness, and future projects.
- CMS/editorial workflow for drafts, review, scheduling, publishing, updates, archive, and redirects.
- Article/project relationships, topic taxonomy, related content, author/source metadata, social preview, and sharing.
- Search, filters, pagination, RSS, sitemap, structured data, canonical URLs, and SEO controls.
- Contact/inquiry qualification, consent, anti-spam, acknowledgment, routing, retention, and export/deletion controls.
- Newsletter subscription, double opt-in where required, preferences, unsubscribe, and provider integration.
- Privacy-respecting analytics, conversion events, consent/cookie handling where applicable, and dashboards.
- Performance, accessibility, security, backup/recovery, monitoring, broken-link checks, and editorial audit.
- Custom domain, HTTPS, email/domain verification, and environment-specific configuration.

### 7.2 Out of scope for initial full release

- A paid customer portal, full SaaS account area, or bank-data processing.
- Hosting production bank workloads inside the marketing website.
- Open public comments without a moderation and abuse-control operating model.
- Republishing copyrighted source content beyond permitted quotation/summary/linking.

## 8. Required business capabilities

1. **Brand storytelling:** articulate mission, focus areas, founder credibility, and point of view.
2. **Project portfolio:** present problems, outcomes, capabilities, screenshots, documentation, status, and live demos.
3. **Insight publishing:** create evidence-backed articles, briefs, and updates with professional metadata and navigation.
4. **Discovery:** search, topic filters, related content, SEO, social previews, RSS, and machine-readable structured data.
5. **Audience growth:** subscription and sharing with explicit consent/preferences.
6. **Qualified engagement:** route inquiries by organization, interest, project, and collaboration type.
7. **Editorial governance:** controlled draft/review/schedule/publish/update/archive with versions and link integrity.
8. **Measurement:** understand useful journeys and conversions while respecting privacy.
9. **Operational quality:** keep pages fast, accessible, secure, observable, recoverable, and easy to maintain.

## 9. Core business processes

### 9.1 Publish an insight

An editor creates a draft with title, summary, body, sources, author, topics, cover image/alt text, SEO/social metadata, disclosure, and related projects. A reviewer validates quality and sources. The editor schedules or publishes; the platform creates canonical metadata, sitemap/RSS updates, and social-share preview. Later edits preserve update date and version history.

### 9.2 Publish or update a project

An editor records the problem, audience, product concept, capabilities, screenshots, live demo, repository/documentation links, status, privacy/data note, and related insights. Link/status monitoring identifies unavailable demos. Major status changes require review.

### 9.3 Handle an inquiry

A visitor submits minimal contact information, organization, subject/project, collaboration type, message, and consent. Anti-spam controls validate it, the site acknowledges receipt, and the inquiry is routed securely. Authorized users manage retention, export, and deletion requests.

### 9.4 Manage a subscription

A visitor submits an email and consent/preferences, confirms if configured, receives only selected communications, and can change preferences or unsubscribe easily. Provider status and consent evidence remain synchronized.

## 10. Business rules

1. Every public article/project must have owner, status, publish/update dates, canonical URL, summary, metadata, and accessibility-compliant media.
2. External factual claims must link to direct sources; source dates and event dates must not be confused.
3. Draft, scheduled, archived, and restricted content must not be indexed or exposed through API/search/sitemap.
4. Demo labels must state whether data is synthetic and whether the capability is concept/MVP rather than production.
5. Broken/unavailable live-demo links must create an alert and may trigger a configurable temporary status message.
6. Contact/subscription data must be minimized, consented, protected, retained only as defined, and never exposed in client code or analytics.
7. Analytics must not collect sensitive inquiry text, email addresses, or unnecessary identifiers.
8. URL changes require redirects; published canonical URLs should remain stable.
9. Sponsored, affiliate, or partner content must be disclosed clearly.
10. Only authorized editors may publish; material legal/privacy page changes require designated approval.

## 11. Security, privacy, and trust outcomes

- HTTPS, secure headers, dependency/vulnerability management, least-privilege CMS access, MFA, secrets management, and audit.
- Anti-spam, validation, rate limiting, bot protection, safe file/media processing, and email-domain controls.
- Consent/preference records, transparent privacy notice, retention/deletion, and data-subject request handling.
- No secrets, unpublished material, personal contact records, or sensitive analytics data exposed in static assets.
- Backup/restore for content/configuration and independent export to avoid CMS/vendor lock-in.

## 12. Risks and mitigations

| Risk | Required mitigation |
|---|---|
| Site becomes stale | CMS ownership, content calendar, review dates, broken-link/status monitoring |
| Low credibility from vague claims | Direct sources, concrete problems, clear MVP/production distinction, founder expertise |
| Social dependency | Canonical site, email subscription, RSS, searchable archive |
| Spam/abuse | Validation, honeypot/rate limit/bot controls, moderation/routing |
| Privacy non-compliance | Minimal data, consent, provider contracts, retention, deletion, analytics controls |
| CMS compromise | MFA, least privilege, preview/review, audit, backup, secure publishing webhook |
| Slow or inaccessible experience | Performance budgets, responsive design, WCAG testing, optimized media |

## 13. Business acceptance criteria

1. An authorized non-developer can create, review, schedule, publish, update, and archive an insight/project safely.
2. Visitors can find content by topic/search, open every active demo, understand its status, and reach the relevant CTA on mobile and desktop.
3. Contact and subscription journeys complete end to end with consent, anti-spam, acknowledgment, provider synchronization, and audit.
4. Search/social metadata, sitemap, RSS, structured data, canonical URLs, and redirects validate correctly.
5. Accessibility, performance, security, privacy, backup/recovery, analytics, monitoring, and broken-link targets pass release checks.
6. Existing public URLs and all published demo links remain available or redirect correctly during migration.

## 14. Delivery approach

1. Information architecture, design system, CMS, content migration, project/insight pages.
2. Search/SEO/social/RSS, contact/subscription, analytics/consent.
3. Editorial workflow, monitoring, automation, performance/accessibility/security hardening.
4. Optional multilingual and richer interactive content after the core operating model is stable.

