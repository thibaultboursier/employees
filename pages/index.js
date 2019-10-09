import { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import EmployeeList from "../components/EmployeeList";
import Layout from "../components/Layout";
import { API } from "../config";
import { TablePagination } from "@material-ui/core";
import { getEmployees } from "../services/employees";

const Home = employees => {
  const [{ data, page, per_page, total }, setEmployees] = useState(employees);
  const [currentPage, setCurrentPage] = useState(page - 1);

  const changePage = async (event, page) => {
    setCurrentPage(page);
    setEmployees(await getEmployees({ page: page + 1 }));
  };

  return (
    <Layout title="List">
      <EmployeeList employees={data} />
      <TablePagination
        rowsPerPageOptions={[6]}
        component="div"
        count={total}
        rowsPerPage={per_page}
        page={currentPage}
        backIconButtonProps={{
          "aria-label": "previous page"
        }}
        nextIconButtonProps={{
          "aria-label": "next page"
        }}
        onChangePage={changePage}
      />
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const host = req.headers.host;
  const baseUrl = `${protocol}://${host}`;

  return await getEmployees({ baseUrl });
};

export default Home;
