import { defineField, defineType } from 'sanity'

export const caseStudiesPage = defineType({
  name: 'caseStudiesPage',
  title: 'Case Studies Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Case Studies',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'text',
      initialValue: 'Discover how we decode buyers\' minds and drive emotional transformation.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
})
