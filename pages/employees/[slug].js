import fetch from "isomorphic-fetch";
import Head from "next/head";
import { getIdFromSlug } from "../../utils/slug";
import { API } from "../../config";

const Employee = ({ data: employee }) => {
  const name = `${employee.first_name} ${employee.last_name}`;

  return (
    <>
      <Head>
        <title>
          Employees - {employee.first_name} {employee.last_name}
        </title>
      </Head>
      {name}
    </>
  );
};

Employee.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const id = getIdFromSlug(slug);
  const response = await fetch(`${API}/${id}`);

  return await response.json();
};

export default Employee;
