const express=require('express');
const app=express();
const port=process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Compress responses
const compression=require('compression');
app.use(compression());

// Update CORS policy to link api.joelgrayson.com with joelgrayson.com
const cors=require('cors');
const whitelist=[
    'https://joelgrayson.com', 'https://www.joelgrayson.com',
    'https://joelgrayson.vercel.app', 'https://www.joelgrayson.vercel.app',
];
if (process.env.NODE_ENV==='development')
    whitelist=whitelist.concat(['http://localhost:8080', 'http://localhost:3000']);
console.log('The CORS origin whitelist is', whitelist);

app.use(cors({
    origin: (origin, callback)=>{
        if (whitelist.includes(origin) || !origin)
            return callback(null, true);
        else
            return callback(new Error('Not allowed by CORS'));
    }
}));


// Handlers
app.post('/verify', require('./servers/verify/verify').verifyHandler);
app.use('/combating-climate-change/electric-school-buses-petition', require('./servers/electric-school-buses-petition/server'));
app.use('/homepage-stats', require('./servers/homepage-stats/server'));


app.listen(port, ()=>console.log(`Listening on port ${port}`));

