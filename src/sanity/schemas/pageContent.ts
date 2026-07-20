import { defineField, defineType } from 'sanity'

export const pageContent = defineType({
  name: 'pageContent',
  title: 'Page Content (Home & Offerings)',
  type: 'document',
  fields: [
    defineField({
      name: 'pageName',
      title: 'Page Name (e.g., Home, Offerings)',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content Blocks',
      description: 'Add generic text blocks for your pages here. Note: You will need to map these to your React components in the frontend.',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
