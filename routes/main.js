var app = module.parent.exports.app;
var passport = module.parent.exports.passport;
var Admins = require('../models/admins.js');
var Users = require('../models/users.js');
var Recaptcha = require('recaptcha').Recaptcha;
var PUBLIC_KEY  = '',
    PRIVATE_KEY = '';

var adminAuth = function(req, res, next){
    //authorize role
    if(typeof req.user != "undefined"){
        next();
    }else{
        //Not authorized redirect
        res.redirect('/');
    }
}

app.use(function(req, res, next) {
    res.locals.user = req.user;
    res.locals.flash = req.flash();
    next();
});

app.get('/admin', function(req, res){
    res.render('admin', { title: 'Admin'});
});

app.post('/admin', passport.authenticate('AdminLogin', 
    { successRedirect: '/panel',
      failureRedirect: '/admin',
      failureFlash: true }));

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

app.get('/panel', adminAuth, function(req, res){
    var msg = req.flash('message');
    res.render('panel', { title: 'Panel', flashmsg: msg});
});

app.get('/login', function(req, res){
    var msg = req.flash();
    console.log(">>>", msg);
    res.render('login', { title: 'Login', flashmsg: msg});
});

app.post('/login', function(req, res, next){
    console.log(req.body);
    next();
    }, passport.authenticate('UserLogin', 
    { successRedirect: '/private',
      failureRedirect: '/login',
      failureFlash: true }));


app.get('/register', function(req, res){
    var msg = req.flash('message');
    var recaptcha = new Recaptcha(PUBLIC_KEY, PRIVATE_KEY);
    res.render('register', { title: 'Register', flashmsg: msg, recaptcha_form: recaptcha.toHTML()});
});

