// src/components/Layout.js
import React from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-7xl">{children}</div>
    </div>
  );
};

export default Layout;
