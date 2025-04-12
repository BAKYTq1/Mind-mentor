import React from "react";

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-[95%] max-w-[1300px] sm:w-[90%] md:w-[90%] lg:w-[99%] xl:w-[100%] mx-auto ">{children}</div>;
};

// export default Container;