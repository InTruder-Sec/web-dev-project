import express from "express";

const app = express();

const handleRoute = (req, res) => {
  res.json({ status: "OK" });
};

app.use("/", handleRoute);

const server = app.listen(5000, () =>
  console.log("Server running on port 5000")
);
