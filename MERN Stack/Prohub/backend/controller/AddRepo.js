import Repo from "../model/repos.js";
import user from "../model/user.js";

const addRepo = async (req, res) => {
  if (
    req.body.repoName === "" ||
    req.body.repoDescription === "" ||
    req.body.repoOwner === "" ||
    req.body.repoLink === ""
  ) {
    res.status(400).json({ code: 400, message: "Bad Request" });
  } else {
    if (req.body.repoDescription == null) {
      req.body.repoDescription = "Please contact the owner for description!";
    }
    try {
      Repo.create({
        repoName: req.body.repoName,
        repoDescription: req.body.repoDescription,
        repoOwner: req.body.repoOwner,
        repoLink: req.body.repoLink,
        repoTags: req.body.repoTags,
        repoLocation: req.body.repoLocation,
      })
        .then((result) => {
          user
            .findOneAndUpdate(
              { name: req.body.repoOwner },
              {
                $push: {
                  repos: result._id,
                },
              }
            )
            .then((resul) => {
              user
                .find({ name: req.body.repoOwner })
                .populate("repos")
                .then((resul) => {
                  console.log(resul);
                  res.status(200).json({
                    code: 200,
                    message: "OK",
                    data: resul,
                    repoAdded: result,
                  });
                });
            });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ message: "Internal Server Error" });
        });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export default addRepo;
