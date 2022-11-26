const express=require('express');
const app=express();
const port=8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.send('Used for API requests that cannot be done on Next.js and require using Express.js');
});

const { verifyHandler }=require('./verify/verify');
app.post('/verify', verifyHandler);

app.listen(port, ()=>console.log(`Listening on port ${port}`));
