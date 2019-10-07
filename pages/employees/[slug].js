import fetch from "isomorphic-fetch";
import Head from "next/head";
import { getIdFromSlug } from "../../utils/slug";
import { API } from "../../config";
import Layout from "../../components/Layout";

const Employee = ({ data: employee }) => {
  const name = `${employee.first_name} ${employee.last_name}`;

  return (
    <Layout title={name}>
      <Head>
        <title>
          Employees - {employee.first_name} {employee.last_name}
        </title>
      </Head>
    </Layout>
  );
};

Employee.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const id = getIdFromSlug(slug);
  const response = await fetch(`${API}/${id}`);

  return await response.json();
};

export default Employee;
