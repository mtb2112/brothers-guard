import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'bandName',
      title: 'Band name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Homepage background image',
      type: 'image',
      description: 'Displayed behind the homepage hero content.',
      options: {hotspot: true},
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social media links',
      type: 'object',
      fields: [
        defineField({name: 'facebook', title: 'Facebook URL', type: 'url'}),
        defineField({name: 'instagram', title: 'Instagram URL', type: 'url'}),
        defineField({name: 'youtube', title: 'YouTube URL', type: 'url'}),
        defineField({name: 'spotify', title: 'Spotify URL', type: 'url'}),
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Short biography',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'bookingEmail',
      title: 'Booking email',
      type: 'email',
    }),
    defineField({
      name: 'location',
      title: 'Based in',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site settings'}
    },
  },
})



