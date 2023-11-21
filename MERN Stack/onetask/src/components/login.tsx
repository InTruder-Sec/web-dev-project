type HeadProp = {
  isactive: string;
  setisactive: React.Dispatch<React.SetStateAction<string>>;
};

function Login(props: HeadProp): JSX.Element {
  const handleClick = (): void => {
    props.setisactive("hidden");
  };

  return (
    <div className={props.isactive}>
      <div
        onClick={handleClick}
        className="fixed bg-slate-500 w-screen h-screen opacity-60"
      ></div>
      <div className="fixed left-0 right-0  m-auto w-96 mt-40 rounded-md bg-white text-black  px-7 py-8">
        <div className="text-center">
          <div className="head font-mono text-4xl">1-TASK</div>
          <div className="sub text-xs">One place for your tasks</div>
        </div>

        <div className="mt-7">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email:
          </label>
          <input
            className="email bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="email"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password:
          </label>
          <input
            className="email bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Password"
            type="password"
          />
        </div>
        <button
          type="submit"
          className="text-white block mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center bg-indigo-500 duration-300"
        >
          Login
        </button>
        <div className="text-xs text-center mt-3">
          ----------------- OR ----------------
        </div>
        <button
          type="submit"
          className="text-white block mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center bg-indigo-500 duration-300"
        >
          Sign-Up
        </button>
      </div>
    </div>
  );
}

export default Login;
