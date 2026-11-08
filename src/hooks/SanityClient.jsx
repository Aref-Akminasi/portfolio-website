import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "esqrof9r",
  dataset: "production",
  token: null,
  useCdn: import.meta.env.VITE_SANITY_USE_CDN === 'true',
  apiVersion: "2023-01-01",
});

export default client;
