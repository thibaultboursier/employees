import { API } from "../config";

export const getEmployees = async ({
  baseUrl = location && location.origin,
  page = 1
}) => {
  const response = await fetch(`${baseUrl}/api/${API.employees}?page=${page}`);

  return await response.json();
};
