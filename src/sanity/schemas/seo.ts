import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'The title of the page as it appears in search engines and browser tabs.',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'The description of the page as it appears in search engine results.',
      validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: 'metaImage',
      title: 'Meta Image',
      type: 'image',
      description: 'Image displayed when sharing the page on social media (Facebook, Twitter, LinkedIn).',
      options: {
        hotspot: true,
      },
    }),
  ],
})
