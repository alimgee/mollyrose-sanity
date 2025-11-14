// /home/ubuntu/mollyrose-cms/schemas/post.js
export default {
  name: 'post',
  title: 'News Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
        {
      name: 'externalUrl',
      title: 'External Article URL',
      type: 'url',
      description: 'The full URL to the original news article (e.g., https://irishtimes.com/article-title )',
      validation: Rule => Rule.required()
    },

    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      media: 'mainImage'
    },
    prepare(selection) {
      const {title, date, media} = selection
      return {
        title: title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
        media: media
      }
    }
  }
}
