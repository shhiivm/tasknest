import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../components/common/Input";

export const Tasks = () => {
  const [addTask, setAddTask] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const fetchTask = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/tasks");
      if (response.data.success) {
        setTaskList(response.data.message);
      }
    } catch (error) {
      console.error("error in fetching api", error);
    }
  };
  useEffect(() => {
    fetchTask();
  }, []);

  const date = new Date();
  function getDate() {
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }
  function getTime() {
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }

  const manageTaskList = async () => {
    try {
      if (task.trim() === "") return;
      const response = await axios.post("http://localhost:5000/api/v1/tasks", {
        title: task,
        date: getDate(),
        time: getTime(),
      });
      if (response.data.success) {
        setTaskList((prev) => [...prev, response.data.message]);
        fetchTask();
      }

      setTask("");
      setTaskDate("");
      setTaskTime("");
      setAddTask(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      if (!id) return;
      const response = await axios.delete(
        `http://localhost:5000/api/v1/tasks/${id}`
      );
      if (response.data.success) {
        setTaskList((prev) => prev.filter((task) => task._id !== id));
        // fetchTask();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-1/2 h-auto m-4 py-5">
        <div>
          <h1 className="text-4xl font-bold text-center text-gray-600">
            TODO LIST
          </h1>
          <div className="flex justify-between px-4 py-4">
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 border font-medium"
              onClick={() => setAddTask(true)}
            >
              Create Task
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
          <div className="border min-h-16 rounded px-4 bg-gray-200">
            {taskList.map((data) => (
              <div
                key={data._id}
                className="rounded p-2 my-4 bg-white flex justify-between"
              >
                <div className="flex justify-center">
                  <button className="border rounded bg-gray-300 p-3 my-2 mx-2">
                    {" "}
                  </button>

                  <div className="mx-2">
                    <p>{data.title}</p>
                    <p>
                      <span>{data.time}</span>, <span>{data.date}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    className="border rounded p-2 mx-2 bg-red-500 text-white font-medium"
                    onClick={() => handleDeleteTask(data._id)}
                  >
                    Del
                  </button>
                  <button className="bg-yellow-500  text-white font-medium border rounded p-2 mx-2">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {addTask && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Task Name</h2>
              <input
                type="text"
                className="border p-2 text-lg font-semibold mb-4"
                placeholder="Task heading"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />

              <div className="flex justify-end gap-2 pt-5">
                <button
                  className="font-medium px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => setAddTask(false)}
                >
                  Cancel
                </button>
                <button
                  className=" font-medium px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={manageTaskList}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
