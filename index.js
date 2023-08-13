require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const connectToDb = require("./lib/db/db");
const AuthRoute = require("./routes/userRoutes");
const PostRoute = require("./routes/reelRoutes");
const postStall = require("./routes/stallRoutes");

const port = 5000 || process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//test route->
app.get("/test", (req, res) => {
  res.send("hello!!!!");
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use("/auth", AuthRoute);
//the name value for input tag should be "reel"
app.use("/postreel", upload.single("reel"), PostRoute);
app.use("/poststall", postStall);

//all api routes->

//catch all route for frontend->
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./frontend/build", "index.html"));
});

connectToDb();
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
