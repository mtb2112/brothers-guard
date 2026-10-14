import {defineField, defineType} from 'sanity'

export const songType = defineType({
  name: 'song',
  title: 'Song',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Song title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artist',
      title: 'Original artist',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: ['Southern rock', 'Blues', 'Jam', 'Classic rock', 'Other'],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Feature on homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      artist: 'artist',
      genre: 'genre',
    },
    prepare({title, artist, genre}) {
      return {
        title,
        subtitle: genre ? `${artist} - ${genre}` : artist,
      }
    },
  },
})
