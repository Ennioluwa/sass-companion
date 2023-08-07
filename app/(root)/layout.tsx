import { FC, ReactNode } from "react";
import Navbar from "../components/navbar";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className=" h-full">
      <Navbar />
      <main className=" md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};

export default layout;
