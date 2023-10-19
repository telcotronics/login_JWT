const{Router} = require('express');
const router = Router();

const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

router.post('/signup', async (req,res) => {
    const{usr, pwd, mail, captcha} = req.body;
    
    const usuario = new User({
            usr:usr,
            pwd:pwd,
            mail:mail
        });
    usuario.pwd = await usuario.encryptPassword(usuario.pwd);

    console.log("usuario creado: ",usuario);
    await usuario.save();

    const token = jwt.sign({id: usuario._id}, config.secret, {expiresIn: '1h'});
    console.log("token: ",token);
    res.json({auth:'true',token:token});
});

router.post('/signin', (req,res) => {
    res.json('signin');
});

router.get('/me', async (req,res) => {
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({auth:false, message:'No token provided'});
    }
    var decoded = jwt.verify(token, config.secret);

    var user = await User.findById(decoded.id, {pwd:0});
    if(!user){
        return res.status(404).send('No user found');
    }
    res.json(user);
});

router.get('/validar', (req,res) => {
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({auth:false, message:'No token provided'});
    }
    jwt.verify(token, config.secret, (err,decoded) => {
        if(err){
            return res.status(401).json({auth:false, message:'Unauthorized'});
        }
        res.json({auth:true, message:'Authorized'});
    });
});

router.post('/login', (req,res) => {
    User.findOne({usr:req.body.usr}, (err,user) => {
    });
});

module.exports = router;