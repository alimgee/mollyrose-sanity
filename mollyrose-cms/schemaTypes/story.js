// mollyrose-cms/schemaTypes/story.js
export default {
  name: 'mollysStory',
  title: "Molly's Story Page",
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: "Molly's Story",
      readOnly: true,
    },
    {
      name: 'body',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }
      ]
    }
  ]
}
