require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connect = require("./db");

const adminRouter = require("./routes/Admin")
const newsRouter = require("./routes/News")

const { auth } = require("./utils/middlewares");

const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(morgan("dev"));

app.use("/Admin",adminRouter)
app.use("/News", newsRouter)

app.get("/", auth, (req, res) => {
  res.status(200).json({ message: "Estás autenticado" });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});