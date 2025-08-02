import { CollectionConfig } from 'payload'

const About: CollectionConfig = {
  slug: 'about',
  labels: {
    singular: 'About Section',
    plural: 'About Sections',
  },
  admin: {
    useAsTitle: 'heading',
  },
  access: {
    read: () => true, 
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'vision',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'mission',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'trust',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'values',
          type: 'array',
          required: true,
          fields: [{ name: 'value', type: 'text', required: true }],
        },
      ],
    },
  ],
}

export default About
