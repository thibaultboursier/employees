import fetch from "isomorphic-fetch";
import EmployeeList from "../components/EmployeeList";
import Layout from "../components/Layout";
import { API } from "../config";

const Home = ({data: employees}) => {
  return (
    <Layout title="List">
        <EmployeeList employees={employees} />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch(`${API}/employees`);

  return await response.json();
};

export default Home;
