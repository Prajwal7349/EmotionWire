import { defineField, defineType, defineArrayMember } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'text',
      initialValue: 'We provide innovative cloud solutions tailored to your unique needs...',
    }),
    defineField({
      name: 'teamMembers',
      title: 'Leadership Team',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'role', title: 'Role', type: 'string' },
            { name: 'bio', title: 'Bio', type: 'text' },
            { name: 'image', title: 'Headshot', type: 'image' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'advisors',
      title: 'Strategic Advisors & Board Members',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'role', title: 'Role', type: 'string' },
            { name: 'bio', title: 'Bio', type: 'text' },
            { name: 'image', title: 'Headshot', type: 'image' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
})
