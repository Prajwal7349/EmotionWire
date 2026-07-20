import { defineField, defineType } from 'sanity'
import { orderRankField } from '@sanity/orderable-document-list'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
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
    orderRankField({ type: 'caseStudy', hidden: true }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'summary',
      title: 'Summary / The Challenge',
      type: 'text',
    }),
    defineField({
      name: 'approach',
      title: 'Our Approach',
      type: 'text',
    }),
    defineField({
      name: 'emotionalShift',
      title: 'The Emotional Shift',
      type: 'text',
    }),
    defineField({
      name: 'engine',
      title: 'The Engine We Built (Optional)',
      type: 'text',
    }),
    defineField({
      name: 'outcome',
      title: 'The Outcome',
      type: 'text',
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'impact',
      title: 'The Impact (Optional)',
      type: 'text',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
})
