import React from "react";

export const Layout = () => {
  return (
    <div className="bg-white p-6 grid grid-cols-form  max-w-[94rem] mx-auto min-h-[60rem] md:grid-cols-1 mid:mx-2rem mid:p-0 sma:bg-transparent  sma:relative rounded-3xl sma:min-h-screen">
      {children}
    </div>
  );
};
