import User from "./../model/user.js";

const addUser = (req, res) => {
  const data = req.body;
  console.log(data);
  if (
    data.name === "" ||
    data.city === "" ||
    data.country === "" ||
    data.skills === ""
  ) {
    res.status(400).json({ code: 400, message: "Bad Request" });
  } else {
    if (data._id !== "") {
      if (typeof data.skills === "string") {
        data.skills = data.skills.split([","]);
      }
      User.findOneAndUpdate(
        { _id: data._id },
        {
          name: data.name,
          city: data.city,
          country: data.country,
          skills: data.skills,
        }
      )
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
      return;
    } else {
      try {
        User.create({
          name: data.name,
          city: data.city,
          country: data.country,
          skills: data.skills.split([","]),
        })
          .then((result) => {
            console.log(result);

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
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
};

export default addUser;
