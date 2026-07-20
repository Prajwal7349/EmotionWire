const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function run() {
  const docs = await client.fetch(`*[_type == "caseStudy"][0...1]`);
  console.log(JSON.stringify(docs, null, 2));
}

run().catch(console.error);
