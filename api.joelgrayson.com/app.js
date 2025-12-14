//# Setup
const express=require('express');
const app=express();
const port=process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
require('dotenv').config();

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

// Request logging middleware
app.use((req, res, next) => {
    const now = new Date();
    console.log('\n=== Incoming Request ===');
    console.log('NYC Time:', now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    console.log('CA Time:', now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Path:', req.path);
    console.log('Query:', req.query);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('IP:', req.ip);
    console.log('========================\n');
    next();
});



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

// Comment line below if on mac because it uses puppeteer
console.log('Endpoint', process.env.LIVE_STATS_PATH);
if (process.env.IS_MAC) {
    console.log('Skipping live-stats because on mac and it includes puppeteer');
    app.get(process.env.LIVE_STATS_PATH, (req, res)=>res.send('Not defined on mac'));
} else {
    // Hide the path since it is being called too many times by spammers
    app.use(process.env.LIVE_STATS_PATH, require('./servers/live-stats/server').router);
}


// ## 404
app.use((req, res)=>{
    res.status(404).redirect('/404.html');
});


app.listen(port, ()=>console.log(`Listening on port ${port}`));


console.log('Created api.joelgrayson.com version 12.13.2025v2');

