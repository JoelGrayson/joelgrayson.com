//# Setup
const express=require('express');
const app=express();
const port=process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

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


//# Pages
// ## Public Webpages
app.use(express.static('public'));

// ### Redirects
const redirects={
    '/combating-climate-change/electric-school-buses-petition': '/electric-school-buses-petition',
    '/combating-climate-change/electric-school-buses-petition': '/electric-school-buses-petition/'
};
for (const [dest, src] of Object.entries(redirects)) {
    app.get(src, (req, res)=>{
        res.redirect(dest);
    });
}

// ## API Page Routers
app.post('/verify', require('./servers/verify/verify').verifyHandler);
app.use('/combating-climate-change/electric-school-buses-petition/signatures', require('./servers/electric-school-buses-petition/server'));
app.use('/homepage-stats', require('./servers/homepage-stats/server'));


// ## 404
app.use((req, res)=>{
    res.status(404).redirect('/404.html');
});


app.listen(port, ()=>console.log(`Listening on port ${port}`));

