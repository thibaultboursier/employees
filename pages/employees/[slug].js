import fetch from "isomorphic-fetch";
import { getIdFromSlug } from "../../utils/slug";

const Employee = ({ data: employee }) => {
  console.log(employee);
  return <div>employee</div>;
};

Employee.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const id = getIdFromSlug(slug);
  const response = await fetch(`https://reqres.in/api/users/${id}`);

  return await response.json();
};

export default Employee;
