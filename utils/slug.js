export const createSlug = ({ first_name, id, last_name }) =>
  `${first_name}-${last_name}-${id}`.replace(/ /gi, "-").toLowerCase();

export const getIdFromSlug = slug => slug.split("-").pop();
