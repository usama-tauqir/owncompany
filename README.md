# OwnCompany website

A Next.js 16 site for an IT services company. The page set, navigation, layouts and regional/language switching follow devsinc.com. All copy is original, and the brand comes from one config file.

- **Blueprint & analysis:** [`docs/SITE_BLUEPRINT.md`](docs/SITE_BLUEPRINT.md)
- **Rebrand:** edit `src/config/site.ts`. Section 3 of the blueprint lists everything that still needs real data.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static-generates all 119 pages
pnpm lint
```

## Structure

- `src/content/`: all page content as typed data (services, industries, resources, company pages, regions)
- `src/components/blocks/`: reusable sections, rendered by `BlockRenderer`
- `src/components/templates/`: service, industry, listing, article and generic page templates
- `src/i18n/`: English and Arabic UI dictionaries. `/ksa-arabic` renders right-to-left.
