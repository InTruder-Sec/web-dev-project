export default async function Auth(req, res) {
  const token = req.body.token;

  const ACCESS_TOKEN_URL =
    "https://github.com/login/oauth/access_token?client_id=" +
    process.env.GITHUB_CLIENT_ID +
    "&client_secret=" +
    process.env.GITHUB_CLIENT_SECRET +
    "&code=" +
    token;

  try {
    await fetch(ACCESS_TOKEN_URL, {
      headers: {
        accept: "application/json",
      },
    }).then((result) =>
      result.json().then((data) => {
        if (data.error == "bad_verification_code") {
          res.status(500).json({ message: "Internal Server Error" });
        } else {
          res
            .status(200)
            .json({ code: 200, message: "OK", AccessToken: data.access_token });
        }
      })
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }

  // Documented here: https://developer.github.com/v3/users/#get-the-authenticated-user
}
