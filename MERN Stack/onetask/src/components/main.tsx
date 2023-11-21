import Tasks from "./tasks.tsx";

function Main(props) {
  const handleClick = () => {
    props.setisactive("");
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
          className="px-5 py-1.5 login my-7 mx-10 bg-indigo-500 w-fit h-fit rounded-md hover:bg-white hover:text-black duration-300 "
        >
          Login
        </div>
      </div>
      {/* Current tasks */}
      <div className="font-mono text-2xl px-40 py-5  ">Current Tasks</div>

      <Tasks />
      <Tasks />
      <Tasks />

      <div className="font-mono text-2xl px-40 py-5  ">Completed Tasks</div>
      <Tasks />
      <Tasks />
      <Tasks />
    </div>
  );
}

export default Main;
