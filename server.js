const express =require('express');

const app  = express();

app.use('/', (req, res) => {
    res.send('ola mundo');
})

app.listen(3000,(err) => {
    if(err){
        return console.log('erro');
    }
    console.log('iniciou em 300')
});
