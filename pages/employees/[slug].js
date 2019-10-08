import fetch from "isomorphic-fetch";

import Head from "next/head";

import { Grid, Paper, Typography, Avatar } from "@material-ui/core";

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

Employee.getInitialProps = async ({ query, req }) => {
  const id = getIdFromSlug(query.slug);
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const host = req.headers.host;
  const baseUrl = `${protocol}://${host}`;
  const response = await fetch(`${baseUrl}/api/${API.employees}/${id}`);

  return await response.json();
};

export default Employee;
