import React, { Suspense } from "react";

const SuspenseWrapper = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto max-w-[1366px] w-full text-center">
          Loading...
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
