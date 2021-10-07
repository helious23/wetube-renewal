import express from "express";
import morgan from "morgan";

const PORT = process.env.PORT || 4000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
  return res.send("Hello Express");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`✅ Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);