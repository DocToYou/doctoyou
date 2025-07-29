import { Router } from "express";

const userRouter = Router();


userRouter.get("/", (req, res) => {
  res.render("index");
});

userRouter.get("/register", (req, res) => {
  res.render("register");
});
// 
export default userRouter;