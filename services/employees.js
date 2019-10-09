import { API } from "../config";

export const getEmployees = async ({
  baseUrl = "http://localhost:3000",
  page = 1
}) => {
  const response = await fetch(`${baseUrl}/api/${API.employees}?page=${page}`);

  return await response.json();
};
