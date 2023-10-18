const mogoose = require('mongoose');

mogoose.connect('mongodb://172.17.0.3:27017/sigma-jwt',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('DB is connected'));