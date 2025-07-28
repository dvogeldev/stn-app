# Analysis of PRD versus Current State

## PRD overview

The project requirements document (PRD) for the St. Nicholas Antiochian Orthodox Church website describes a comprehensive, multi‑page site intended to welcome visitors and serve parishioners.  The site is to be built mobile‑first with standards‑compliant HTML5/CSS3 and plain JavaScript, then later migrated to Next.js and Tailwind CSS.  A light, mosaic‑inspired colour palette (deep teal, warm gold, terracotta and marble white) and typographic system (EB Garamond for headings, Open Sans for body text, Crimson Pro for liturgical quotes, Amiri for Arabic) are specified.

### Key functional requirements from the PRD

The PRD lists many features; the following are particularly relevant when comparing with the current code base.  Line numbers refer to the PRD.

- **Homepage:** A hero section with a looping 15–30 s muted video and a static image fallback; call‑to‑action buttons (e.g., “New Here? Start Here”) and quick‑links; upcoming events preview; featured scripture or news.  ADA‑compliant captions and deferred loading are required for the hero video.  
- **Dynamic features:**  
  – **Liturgical calendar sync** – embed a calendar that automatically updates feast days and service times.  
  – **Online donation portal** – integrate a secure payment gateway (Stripe/PayPal) with one‑time and recurring donations.  
  – **Event registration forms** with confirmation e‑mails.  
  – **Live chat support** for visitor questions.  
  – Smooth page transitions, hover effects, scroll‑reveal animations and form feedback.
- **Content pages:**  
  – **New Visitor Guide** – explains what to expect at services, etiquette, attire, FAQs and church tour.  
  – **Our Ministries** – lists ministries with descriptions, meeting schedules and contact information.  
  – **Live Stream & Media** – embed live streaming and provide a schedule and future sermon archive.  
  – **Events & Calendar** – visually customised calendar with categories, feast days, event details and “add to calendar”/subscribe options.  
  – **Holy Sacraments** – baptism, marriage, confession and other services with guidelines and contact forms.  
  – **Our Parish Family** – photo directory and clergy/staff biographies.  
  – **Donate** page – describes stewardship, donation options (one‑time, recurring, fund‑specific) and integrates a secure form.  
  – **Contact & Visit Us** – address with map, service times, contact form and social links.  
- **Other requirements:** Bilingual (English and Arabic) with right‑to‑left layout on Arabic pages; interactive devotions (e.g., “light a candle”); compliance with COPPA/GDPR and PCI‑DSS; success metrics for conversion, event participation, donations and accessibility.

## Current state – WordPress backend (`cms.stnicholasgr` repository)

The WordPress repository contains a complete WordPress installation.  It includes a custom plugin (`st‑nicholas‑customizations.php`) and a child theme (`st‑nicholas‑twentytwentyfive`) that extend core WordPress functionality.

### Custom post types & taxonomies

The custom plugin registers post types for **events**, **ministries**, **sermons** and **staff**.  Each post type is public, has its own archive, supports the WordPress editor and featured images, and exposes data through the REST API and WPGraphQL:contentReference[oaicite:21]{index=21}.  Corresponding taxonomies such as `event_category` and `ministry_category` are also registered:contentReference[oaicite:22]{index=22}.  The plugin adds meta boxes and saves custom fields for event dates, location, audience, registration requirement, ministry leaders and sermon details:contentReference[oaicite:23]{index=23}:contentReference[oaicite:24]{index=24} and registers custom GraphQL fields for these attributes:contentReference[oaicite:25]{index=25}.  

The child theme’s `functions.php` duplicates these post type and taxonomy registrations:contentReference[oaicite:26]{index=26}, suggesting the custom content types are available in both the plugin and theme.  The theme also enqueues custom CSS with liturgical colour variables and handles dynamic liturgical colours (not specified in the PRD).  

### Lack of donation/registration/chat features in WordPress

The repository does **not** include any obvious integration with payment gateways, event registration forms or live‑chat plugins.  There are no Stripe/PayPal configuration files or scripts, and searching for “donation” or “chat” did not return relevant code.  It also does not include a translation plugin or multilingual setup, so the bilingual requirement is not addressed in the backend.

## Current state – Next.js frontend (`stn‑app` repository)

The `stn‑app` repository contains a modern Next.js 15 application configured with Tailwind CSS, Shadcn UI components and Apollo Client:contentReference[oaicite:27]{index=27}.  The project documentation describes it as a decoupled frontend for a WordPress backend:contentReference[oaicite:28]{index=28}.  At present, the application contains only a few implemented features:

1. **Site setup and GraphQL integration:** The Next.js app includes environment configuration for the WordPress GraphQL endpoint.  `src/lib/graphql/queries.ts` defines queries to fetch site information, lists of posts and single posts:contentReference[oaicite:29]{index=29}:contentReference[oaicite:30]{index=30}.  A wrapper `ApolloProvider` is provided, and the homepage uses a simple `useQuery` hook to display the WordPress site title and description:contentReference[oaicite:31]{index=31}.
2. **Calendar page:** A server‑side route (`src/app/api/calendar/route.ts`) fetches an external **Outlook Office 365** `.ics` calendar, parses events into a list and returns JSON:contentReference[oaicite:32]{index=32}.  The front‑end calendar page displays a month view and uses a client component (`CalendarClient.tsx`) to navigate months and open event details.  Upcoming improvements to add subscription buttons and search/filtering are documented in `.kiro/specs/calendar‑subscription‑search/*` (requirements and design), but the implementation plan shows most tasks unchecked:contentReference[oaicite:33]{index=33}.
3. **Navigation and basic pages:** The header and mobile navigation components include links to “Our Faith”, “Our Community”, “Our Church” and “Calendar” pages:contentReference[oaicite:34]{index=34} and call‑to‑action buttons like “Watch Live”, “New Here?” and “Donate” in the mobile menu:contentReference[oaicite:35]{index=35}.  However, many of these links are placeholders.  For example, the “Our Church” page contains static content describing directions and parking:contentReference[oaicite:36]{index=36}, while the site lacks dedicated pages for the visitor guide, ministries, sacraments, donating or live streaming.
4. **Fallback site settings:** A WordPress utility fetches site location and contact details via GraphQL but falls back to hard‑coded defaults when the API is unavailable:contentReference[oaicite:37]{index=37}.  No forms or donation components are present.
5. **In‑progress features:** The `.kiro/specs/calendar‑header‑footer` and `.kiro/specs/calendar‑subscription‑search` documents contain requirements, design and tasks for integrating the site header and footer into the calendar page and adding subscription/search functionality.  The header/footer integration tasks are marked complete:contentReference[oaicite:38]{index=38}, but tasks for search filters, category filters and subscription buttons remain incomplete:contentReference[oaicite:39]{index=39}.

## Discrepancies between PRD and current state

### Technical approach

- **Framework usage:** The PRD’s initial build called for plain HTML/CSS with no frameworks and a later migration to Next.js.  The current frontend has already migrated to **Next.js 15**, Tailwind CSS and Shadcn UI:contentReference[oaicite:41]{index=41}.  This accelerated adoption of modern frameworks deviates from the staged approach outlined in the PRD.

### Missing or partially implemented PRD features

| PRD requirement | Evidence of implementation | Status / discrepancy |
|---|---|---|
| **Hero video section with welcome video and static fallback** | No hero component or video handling appears in the Next.js code.  The homepage (`src/app/page.tsx`) currently just displays site info from WordPress. | **Not implemented.** A hero component with video, fallback image and ADA captions is missing.
| **Quick links and upcoming events preview on the homepage** | No quick‑link components or upcoming events preview are present.  Only navigation links exist. | **Not implemented.**
| **Liturgical calendar integration** | The Next.js app fetches an external `.ics` calendar and displays a month view with navigation:contentReference[oaicite:47]{index=47}.  Planned enhancements include subscription buttons and search filters:contentReference[oaicite:48]{index=48}. | **Partially implemented.** The basic calendar exists, but feast‑day highlighting, event categories and filters remain incomplete.
| **Online donation portal with one‑time/recurring options** | No donation component or payment integration is present in either repository.  The mobile nav includes a “Donate” button:contentReference[oaicite:51]{index=51} that links nowhere. | **Not implemented.**
| **Event registration forms** | WordPress custom post types allow storing `registrationRequired` flags and contact info for events:contentReference[oaicite:54]{index=54}, but there are no front‑end forms or email confirmations. | **Not implemented on frontend.** Back‑end fields exist but are unused.
| **Live chat support** | No live‑chat integration or code exists. | **Not implemented.**
| **Visitor guide page (what to expect, attire, FAQs, church tour)** | Not present.  Only “Our Church” page exists with location and directions. | **Not implemented.**
| **Ministries page with descriptions and contact details** | WordPress stores ministries and ministry leader details:contentReference[oaicite:58]{index=58}, but there is no page on the Next.js frontend to display them. | **Backend ready; frontend missing.**
| **Live stream & media page** | No page for live streaming or sermon archive; no integration with YouTube/Facebook. | **Not implemented.**
| **Holy sacraments page** | No sacraments page exists. | **Not implemented.**
| **Parish family page (clergy & staff bios, photo directory)** | WordPress custom post types include staff data:contentReference[oaicite:62]{index=62}, but there is no front‑end page to display staff or parish history. | **Backend ready; frontend missing.**
| **Donate page with stewardship message and payment form** | Not implemented. | **Not implemented.**
| **Contact & Visit page with map, service times, contact form** | A “Location & Directions” component displays the address, directions and parking information:contentReference[oaicite:65]{index=65}.  However, there is no contact form or service‑time schedule. | **Partially implemented.**
| **Bilingual (English/Arabic) toggle** | Neither the WordPress backend nor the Next.js frontend includes translation support or an Arabic version. | **Not implemented.**
| **Micro‑interactions (hover effects, page transitions)** | The project uses Tailwind and Shadcn UI; some buttons have hover styles, but there is no evidence of page transition animations or intersection‑observer scroll effects. | **Mostly missing.**
| **Interactive devotion features (light a candle)** | No such feature exists. | **Not implemented.**
| **Compliance (COPPA/GDPR/PCI)** | Not addressed. | **Not implemented.**

### Gaps or ambiguities in the PRD

While the PRD is comprehensive, certain areas would benefit from clearer definition:

1. **Service provider choices:** The document lists Stripe, PayPal or Tithe.ly as options for donations and mentions a third‑party live chat without naming vendors.  Specifying the chosen providers is necessary to implement payment and chat integrations.
2. **Content ownership and translation:** The PRD calls for a complete Arabic translation of all key pages and right‑to‑left layout, but does not specify who will provide translations or when they will be available.  It also does not clarify whether bilingual content should be stored in WordPress or hard‑coded.
3. **Interactive features:** The “light a candle” feature and micro‑interactions are conceptually described, but the PRD does not outline functional requirements (e.g., where the candle image appears, how prayers are delivered to clergy, or what constitutes tasteful animation).  
4. **Data collection and privacy:** Although the PRD mentions COPPA and GDPR compliance, it does not specify data retention periods, cookie consent mechanisms or how user requests for data deletion will be handled.  
5. **Timeline references:** The timeline refers to phases with relative dates (e.g., Theophany launch) but leaves placeholders (`MM/DD`) for deadlines for content collection and translation.  These need concrete dates to manage project scope.

## Summary

The PRD envisions a rich, bilingual, multimedia church website with numerous dynamic features.  The WordPress backend has made progress by defining custom post types and GraphQL fields for events, ministries, sermons and staff:contentReference[oaicite:77]{index=77}.  However, the Next.js frontend is still at an early stage.  Aside from a calendar integration and basic posts page, the application lacks the majority of the required pages and features, including donation processing, visitor guide, ministries list, live stream page, sacraments information, staff bios and bilingual support.  Additionally, the current project adopted modern frameworks earlier than planned, diverging from the PRD’s phased approach.  To close the gap, developers will need to implement the missing pages, integrate payment and communication services, design interactive elements and address bilingual and compliance requirements.
