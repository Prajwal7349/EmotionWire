import { defineField, defineType } from 'sanity'

export const offeringsPage = defineType({
  name: 'offeringsPage',
  title: 'Offerings Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Offerings',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'text',
      initialValue: 'Branding, content, and GTM designed around how buyers actually decide.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
})
