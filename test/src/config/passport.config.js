import passport from "passport";
import GitHubStrategy from 'passport-github2';
import userModel from '../dao/mongo/users.js';
import { createHash, isValidPassword } from "../utils.js";

const initializePassport = () => {
    passport.use('github', new GitHubStrategy({
        clientID:"Iv1.e97eaa05f53a1c06",
        clientSecrect:"8ba50519096b49b2ee018a8ad5d75c34e9430193",
        callbackURL:'http://localhost:8080/api/sessions/githubcallback'
    }, async (accessToken,refreshToken,profile,done)=> {
        try{
			console.log(profile);
			let user = await userModel.findOne({email:profile._json.email})
			if(!user) {
				let newUser = {
					first_name:profile._json.name,
					last_name:'',
					age:20,
					email:profile._json.email,
					password:''
				}
				let result = await userModel.create(newUser);
				done(null,result)
			}
			else{
				done(null,result)
			}
		}catch(error){
			return done(error)
		}
    }));





    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        let user = await userModel.findById(id);
        done(null,user);
    });
}

export default initializePassport;