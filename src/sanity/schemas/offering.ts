import { defineField, defineType, defineArrayMember } from 'sanity'
import { orderRankField } from '@sanity/orderable-document-list'

export const offering = defineType({
  name: 'offering',
  title: 'Offering',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    orderRankField({ type: 'offering', hidden: true }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'problem',
      title: 'The Problem',
      type: 'object',
      fields: [
        { name: 'title', title: 'Problem Title', type: 'string' },
        { name: 'description', title: 'Problem Description', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features Blocks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'featureBlock',
          fields: [
            { name: 'title', title: 'Block Title', type: 'string' },
            { name: 'items', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] },
          ],
        }),
      ],
    }),
    defineField({
      name: 'outcome',
      title: 'The Outcome',
      type: 'text',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
})
