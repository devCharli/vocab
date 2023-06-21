import { ReactNode } from "react";
import Navbar from "../Components/Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div>
    <Navbar />
    {children}
  </div>
);

export default Layout;
