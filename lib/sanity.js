const sanityClient = require("@sanity/client");

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID1,
  useCdn: process.env.NODE_ENV === "production"
};

export default sanityClient(options);
