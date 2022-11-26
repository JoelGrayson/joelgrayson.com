const express=require('express');
const app=express();
const port=8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors=require('cors');
const whitelist=[
    'http://localhost:8080', 'http://localhost:3000',
    'https://joelgrayson.com', 'https://www.joelgrayson.com',
    'https://joelgrayson.vercel.app', 'https://www.joelgrayson.vercel.app',
];
app.use(cors({
    origin: (origin, callback)=>{
        if (whitelist.includes(origin) || !origin)
            return callback(null, true);
        else
            return callback(new Error('Not allowed by CORS'));
    }
}))

app.get('/', (req, res)=>{
    res.send('Used for API requests that cannot be done on Next.js and require using Express.js');
});

const { verifyHandler }=require('./verify/verify');
app.post('/verify', verifyHandler);

app.listen(port, ()=>console.log(`Listening on port ${port}`));
