import React from "react";
import data from "./work.json";
import WorkItem from "./WorkItem";

function Works() {
  return (
    <div className="flex flex-col justify-center items-center mx-16 py-8 pb-32">
      <div className="title pt-16 mt-2 mb-8">
        <h1 className="text-blue-900 font-mono dark:text-terminal text-2xl text-center">
          Work Experience
        </h1>
      </div>
      {data.map((work) => {
        return <WorkItem work={work} key={work.id} />;
      })}
    </div>
  );
}

export default Works;
