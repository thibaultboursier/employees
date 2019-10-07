import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Employees</title>  
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    {children}
  </>
);

export default Layout;
