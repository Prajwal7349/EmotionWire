import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Tag Manager',
  type: 'document',
  fields: [
    defineField({
      name: 'headTags',
      title: 'Global Head Tags (Analytics, Pixels, etc.)',
      description: 'Paste your raw HTML scripts or meta tags here to inject them into the <head> of every page.',
      type: 'text',
    }),
    defineField({
      name: 'seo',
      title: 'Global SEO Fallback',
      description: 'Default SEO metadata for index pages (e.g. /case-studies, /offerings) and pages without specific SEO set.',
      type: 'seo',
    }),
  ],
})
