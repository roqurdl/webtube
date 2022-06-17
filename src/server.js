import express from "express";

const PORT = 3000;

const app = express();

const handleHome = (req, res) => {
  return res.send(`<h1>I still love you.</h1>`);
};

app.get("/", handleHome);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
