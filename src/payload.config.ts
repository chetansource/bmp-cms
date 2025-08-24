// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import About from './collections/AboutUs'
import Posts from './collections/Posts'
import LifeAtBMP from './collections/LifeAtBmp'
import HeroSection from './collections/HeroSection'
import Services from './collections/Services'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

console.log("env",
  process.env.R2_BUCKET_NAME,
  process.env.R2_ENDPOINT,
  process.env.R2_ACCESS_KEY,
  process.env.R2_SECRET_ACCESS_KEY,
)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  cors: ['http://localhost:5173'],
  collections: [Users, Media, About, Posts, LifeAtBMP, HeroSection, Services],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    s3Storage({
      collections: {
        media: true, // Ensure this matches your Media collection slug
      },
      bucket: process.env.R2_BUCKET_NAME || '',
      config: {
        endpoint: process.env.R2_ENDPOINT,
        region: 'auto',
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY || '',
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY||'',
        },
      },
    }),
  ],
})
