import { Router } from "express";

const router = Router();

//router.get("/register", (req, res) => {
  //res.render("register");
//});

router.get("/", (req, res) => {
  res.render("home");
});


router.get("/login", (req, res) => {
  res.render("login");
});

//router.get("/profile", (req, res) => {
  //res.render("profile", {
    //user: req.session.user,
  //});
//});

export default router;