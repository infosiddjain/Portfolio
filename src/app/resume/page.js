import React from "react";

const ResumePage = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/resume.pdf"
        className="w-full h-full"
        title="Siddharth Jain Resume"
        frameBorder="0"
      />
    </div>
  );
};

export default ResumePage;
