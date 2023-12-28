import { useContext, useEffect, useState } from "react";
import Tasks from "./tasks";
import { authorization } from "../App";
import axios from "axios";

type TaskType = {
  title: string;
  isCompleted: boolean;
  _id: string;
};

type stateType = {
  completedTasks: TaskType[];
  Tasks: TaskType[];
};

function Main(props: {
  setisactive: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleClick = () => {
    props.setisactive("");
  };

  const [tasks, settasks] = useState<stateType>({
    completedTasks: [],
    Tasks: [],
  });

  const header: string | undefined = useContext(authorization);

  useEffect(() => {
    const tempTasks: TaskType[] = [];
    const tempCompletedTasks: TaskType[] = [];
    if (header !== "") {
      axios
        .get("https://1task-backend.azurewebsites.net/api/tasks/get", {
          headers: {
            Authorization: header,
          },
        })
        .then((res) => {
          // Sepreate completed tasks from task
          res.data.Tasks.map((e: TaskType) => {
            if (e.isCompleted) {
              tempCompletedTasks.push(e);
            } else {
              tempTasks.push(e);
            }
          });
          settasks({
            completedTasks: tempCompletedTasks,
            Tasks: tempTasks,
          });
        });
    }
  }, [header]);
  const mapTasks = tasks.Tasks.map((task) => {
    return (
      <Tasks
        Title={task.title}
        id={task._id}
        isCompleted={task.isCompleted}
        key={task._id}
        tasks={tasks}
        settasks={settasks}
      />
    );
  });

  const mapCompletedTasks = tasks.completedTasks.map((task) => {
    return (
      <Tasks
        Title={task.title}
        id={task._id}
        isCompleted={task.isCompleted}
        key={task._id}
        tasks={tasks}
        settasks={settasks}
      />
    );
  });

  // Handle click on add task

  const HandleAddTask = () => {
    if (header === "") {
      alert("You must login first");
      return;
    }
    const title = prompt("Enter task title");

    if (title !== null) {
      axios
        .post(
          "https://1task-backend.azurewebsites.net/api/tasks/add",
          {
            title: title,
          },
          {
            headers: {
              Authorization: header,
            },
          }
        )
        .then((res) => {
          const newTask = {
            title: res.data.newTask.title,
            isCompleted: res.data.newTask.isCompleted,
            _id: res.data.newTask._id,
          };
          settasks({
            completedTasks: tasks.completedTasks,
            Tasks: [...tasks.Tasks, newTask],
          });
        });
    }
  };

  return (
    <div>
      {/* navbar */}
      <div className="flex justify-between">
        <div className="font-mono text-4xl nav px-14 py-7">
          1-TASK
          <div className="text-xs">1 place for your tasks</div>
        </div>
        <div
          onClick={handleClick}
          className={`${
            header === "" ? "" : "hidden"
          } px-5 py-1.5 login my-7 mx-10 bg-indigo-500 w-fit h-fit rounded-md hover:bg-white hover:text-black duration-300`}
        >
          Login
        </div>
      </div>
      {/* Current tasks */}
      <div className="font-mono text-2xl px-40 py-5  ">Current Tasks</div>

      {mapTasks}
      <div
        className="tasks bg-indigo-500 mx-60 my-5 px-5 py-4 rounded-md text-center add-task"
        onClick={() => {
          HandleAddTask();
        }}
      >
        <span
          style={{
            marginTop: "-20px",
          }}
        >
          Add Task
        </span>
        <span
          style={{
            display: "inline-block",
            marginLeft: "10px",
            marginBottom: "-5px",
          }}
        >
          <svg
            className="add-task-svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
        </span>
      </div>
      <div className="font-mono text-2xl px-40 py-5  ">Completed Tasks</div>
      {mapCompletedTasks}
    </div>
  );
}

export default Main;
