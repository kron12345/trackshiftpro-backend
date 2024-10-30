import express from "express";
import activitiesRouter from "./routes/activities.js";

const app = express();

app.use(express.json());

app.use("/activities", activitiesRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
