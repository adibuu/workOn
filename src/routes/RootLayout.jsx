import { Outlet } from "react-router";

import Layout from "@/components/Layout";

const RootLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export default RootLayout;
