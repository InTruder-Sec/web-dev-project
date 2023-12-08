const CheckSession = async (setloading) => {
  try {
    const data = await fetch(`http://localhost:5000/users/session`, {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();

    if (res.code === 500) {
      setloading(false);
      return {
        data: { _id: "", username: " ", chat_history: [] },
        code: 500,
        redirect: true,
      };
    } else {
      setloading(false);
      return { data: res.data, code: 200, redirect: false };
      //   setUserSessionDetails(res.data);
      //   if (res.data.chat_history.length === 0) {
      //     setwalkthrough(
      //       <Popup
      //         content="Get started by searching for your friends by their username and start chatting with them."
      //         position={{ mt: "170px", ml: "50px" }}
      //         setwalkthrough={setwalkthrough}
      //       />
      //     );
      //   }
    }
  } catch (err) {
    console.log(err);
    return {
      data: { _id: "", username: " ", chat_history: [] },
      code: 500,
      redirect: true,
    };
  }
};

export default CheckSession;
