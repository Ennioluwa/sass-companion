import { FC, ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative h-auto">
        {children}
        <div className="absolute  top-0 -left-[10px] h-full rounded-2xl w-[38px] bg-white z-[100] shadow-[1px_0_1px_rgba(0,0,0,0.1)]"></div>
        <div className="absolute  top-0 -left-[20px] h-screen w-[48px] bg-white z-[100000]"></div>
      </div>
    </div>
  );
};

export default layout;
