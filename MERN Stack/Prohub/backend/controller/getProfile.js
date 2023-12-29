export default async function getProfile(req, res) {
  const token = req.query.token;

  if (token === "") {
    res.status(400).json({ code: 400, message: "Bad Request" });
  } else {
    try {
      fetch("https://api.github.com/user", {
        headers: {
          Authorization: "token " + token,
        },
      })
        .then((result) => result.json())
        .then((result) => {
          res.status(200).json({ code: 200, message: "OK", data: result });
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  // Documented here: https://developer.github.com/v3/users/#get-the-authenticated-user
}
