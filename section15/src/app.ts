import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

const app = express();

app.use(json());

import todoRoutes from "./routes/todos";
app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
