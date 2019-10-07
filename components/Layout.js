import Head from "next/head";
import Typography from "@material-ui/core/Typography";

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title || "Employees"}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <Typography variant="h2" component="h1">{title}</Typography>
    {children}
  </>
);

export default Layout;
