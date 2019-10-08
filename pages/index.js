import fetch from "isomorphic-fetch";
import EmployeeList from "../components/EmployeeList";
import Layout from "../components/Layout";
import { API } from "../config";

const Home = ({ data: employees }) => {
  return (
    <Layout title="List">
      <EmployeeList employees={employees} />
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const host = req.headers.host;
  const baseUrl = `${protocol}://${host}`;
  const response = await fetch(`${baseUrl}/api/${API.employees}`);

  return await response.json();
};

export default Home;
