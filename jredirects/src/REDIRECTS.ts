import { redirects } from './_internals/types';

const polyfill=(link: string)=>({[`https://joelgrayson.wixsite.com/joelgrayson${link}`]: link});

export const temporary: redirects={ //302
    // Newest at top, oldest at bottom
    // Destination: source
    
    // Page misspellings/similar names
    '/banana-system': ['/banana', '/bananasystem', '/the-banana-system'],
    '/music': ['/performance', '/performances', '/projects/music'],
    '/learn/pablo-neruda/index.html': ['/pablo-neruda', '/neruda', '/learn/neruda', '/pablo-neruda/index.html', '/learn/pablo-neruda'],
    '/plan': '/agenda',
    '/dashboard': ['/admin', '/control-panel', '/cpanel'],
    '/nyc-budget': ['/new-york-city-budget', '/nycbudget', '/newyorkcitybudget'],
    '/memes': '/meme',
    '/maths': '/math',
    '/art': ['/projects/art', '/arts', '/artwork'],
    '/sites': '/websites',
    '/machines': ['/projects/machines', '/machine'],
    '/programs': ['/tools', '/tool'],
    '/joel-case': ['/jcase', '/joelcase'],
    '/software/onedrive-download-link-generator': [
        '/onedrive-download-link-generator', '/download-link-generator-onedrive', '/onedrive-download-link', '/onedrive-link-generator',
        '/onedrive-download-generator', '/onedrive-download-generator-link'
    ],
    '/software/drive-download-link-generator': ['/drive-download-link-generator', '/drive-download-file-link-generator', '/drive-download-link', '/drive-link-generator'],
    '/software/dropbox-download-link-generator': [
        '/dropbox-download-link-generator', '/direct-download-link-generator-dropbox', '/download-link-generator-dropbox',
        '/dropbox-download-generator', '/dropbox-download-link', '/dropbox-generator',
        '/dropbox-link', '/dropbox-link-generator',
    ],
    '/software/box-download-link-generator': ['/box-download-link-generator', '/box-direct-download-generator', '/box-direct-download-link-generator', '/box-download-generator', '/box-download-link', '/direct-download-link-generator-box', '/download-link-generator-box'],
    '/software/articlify/articlify.css': ['/articlify.css', '/articlify', '/software/articlify/plain.css'],
    '/open-in-new-tab-wix-code': ['/wix-code-new-tab', /open-in-new-tab(-using)?(-wix-code)?-velo/],
    '/favicon-fetcher': '/favicon',
    '/to-be-finder/index.html': ['/to-be', '/to-be-verb', '/to-be-finder', '/to-be-verb-finder', '/be-verb'],
    '/audio': ['/sfx', '/sound', '/sound-effects', '/thelunarsquad-audio'],
    '/slaphappy': ['/projects/slaphappy', '/son-and-father', '/sonandfather', '/SonAndFather'],
    '/@jcomponents': ['/jcomponents', '/jcomponent', '/@jcomponent'],
    
    
    // Shortcuts to other sites
    'https://drive.google.com/drive/folders/1TypGPB9FFJA3dAvo1XX4cBsfRYRW3oqZ?usp=sharing': ['/file', '/drive', '/files'],
    'https://www.youtube.com/@JoelGrayson': ['/youtube', '/yt'],
    'https://github.com/JoelGrayson': '/github',
    'https://www.linkedin.com/in/joelgrayson/': '/linkedin',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ': ['/rick', '/rick-roll'],
    'https://us06web.zoom.us/j/5482667091?pwd=Vnk1bXpuMkx3ZzRGNDA1THJSNHRCQT09': '/zoom',
    'https://joels-secrets-vemwxlduba-uk.a.run.app': ['/secrets', '/sign', '/secret'],
    
    
    // Shorten page names
    '/software/edit-time': '/edit-time',
    '/connecting-street-vendors-to-the-grid': ['/connect2grid', '/connect-to-grid'],
    '/software/focus': ['/software/focus-for-google-docs', '/focus'],
    '/software/homework-checker': [
        '/hwchecker',
        '/hw-checker',
        '/homeworkchecker',
        '/hwc',
        '/homework-checker',
        '/software/homeworkchecker'
    ],
    '/software/days-until/': '/days-until',
    '/zoom-sfx': '/audio/zoom-sound-effects',
    '/big-sur-sounds': '/audio/big-sur-sounds',
    '/joel-for-grade-rep-2020': '/2020-campaign',


    // / -> /index.html (next.js does not automatically serve index.html from the public folder)
    '/learn/physics/index.html': '/learn/physics',
    '/chess/index.html': '/chess',
    '/fisher/index.html': ['/mr-fisher', '/mr. fisher', '/mister-fisher', '/paul-fisher', '/mrfisher', '/misterfisher', '/fisher'],
    '/page/terms-and-conditions.html': ['/terms-and-conditions', '/terms-and-conditions/index.html'],
    '/software/muffin/index.html': '/muffin',
    '/timeline/index.html': '/timeline',
    '/software/articlify/index.html': ['/software/articlify/'],
    '/favicon-fetcher/index.html': '/favicon-fetcher',
    '/terms-and-conditions/index.html': '/terms-and-conditions',
    '/software/canvas-circles/index.html': '/software/canvas-circles',
    '/rise/index.html': '/rise',
    '/maths/joels-sas-formula/index.html': [
        '/stem/joels-sas-equation/index.html',
        '/stem/joels-sas-equation/',
        '/maths/joels-sas-formula/',
    ],

 
    // Former page names
    '/': ['/home', '/about'],
    '/nyc/nyc-government/unit-1-quiz': '/nyc/nyc-government/unit-1-test',
    '/learn/pi': ['/memorize-pi', '/memorize-the-digits-of-pi', '/memorize-digits-of-pi', '/memorize-digits-pi', '/memorize-pie', '/pi', '/π', '/memorize-π'],
    '/nyc/nyc-government/test': '/nyc/nyc-government/content/test',
    '/nyc/nyc-government': '/nyc-government',
    '/nyc/nyc-government/nyc-budget': '/nyc-budget',
    '/blog/mindfully-travelling-to-school': '/blog/my-three-hour-journey-to-school',
    '/software/day-number-calendar.ics': '/software/day-number-calendar/apple',
    '/image/combating-climate-change/*': ['/ccc/image/*', '/image/climate-change/*', '/image/projects/combating-climate/change/*', '/image/projects/ccc/*', '/image/projects/climate-change/*'],
    '/combating-climate-change': ['/ccc', '/climate-change', '/projects/combating-climate/change', '/projects/ccc', '/projects/climate-change'],
    '/blog': ['/the-blog', '/joels-blog', '/perspective', '/the-perspective'],
    '/blog/*': ['/the-blog/*', '/joels-blog/*', '/perspective/*', '/the-perspective/*', '/joels-perspective/*'],


    // Download links which redirect to hosting platforms
    'https://drive.google.com/uc?export=download&id=10ZMJ05tzSK1FwAXWKfX5rtCLA4K9U8Hr': '/combating-climate-change/Combating%20Climate%20Change.pptx', //because larger than 100 MB
    'https://docs.google.com/document/d/1BZ4zuOEKgKcglOQbSWBilAfFkNWgqBFW0BElgroysyI/export?format=pdf': '/resume/download', //downloads resume
    'https://docs.google.com/document/d/1BZ4zuOEKgKcglOQbSWBilAfFkNWgqBFW0BElgroysyI/export?format=pdf&attachment=false': '/resume.pdf', //doesn't download but just shows as PDF
    'https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8vr4uxd120zgw67ptebbpwq22w8gvsjm&file_id=f_1278121890609': '/research/organic-optoelectronics/microscope-photos.zip',
    'https://raw.githubusercontent.com/JoelGrayson/create-joel-app/main/jredirects.tgz': '/software/create-joel-app/jredirects.tgz',
    'https://raw.githubusercontent.com/JoelGrayson/create-joel-app/main/files-to-transfer.tgz': '/software/create-joel-app/files-to-transfer.tgz',
    

    // joelgrayson.com/styles Versioning System
    '/styles/ucjg.v4.css': '/styles/ucjg.latest.css',
    '/styles/button.v2.css': '/styles/button.latest.css',
    '/styles/icon-close.v2.css': '/styles/icon-close.latest.css',
    

    // Redirect to external platforms
    'https://api.joelgrayson.com/combating-climate-change/electric-school-buses-petition/': [
        '/electric-school-bus-petition',
        '/electric-school-buses-petition',
    ],
    'https://api.joelgrayson.com/combating-climate-change/electric-school-buses-petition/signatures/': [
        '/electric-school-bus-petition-signatures',
        '/electric-school-buses-petition-signatures',
    ],
    'https://calendar.google.com/calendar/u/0?cid=Y182MTYxMThmYmE5ZTY1YWI0YzlkODlmZjAyZDlkMTcxNjE1ZjQ2ZTIyMzlhNTI0MWY1MDBlNjQzZTAyZmRmODRlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20': ['/software/day-number-calendar/google', '/software/day-number-calendar/calendar'],
    'https://github.com/JoelGrayson/Day-Number-Calendar': '/software/day-number-calendar/github',
    'https://joelgrayson.wixsite.com/vote-joel': '/2019-campaign',
    'https://developer-merch.herokuapp.com': ['/dev-merch', '/dev-merchandise', '/developer-merch', '/developer-merchandise'],


    // Polyfill the old wix website
    'https://joelgrayson.wixsite.com/joelgrayson/tesseract-os': ['/tesseract', '/tesseract-os'],
    ...polyfill('/big-sur-sounds'),
    ...polyfill('/zoom-sfx'),
    ...polyfill('/zoom-timers'), // test with parameters e.g., zoom-timers?color=white'
    ...polyfill('/open-in-new-tab-wix-code'),
    ...polyfill('/jeopardy-theme'),
    ...polyfill('/joel-case'),
    ...polyfill('/projects'),
    ...polyfill('/big-sur-icons'),
    ...polyfill('/audio/electric-shock'),
    // 'https://joelgrayson.wixsite.com/joelgrayson/audio/*': '/audio/*',
    'https://joelgrayson.wixsite.com/joelgrayson': ['/wix', '/old', '/wixsite'],
    // Based on 404 errors in jg.com/dashboard
    ...polyfill('/video/arrow'),
    ...polyfill('/video/tesseract-green-screen'),
    ...polyfill('/enjoy-your-download'),
};


export const permanent: redirects={ //301
    // Try to use temporary when possible because it is easier to change/remove items
};

