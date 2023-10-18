const{Router} = require('express');
const router = Router();

router.post('/signup', (req,res) => {
    res.json('signup');
});

router.post('/signin', (req,res) => {
    res.json('signin');
});

router.get('/me', (req,res) => {
    res.json('me');
});

router.post('/login', (req,res) => {
    res.json('login');
});

module.exports = router;