import { redirects } from './_internals/types';

const polyfill=(link: string)=>({[`https://joelgrayson.wixsite.com/joelgrayson${link}`]: link});

export const temporary: redirects={ //302
    '/music': ['/performance', '/performances', '/projects/music'],
    '/learn/pablo-neruda/index.html': ['/pablo-neruda', '/neruda', '/learn/neruda', '/pablo-neruda/index.html'],
    '/learn/physics/index.html': '/learn/physics',
    '/nyc/nyc-government/unit-1-quiz': '/nyc/nyc-government/unit-1-test',
    '/research/how-do-cultures-combine/How%20Cultures%20Combine%20in%20Mixed-Race%20Families.pdf': '/research/how-do-cultures-combine',
    '/learn/pi': ['/memorize-pi', '/memorize-the-digits-of-pi', '/memorize-digits-of-pi', '/memorize-digits-pi', '/memorize-pie', '/pi', '/π', '/memorize-π'],
    '/nyc/nyc-government/test': '/nyc/nyc-government/content/test',
    '/plan': '/agenda',
    'https://us06web.zoom.us/j/5482667091?pwd=Vnk1bXpuMkx3ZzRGNDA1THJSNHRCQT09': '/zoom',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ': ['/rick', '/rick-roll'],

    // Based on 404 errors in jg.com/dashboard
    ...polyfill('/video/arrow'),
    ...polyfill('/video/tesseract-green-screen'),
    ...polyfill('/enjoy-your-download'),
    '/': '/home',
    '/nyc/nyc-government': '/nyc-government',



    '/connecting-street-vendors-to-the-grid': '/connect2grid',
    'https://drive.google.com/uc?export=download&id=10ZMJ05tzSK1FwAXWKfX5rtCLA4K9U8Hr': '/combating-climate-change/Combating%20Climate%20Change.pptx', //because larger than 100 MB
    '/dashboard': ['/admin', '/control-panel', '/cpanel'],
    '/nyc/nyc-government/nyc-budget': '/nyc-budget',
    '/chess/index.html': '/chess',
    '/software/edit-time': '/edit-time',
    'https://docs.google.com/document/d/1KQD6eFb9rgbHEaR4BImEVhEnJuohLjokrUrJYhuAgCk/export?format=pdf': '/resume/download',
    '/fisher/index.html': ['/mr-fisher', '/mr. fisher', '/mister-fisher', '/paul-fisher', '/mrfisher', '/misterfisher', '/fisher'],

    // joelgrayson.com/styles Versioning System
    '/styles/ucjg.v4.css': '/styles/ucjg.latest.css',
    '/styles/button.v2.css': '/styles/button.latest.css',
    '/styles/icon-close.v2.css': '/styles/icon-close.latest.css',
    

    // Polyfill the old wix website
    'https://joelgrayson.wixsite.com/joelgrayson/tesseract-os': ['/tesseract', '/tesseract-os'],
    'https://joelgrayson.wixsite.com/joelgrayson/onedrive-download-link-generator': '/onedrive-download-link-generator',
    'https://joelgrayson.wixsite.com/joelgrayson/drive-download-link-generator': '/drive-download-link-generator',
    'https://joelgrayson.wixsite.com/joelgrayson/box-download-link-generator': '/box-download-link-generator',
    'https://joelgrayson.wixsite.com/joelgrayson/big-sur-sounds': '/big-sur-sounds',
    'https://joelgrayson.wixsite.com/joelgrayson/zoom-sfx': '/zoom-sfx',
    'https://joelgrayson.wixsite.com/joelgrayson/dropbox-download-link-generator': '/dropbox-download-link-generator',
    'https://joelgrayson.wixsite.com/joelgrayson/zoom-timers': '/zoom-timers', // test with parameters e.g., zoom-timers?color=white'
    'https://joelgrayson.wixsite.com/joelgrayson/open-in-new-tab-wix-code': '/open-in-new-tab-wix-code',
    'https://joelgrayson.wixsite.com/joelgrayson/jeopardy-theme': '/jeopardy-theme',
    'https://joelgrayson.wixsite.com/joelgrayson/joel-case': '/joel-case',
    'https://joelgrayson.wixsite.com/joelgrayson/projects': '/projects',
    'https://joelgrayson.wixsite.com/joelgrayson/big-sur-icons': '/big-sur-icons',
    'https://joelgrayson.wixsite.com/joelgrayson/audio/*': '/audio/*',
    'https://joelgrayson.wixsite.com/joelgrayson': ['/wix', '/old', '/wixsite']
};


export const permanent: redirects={ //301
    // Newest at top, oldest at bottom
    // Destination: source

    '/nyc-budget': ['/new-york-city-budget', '/nycbudget', '/newyorkcitybudget'],
    // Pages
    '/page/terms-and-conditions.html': ['/terms-and-conditions', '/terms-and-conditions/index.html'],

    'https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8vr4uxd120zgw67ptebbpwq22w8gvsjm&file_id=f_1278121890609': '/research/organic-optoelectronics/microscope-photos.zip',
    '/memes': '/meme',
    'https://api.joelgrayson.com/combating-climate-change/electric-school-buses-petition/': [
        '/electric-school-bus-petition',
        '/electric-school-buses-petition',
    ],
    'https://api.joelgrayson.com/combating-climate-change/electric-school-buses-petition/signatures/': [
        '/electric-school-bus-petition-signatures',
        '/electric-school-buses-petition-signatures',
    ],
    '/software/muffin/index.html': '/muffin',
    'https://www.youtube.com/@JoelGrayson': ['/youtube', '/yt'],
    'https://github.com/JoelGrayson': '/github',
    'https://www.linkedin.com/in/joelgrayson/': '/linkedin',
    '/timeline/index.html': '/timeline',
    'https://raw.githubusercontent.com/JoelGrayson/create-joel-app/main/jredirects.tgz': '/software/create-joel-app/jredirects.tgz',
    'https://raw.githubusercontent.com/JoelGrayson/create-joel-app/main/files-to-transfer.tgz': '/software/create-joel-app/files-to-transfer.tgz',
    '/software/focus': ['/software/focus-for-google-docs', '/focus'],
    '/maths': '/math',
    '/maths/joels-sas-formula/index.html': [
        '/stem/joels-sas-equation/index.html',
        '/stem/joels-sas-equation/',
        '/maths/joels-sas-formula/',
    ],
    '/software/homework-checker': [
        '/hwchecker',
        '/hw-checker',
        '/homeworkchecker',
        '/hwc',
        '/homework-checker',
        '/software/homeworkchecker'
    ],
    '/sites': '/websites',
    '/blog/mindfully-travelling-to-school': '/blog/my-three-hour-journey-to-school',
    'https://joels-secrets-vemwxlduba-uk.a.run.app': ['/secrets', '/sign', '/secret'],
    '/art': ['/projects/art', '/arts', '/artwork'],
    '/machines': ['/projects/machines', '/machine'],
    'https://calendar.google.com/calendar/u/0?cid=Y182MTYxMThmYmE5ZTY1YWI0YzlkODlmZjAyZDlkMTcxNjE1ZjQ2ZTIyMzlhNTI0MWY1MDBlNjQzZTAyZmRmODRlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20': ['/software/day-number-calendar/google', '/software/day-number-calendar/calendar'],
    'https://github.com/JoelGrayson/Day-Number-Calendar': '/software/day-number-calendar/github',
    '/software/day-number-calendar.ics': '/software/day-number-calendar/apple',
    '/software/days-until/': '/days-until',
    '/software/articlify/index.html': ['/software/articlify/'],
    '/software/articlify/articlify.css': ['/articlify.css', '/articlify', '/software/articlify/plain.css'],
    '/image/combating-climate-change/*': ['/ccc/image/*', '/image/climate-change/*', '/image/projects/combating-climate/change/*', '/image/projects/ccc/*', '/image/projects/climate-change/*'],
    '/combating-climate-change': ['/ccc', '/climate-change', '/projects/combating-climate/change', '/projects/ccc', '/projects/climate-change'],
    '/programs': ['/tools', '/tool'],
    '/to-be-finder/index.html': ['/to-be', '/to-be-verb', '/to-be-finder', '/to-be-verb-finder', '/be-verb'],
    '/audio': ['/sfx', '/sound', '/sound-effects', '/thelunarsquad-audio'],
    '/slaphappy': ['/projects/slaphappy', '/son-and-father', '/sonandfather', '/SonAndFather'],
    '/blog': ['/the-blog', '/joels-blog', '/perspective', '/the-perspective'],
    '/blog/*': ['/the-blog/*', '/joels-blog/*', '/perspective/*', '/the-perspective/*', '/joels-perspective/*'],
    '/open-in-new-tab-wix-code': ['/wix-code-new-tab', /open-in-new-tab(-using)?(-wix-code)?-velo/],
    '/onedrive-download-link-generator': [
        '/download-link-generator-onedrive', '/onedrive-download-link', '/onedrive-link-generator',
        '/onedrive-download-generator', '/onedrive-download-generator-link'
    ],
    '/joel-case': ['/jcase', '/joelcase'],
    '/favicon-fetcher': '/favicon',
    '/dropbox-image-raw-link-generator': [
        '/dropbox-direct-raw-image-link-generator', '/dropbox-direct-raw-link-generator', '/dropbox-image-direct-link-generator',
        '/dropbox-image-direct-raw-link-generator', '/dropbox-raw-image-link-generator', '/dropbox-raw-link-generator'
    ],
    '/drive-download-link-generator': ['/drive-download-file-link-generator', '/drive-download-link', '/drive-link-generator'],
    '/dropbox-download-link-generator': [
        '/direct-download-link-generator-dropbox', '/download-link-generator-dropbox',
        '/dropbox-download-generator', '/dropbox-download-link', '/dropbox-generator',
        '/dropbox-link', '/dropbox-link-generator'
    ],
    'https://developer-merch.herokuapp.com': ['/dev-merch', '/dev-merchandise', '/developer-merch', '/developer-merchandise'],
    '/box-download-link-generator': ['/box-direct-download-generator', '/box-direct-download-link-generator', '/box-download-generator', '/box-download-link', '/direct-download-link-generator-box', '/download-link-generator-box'],
    '/@jcomponents': ['/jcomponents', '/jcomponent', '/@jcomponent'],
    '/zoom-sfx': '/audio/zoom-sound-effects',
    '/big-sur-sounds': '/audio/big-sur-sounds',
    '/': '/about',
    '/joel-for-grade-rep-2020': '/2020-campaign',
    'https://joelgrayson.wixsite.com/vote-joel': '/2019-campaign',

    // index.html is not automatic on next.js
    '/favicon-fetcher/index.html': '/favicon-fetcher',
    '/terms-and-conditions/index.html': '/terms-and-conditions',
    '/software/canvas-circles/index.html': '/software/canvas-circles',
    '/rise/index.html': '/rise',
};

