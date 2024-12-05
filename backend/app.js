import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/users", userRoutes);

export default app;
