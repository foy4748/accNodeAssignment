const express = require("express");
const app = express();

global.projectRoot = __dirname;

const PORT = process.env.PORT | 3001;

app.use(express.json());

// Routes
const UserRoute = require("./Controllers/User");
app.use("/user", UserRoute);

app.get("/", (req, res) => {
  res.send({
    message: "API is Up and Running",
    available_routes: [
      "/",
      "/user/random",
      "/user/all",
      "/user/save",
      "/user/update",
      "/user/bulk-update",
      "/user/delete",
    ],
  });
});

app.listen(PORT, () => console.log(`SERVER is running at ${PORT}`));
