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
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   next();
// });

app.use("/api/users", userRoutes);

export default app;
