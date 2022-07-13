import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  seeProfile,
  startGithubLogin,
  finishGithubLogin,
  getChangePw,
  postChangePw,
} from "../controllers/userController";
import {
  protectMiddleware,
  publicOnlyMiddleware,
  avatarUpload,
} from "../middlewares";
const userRouter = express.Router();

userRouter.get("/logout", protectMiddleware, logout);
userRouter
  .route("/edit")
  .all(protectMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(protectMiddleware)
  .get(getChangePw)
  .post(postChangePw);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/:id", seeProfile);
export default userRouter;
