

## Structure:

├── components
│   ├── fonts
│   │   ├── Hubot-Sans.woff2
│   │   └── Inter.var.woff2
│   ├── block--banner.tsx
│   ├── block--incentives.tsx
│   ├── block--promo-bg-image-large-content.tsx
│   ├── block--promo-image-tiles.tsx
│   ├── block--promo-overlapping-images.tsx
│   ├── block--promo.tsx
│   ├── breadcrumbs.tsx
│   ├── footer.tsx
│   ├── form--article.tsx
│   ├── form--contact.tsx
│   ├── form--login.tsx
│   ├── form--search.tsx
│   ├── formatted-text.tsx
│   ├── header.tsx
│   ├── layout.tsx
│   ├── locale-switcher.tsx
│   ├── logo-footer.tsx
│   ├── logo.tsx
│   ├── media--image.tsx
│   ├── media--images.tsx
│   ├── menu-footer.tsx
│   ├── menu-link.tsx
│   ├── menu-main.tsx
│   ├── menu-user.tsx
│   ├── meta.tsx
│   ├── node--article--card-alt.tsx
│   ├── node--article--card.tsx
│   ├── node--article--row.tsx
│   ├── node--article.tsx
│   ├── node--page.tsx
│   ├── node--place--card.tsx
│   ├── node--place--map.tsx
│   ├── node--place--teaser.tsx
│   ├── node--place.tsx
│   ├── page-header.tsx
│   ├── paragraph--blog-section.tsx
│   ├── paragraph--image_full_width.tsx
│   ├── paragraph--video.tsx
│   ├── paragraph.tsx
│   ├── preview-alert.tsx
│   ├── product--accommodation--card.tsx
│   ├── product--accommodation.tsx
│   ├── section.tsx
│   ├── tailwind-indicator.tsx
│   ├── taxonomy-term--categories.tsx
│   ├── taxonomy-term--countries.tsx
│   ├── taxonomy-term--dmo-places.tsx
│   └── taxonomy-term--place-types.tsx
├── hooks
│   └── use-search.ts
├── lib
│   ├── drupal.ts
│   ├── get-global-elements.ts
│   ├── get-params.ts
│   ├── jwt.ts
│   ├── node-cache.ts
│   └── utils.ts
├── pages
│   ├── api
│   │   ├── articles
│   │   │   ├── [id].ts
│   │   │   └── index.ts
│   │   ├── auth
│   │   │   └── [...nextauth].ts
│   │   ├── contact.ts
│   │   ├── exit-preview.ts
│   │   ├── preview.ts
│   │   └── search.tsx
│   ├── articles
│   │   ├── index.tsx
│   │   └── new.tsx
│   ├── destinatinons
│   │   ├── beaches.tsx
│   │   ├── lakes.tsx
│   │   ├── nature-sites.tsx
│   │   ├── villages.tsx
│   │   └── wellness.tsx
│   ├── planning
│   │   └── office-team.tsx
│   ├── things-to-do
│   │   └── sport-leisure.tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── [...slug].tsx
│   ├── accommodation.tsx
│   ├── account.tsx
│   ├── contact.tsx
│   ├── destinations.tsx
│   ├── index.tsx
│   ├── login.tsx
│   └── search.tsx
├── public
│   └── ...
├── styles
│   └── globals.css
├── types
│   ├── index.d.ts
│   └── next-auth.d.ts
├── .env.local
├── next-env.d.ts
├── next-i18next.config.js
├── next.config.js
├── package.json
├── postcss.config.js
├── site.config.js
├── tailwind.config.js
└── tsconfig.json