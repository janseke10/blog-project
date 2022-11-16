import Navbar from "./Navbar";
import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactElement }) {
  console.log(children.props.categories);
  return (
    <>
      <Header />
      <Navbar categories={children.props.categories} />
      <main>{children}</main>
      {/* <Footer></Footer> */}
    </>
  );
}
