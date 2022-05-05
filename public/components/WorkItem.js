import React from "react";
import LineItem from "./LineItem";

function WorkItem(props) {
  if (props.work.flag) {
    // last item in the array
    return (
        <div className="flex w-full justify-center items-center">
          {/* dot and horizontal line with one vertical line up and down */}
          <LineItem flag="false"></LineItem>
          <div className="flex w-full sm:w-3/4 flex-col justify-center items-center">
            <div className="w-full sm:w-11/12 flex flex-col justify-center items-center border-4 p-8 border-blue-900 rounded-2xl">
              <h1 className="text-xl dark:text-white">{props.work.company}</h1>
              <p className="dark:text-white italic">{props.work.post}</p>
              <p className="dark:text-white">{props.work.description}</p>
            </div>
          </div>
        </div>
      );
  } else {
    // Normal work item
    return (
      <div className="flex w-full justify-center items-center">
        {/* dot and horizontal line with two vertical lines up and down */}
        <LineItem flag="true"></LineItem>
        <div className="flex w-full sm:w-3/4 flex-col justify-center items-center ">
          <div className="w-full sm:w-11/12 flex flex-col justify-center items-center border-4 p-8 border-blue-900 rounded-2xl">
            <h1 className="text-xl dark:text-white">{props.work.company}</h1>
            <p className="dark:text-white italic">{props.work.post}</p>
            <p className="dark:text-white">{props.work.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkItem;
