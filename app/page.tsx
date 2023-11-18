import Image from 'next/image'
import contentful from '@/app/lib/contentful';

import { createClient } from 'contentful';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID!,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'recipe' })

  return {
    props: {
      recipes: res.items,
      revalidate: 70,
    },
  }
}

export default function Home({recipes}:any) {
  console.log(recipes)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World with Next.js and Contentful!!!</h1>
    </main>
  )
}
