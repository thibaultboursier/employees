import fetch from "isomorphic-fetch";
import { getIdFromSlug } from "../../utils/slug";
import { API } from "../../config";

const Employee = ({ data: employee }) => {
  return <div>employee</div>;
};

Employee.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const id = getIdFromSlug(slug);
  const response = await fetch(`${API}/${id}`);

  return await response.json();
};

export default Employee;
