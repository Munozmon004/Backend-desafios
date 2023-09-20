import { Router } from 'express';
import passport from 'passport'
const router = Router();

router.get('/github',passport.authenticate('github'), async (req, res) => {});

router.get(
    '/githubcallback',
    passport.authenticate('github'),
    async(req,res)=>{
    req.session.user = req.user;
    res.redirect('/');
    }
);

export default router;