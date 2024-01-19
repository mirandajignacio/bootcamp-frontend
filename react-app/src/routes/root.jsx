import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <Layout>
      <Navbar />
      <Outlet />
    </Layout>
  );
}

export { Root };
