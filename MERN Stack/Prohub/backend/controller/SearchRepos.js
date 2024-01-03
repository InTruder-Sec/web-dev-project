import repos from "./../model/repos.js";

const SearchRepos = (req, res) => {
  const data = req.query;
  if (data.repoName === "") {
    res.status(400).json({ code: 400, message: "Bad Request" });
  } else {
    if (data.latest) {
      repos
        .find({})
        .sort({ repoDate: -1 })
        .limit(30)
        .then((result) => {
          res.status(200).json({
            code: 200,
            message: "OK",
            data: result,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ message: "Internal Server Error" });
        });
    }
  }
};

export default SearchRepos;
