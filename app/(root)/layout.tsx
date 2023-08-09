import { FC, ReactNode } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className=" h-full">
      <Navbar />
      <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className=" md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};

export default layout;
