import { CollectionConfig } from 'payload'

const LifeAtBMP: CollectionConfig = {
  slug: 'life-at-bmp',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
    },
    {
      name: 'ctaSubtext',
      type: 'textarea',
    },
  ],
}

export default LifeAtBMP
