import { defineField, defineType } from 'sanity'

export const resourcesPage = defineType({
  name: 'resourcesPage',
  title: 'Resources Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Resources & Insights',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'text',
      initialValue: 'Discover whitepapers, blogs, and insights.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
})
