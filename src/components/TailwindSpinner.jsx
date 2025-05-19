import React from "react";

function TailwindSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-12 h-12 relative">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-2 border-t-gray-600 dark:border-t-white animate-spin"></div>
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-2 border-t-gray-600 dark:border-t-white animate-spin"></div>
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-2 border-t-gray-600 dark:border-t-white animate-spin"></div>
      </div>
    </div>
  );
}

export default TailwindSpinner;
