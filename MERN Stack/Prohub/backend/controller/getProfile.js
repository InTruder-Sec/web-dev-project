// import User from "../model/user";

import User from "./../model/user.js";

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
          // Check if user exsist in database
          User.findOne({ name: result.login })
            .populate("repos")
            .then((resul) => {
              if (resul !== null) {
                res.status(200).json({
                  code: 200,
                  message: "OK",
                  data: result,
                  onBoarding: false,
                  userDetails: resul,
                });
              } else {
                res.status(200).json({
                  code: 200,
                  message: "OK",
                  data: result,
                  onBoarding: true,
                });
              }
            });
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  // Documented here: https://developer.github.com/v3/users/#get-the-authenticated-user
}
