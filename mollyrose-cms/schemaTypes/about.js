// mollyrose-cms/schemaTypes/about.js
export default {
  name: 'aboutUs',
  title: 'About Us Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: "About Us",
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
