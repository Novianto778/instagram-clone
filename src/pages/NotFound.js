import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <div className="bg-gray-background flex justify-center items-center h-screen">
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
    </div>
  );
};

export default NotFound;
