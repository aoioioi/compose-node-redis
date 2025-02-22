import app from "./app";

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});