import fetch from "isomorphic-fetch";
import EmployeeList from "../components/EmployeeList";
import Layout from "../components/Layout";

const Home = ({data: employees}) => {
  return (
    <Layout title="Employees">
        <EmployeeList employees={employees} />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch("https://reqres.in/api/users");

  return await response.json();
};

export default Home;
