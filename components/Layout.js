import Head from "next/head";

import Typography from "@material-ui/core/Typography";
import { Container, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title || "Employees"}</title>
    </Head>
    <AppBar position="static" style={{ marginBottom: "2rem" }}>
      <Toolbar variant="dense">
        <Typography color="inherit" variant="h6">
          Employees
        </Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="lg">
      <Typography component="h1" paragraph variant="h2">
        {title}
      </Typography>
      {children}
    </Container>
  </>
);

export default Layout;
