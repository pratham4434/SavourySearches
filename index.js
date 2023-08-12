require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectToDb = require("./lib/db/db");
const AuthRoute=require("./routes/userRoutes");
const PostRoute=require("./routes/reelRoutes");
const postStall=require('./routes/stallRoutes');

const port = 5000 || process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//test route->
app.get("/test", (req, res) => {
  res.send("hello!!!!");
});

app.use('/auth',AuthRoute);
app.use('/postreel',PostRoute);
app.use('/poststall',postStall);

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
