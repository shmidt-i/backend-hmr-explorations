import express from "express";

const app = express();

app.get("/", (_req, res) => {
  const CHANGE_ME_TO_SEE_HMR = "42\t";
  res.send(CHANGE_ME_TO_SEE_HMR + JSON.stringify(app.get("data"), null, 2));
});

export { app };
