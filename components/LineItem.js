import React from "react";

function LineItem(props) {
    if (props.flag == "true") {
        return (
            <div className="flex flex-col justify-center items-center">
              {/* 2 Lines */}
              <div className="w-2 h-16 rounded bg-blue-900 dark:bg-terminal my-2"></div>
              <div className="w-2 h-16 rounded bg-blue-900 dark:bg-terminal mb-2"></div>
              {/* 1 Dot */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {/* 2 Lines */}
              <div className="w-2 h-16 rounded bg-blue-900 dark:bg-terminal mt-2"></div>
              <div className="w-2 h-16 rounded bg-blue-900 dark:bg-terminal mt-2"></div>
            </div>
          );
    }
    else{
        return (
            <div className="flex flex-col justify-center items-center">
              {/* 1 Line */}
              <div className="w-2 h-16 rounded bg-blue-900 dark:bg-terminal my-2"></div>
              {/* 1 Dot */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {/* 1 Line */}
              <div className="w-2 h-16 rounded bg-blue-900 dark:bg-terminal my-2"></div>
              <div className="w-2 h-16 rounded bg-blue-900 dark:bg-terminal mb-2"></div>
            </div>
          );
    }
  
}

export default LineItem;
