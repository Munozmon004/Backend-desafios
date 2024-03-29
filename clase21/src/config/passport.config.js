import passport from "passport";
//import local from "passport-local";
import GitHubStrategy from "passport-github2";
import userModel from "../dao/mongo/user.js";
import { createHash, isValidPassword } from "../utils.js";

//const localStrategy = local.Strategy;

const initializePassport = () => {
   // passport.use(
     //   "register",
      //  new localStrategy(
        //  {
          //  usernameField: "email",
            //passReqToCallback: true,
          //},
          //async (req, username, password, done) => {
            //const { first_name, last_name, email } = req.body;
            //try {
              //const user = await userModel.findOne({ email: username });
              //if (user) {
                //return done(null, false, { message: "User already exists" });
             // }
              //const newUser = {
                //first_name,
                //last_name,
                //email,
                //password: createHash(password),
              //};
              //const result = await userModel.create(newUser);
              //return done(null, result);
            //} catch (error) {
              //return done("Error al obtener el usuario" + error);
            //}
         /// }
       // )
    //);
    
   // passport.use(
     //   "login",
       // new localStrategy(
         // {
           // usernameField: "email",
         // },
         // async (username, password, done) => {
           // try {
             // const user = await userModel.findOne({ email: username });
              //if (!user) {
                //return done(null, false, { message: "User not found" });
              //}
              //if (!isValidPassword(user, password)) {
                //return done(null, false, { message: "Wrong password" });
             // }
              //return done(null, user);
            //} catch (error) {
              //return done("Error al obtener el usuario" + error);
            //}
          //}
        //)
    //);

    passport.use("github", new GitHubStrategy({
      clientID: "Iv1.6538d747f496c97a",
      clientSecret: "7ded5f637ec396d41b118eaf97902463fc5f577d",
      callbackURL: "http://localhost:3000/api/sessions/githubcallback"
    }, 
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await userModel.findOne({ email: profile._json.email });
        if (!user) {
          const newUser = {
            first_name: profile._json.name,
            last_name: profile._json.name,
            email: profile._json.email,
            password: "",
          };
          const result = await userModel.create(newUser);
          return done(null, result);
        } else {
          return done(null, user);
        }
      } catch (error) {
        return done("Error al obtener el usuario" + error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = userModel.findById(id);
  done(null, user);
});
};

export default initializePassport;