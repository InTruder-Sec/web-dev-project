// User Search function
const SearchForUser = async (val, setsearchData) => {
  try {
    const data = await fetch(
      //   `http://localhost:5000/users/search?username=${val}&userId=${UserSessionDetails.id}`,
      "http://localhost:5000/users/search?username",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await data.json();
    setsearchData(res);
  } catch (err) {
    console.log(err);
  }
};

export default SearchForUser;
