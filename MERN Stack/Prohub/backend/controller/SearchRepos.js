import repos from "./../model/repos.js";

const SearchRepos = (req, res) => {
  res.status(200).json({ code: 200, message: "OK", data: null });
};

export default SearchRepos;
