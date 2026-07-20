import { defineField, defineType, defineArrayMember } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Main Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'text' },
      ],
    }),
    defineField({
      name: 'whatWeDo',
      title: 'What We Do Section',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'serviceCard',
          fields: [
            { name: 'title', title: 'Card Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'bullets', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] },
          ],
        }),
      ],
    }),
    defineField({
      name: 'ticker',
      title: 'Testimonial Ticker',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'framework',
      title: 'Framework Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'intro', title: 'Introduction', type: 'text' },
        { name: 'steps', title: 'Steps', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'storyTitle',
      title: 'Our Story Section Title',
      type: 'string',
    }),
    defineField({
      name: 'story',
      title: 'Our Story Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'storyClosing',
      title: 'Our Story Closing Statement',
      type: 'string',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
})
