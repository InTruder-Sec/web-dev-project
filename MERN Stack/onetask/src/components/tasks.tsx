import axios from "axios";
import { useContext } from "react";
import { authorization } from "../App";

type TaskType = {
  title: string;
  isCompleted: boolean;
  _id: string;
};

type propsType = {
  Title: string | never[];
  isCompleted: boolean;
  id: string;
  key: string;
  tasks: TaskType[];
  settasks: React.Dispatch<
    React.SetStateAction<{ completedTasks: TaskType[]; Tasks: TaskType[] }>
  >;
};

function Tasks(props: propsType): JSX.Element {
  const header = useContext(authorization);
  const completeTask = () => {
    let state = true;
    if (props.isCompleted) {
      state = false;
    }
    axios
      .post(
        "http://localhost:5000/api/tasks/update",
        {
          taskId: props.id,
          title: props.Title,
          isCompleted: state,
        },
        {
          headers: {
            Authorization: header,
          },
        }
      )
      .then(() => {
        axios
          .get("http://localhost:5000/api/tasks/get", {
            headers: {
              Authorization: header,
            },
          })
          .then((res) => {
            const tempTasks: TaskType[] = [];
            const tempCompletedTasks: TaskType[] = [];
            // Sepreate completed tasks from task
            res.data.Tasks.map((e: TaskType) => {
              if (e.isCompleted) {
                tempCompletedTasks.push(e);
              } else {
                tempTasks.push(e);
              }
            });
            props.settasks({
              completedTasks: tempCompletedTasks,
              Tasks: tempTasks,
            });
          });
      });
  };

  const DeleteTask = () => {
    axios
      .post(
        "http://localhost:5000/api/tasks/delete",
        {
          taskId: props.id,
        },
        {
          headers: {
            Authorization: header,
          },
        }
      )
      .then(() => {
        axios
          .get("http://localhost:5000/api/tasks/get", {
            headers: {
              Authorization: header,
            },
          })
          .then((res) => {
            const tempTasks: TaskType[] = [];
            const tempCompletedTasks: TaskType[] = [];
            // Sepreate completed tasks from task
            res.data.Tasks.map((e: TaskType) => {
              if (e.isCompleted) {
                tempCompletedTasks.push(e);
              } else {
                tempTasks.push(e);
              }
            });
            props.settasks({
              completedTasks: tempCompletedTasks,
              Tasks: tempTasks,
            });
          });
      });
  };

  const EditTask = () => {
    const newTitle = prompt("Enter new title");
    axios
      .post(
        "http://localhost:5000/api/tasks/update",
        {
          taskId: props.id,
          title: newTitle,
          isCompleted: props.isCompleted,
        },
        {
          headers: {
            Authorization: header,
          },
        }
      )
      .then(() => {
        axios
          .get("http://localhost:5000/api/tasks/get", {
            headers: {
              Authorization: header,
            },
          })
          .then((res) => {
            const tempTasks: TaskType[] = [];
            const tempCompletedTasks: TaskType[] = [];
            // Sepreate completed tasks from task
            res.data.Tasks.map((e: TaskType) => {
              if (e.isCompleted) {
                tempCompletedTasks.push(e);
              } else {
                tempTasks.push(e);
              }
            });
            props.settasks({
              completedTasks: tempCompletedTasks,
              Tasks: tempTasks,
            });
          });
      });
  };

  return (
    <div
      className={`${
        props.isCompleted ? "opacity-60" : ""
      } tasks bg-indigo-500 mx-60 my-5 px-5 py-4 rounded-md flex`}
    >
      {props.Title}
      <div className="container bg-indigo-500  flex px-2 space-x-2 w-fit justify-end left-auto ml-auto">
        <svg
          onClick={EditTask}
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
              d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <svg
          onClick={DeleteTask}
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
              d="M4 7H20"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={completeTask}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Interface / Check_All">
              {" "}
              <path
                id="Vector"
                d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Tasks;
