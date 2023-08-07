import express from 'express';
import __dirname from './utils.js';

import usersRouter from './routes/users.router.js';
import cartsRouter from './routes/carts.router.js';
import sessionsRouter from './routes/sessions.router.js';
import viewsRouter from './routes/views.router.js'

import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 8080;
const connection = mongoose.connect("mongodb+srv://monsemu246:prueba@cluster0.4e3lyqb.mongodb.net/?retryWrites=true&w=majority")
/**
 * Template engine
 */
app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

/**
 * Middlewares
 */
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

initializePassport();
app.use(passport.initialize());
app.use(cookieParser());

app.use('/',viewsRouter)
app.use('/api/users',usersRouter);
app.use('/api/carts',cartsRouter);
app.use('/api/sessions',sessionsRouter);

const server = app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`));