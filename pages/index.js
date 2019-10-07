import fetch from "isomorphic-fetch";
import EmployeeList from "../components/EmployeeList";

const Home = ({data: employees}) => {
  return (
    <div>
        <EmployeeList employees={employees} />
    </div>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch("https://reqres.in/api/users");

  return await response.json();
};

export default Home;
