import { userModel } from '../dao/mongo/models/user.model.js';
import { adminModel } from '../dao/mongo/models/admin.model.js';
import { hashPassword, isValidPassword } from '../utils/hash.utils.js';
import config from '../config/environment.config.js';
import passport from 'passport';
import local from 'passport-local';
import GitHubStrategy from 'passport-github2';

const githubClientId = config.GITHUB_CLIENT_ID;
const githubClientSecret = config.GITHUB_CLIENT_SECRET;

const LocalStrategy = local.Strategy;
const initializePassport = () => {
	passport.use(
		'login',
		new LocalStrategy(
			{  passReqToCallback: true, usernameField: 'email' },
			async (req, username, password, done) => {
				try {
					if (username == 'adminCoder@coder.com') {
						const admin = await adminModel.findOne({ email: username });
						if (!admin || !isValidPassword(admin, password)) return done(null, false, `Invalid credentials.`);
						req.session.user = admin;
						return done(null, admin);
					};

					const user = await userModel.findOne({ email: username });
					if (!user || !isValidPassword(user, password)) return done(null, false, `Invalid credentials.`);
					req.session.user = user;
					return done(null, user);
				} catch (err) {
					return done(err);
				}
			}
		)
	);

	passport.use(
		'register',
		new LocalStrategy(
			{ passReqToCallback: true, usernameField: 'email' },
			async (req, username, password, done) => {
				try {
					if (username == 'adminCoder@coder.com') return done(null, false, `Can't create an admin account.`);

					const user = await userModel.findOne({ email: username });
					if (user) return done(null, false, `Email already exist.`);

					const { first_name, last_name } = req.body;
					const newUser = await userModel.create({
						first_name,
						last_name,
						email: username,
						password: hashPassword(password),
						role: 'user',
					});
					req.session.user = newUser;
					return done(null, newUser);
				} catch (err) {
					return done(err);
				}
			}
		)
	);

	passport.use(
		'github',
		new GitHubStrategy(
			{
				clientID: githubClientId,
				clientSecret: githubClientSecret,
				callbackURL: 'http://localhost:8080/api/sessions/githubCallback',
			},
			async (accesToken, refreshToken, profile, done) => {
				try {
					console.log(profile);
                    const user = await userModel.findOne({ email: profile._json.email });
                    if (!user) {
						const newUser = {
							first_name: profile._json.name.split(' ')[0],
							last_name: profile._json.name.split(' ')[2],
							email: profile._json.email,
							password: "",
						}
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
		const user = await userModel.findById(id);
		done(null, user);
	});
};

export default initializePassport;