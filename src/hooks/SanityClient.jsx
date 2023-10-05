import { createClient } from '@sanity/client';
const client = createClient({
  projectId: 'esqrof9r',
  dataset: 'production',
  token: null,
  useCdn: false,
  apiVersion: '2023-10-05',
});

export default client;
