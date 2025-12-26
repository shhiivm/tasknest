import React from "react";

export const Tasks = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 h-auto my-20 py-5">
        <div>
          <h1 className="text-4xl font-bold text-center text-gray-600">
            TODO LIST
          </h1>
          <div className="flex justify-between px-4 py-4">
            <button className="border bg-blue-600 text-amber-50 px-3 py-1 rounded font-medium">
              Add Task
            </button>
            <select
              className="bg-gray-300 border rounded px-2 py-1 font-medium"
              name="selectedTasks"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="ongoing">Ongoing</option>
            </select>
          </div>
          <div className="border rounded px-4 bg-gray-200">
            <div className="rounded p-2 my-4 bg-white flex justify-between">
              <div className="flex justify-center">
                <button className="border rounded bg-gray-300 p-3 my-2 mx-2">
                  {" "}
                </button>
                <div className="mx-2">
                  <p>Create a react project</p>
                  <p>
                    <span>5:32 AM</span>, <span>01/06/2022</span>
                  </p>
                </div>
              </div>
              <div>
                <button className="bg-gray-200 border rounded p-2">Del</button>
                <button className="bg-gray-200 border rounded p-2">Edit</button>
              </div>
            </div>
            <div className="rounded p-2 my-4 bg-white"> Task B</div>
            <div className="rounded p-2 my-4 bg-white"> Task C</div>
          </div>
        </div>
      </div>
    </div>
  );
};
