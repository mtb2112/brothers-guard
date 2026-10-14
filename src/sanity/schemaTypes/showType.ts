import {defineField, defineType} from 'sanity'

export const showType = defineType({
  name: 'show',
  title: 'Show',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date and time',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'ticketUrl',
      title: 'Ticket or event URL',
      type: 'url',
    }),
    defineField({
      name: 'privateEvent',
      title: 'Private event',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'venue',
      date: 'date',
      city: 'city',
    },
    prepare({title, date, city}) {
      return {
        title,
        subtitle: date ? `${new Date(date).toLocaleDateString()} - ${city}` : city,
      }
    },
  },
})
