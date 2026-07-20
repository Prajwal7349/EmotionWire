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
  console.log("Fetching documents...");
  const docs = await client.fetch(`*[_type in ["caseStudy", "offering"] && !defined(sortOrder)]`);
  console.log(`Found ${docs.length} documents without sortOrder.`);
  for (const doc of docs) {
    await client.patch(doc._id).set({ sortOrder: 99 }).commit();
    console.log(`Updated ${doc.title}`);
  }
  console.log('Done patching.');
}

run().catch(console.error);
