import { redirects } from './_internals/types';

export const temporary: redirects={ //302
    // Polyfill the old wix website
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
    'https://joelgrayson.wixsite.com/joelgrayson/the-perspective': '/the-perspective',
    'https://joelgrayson.wixsite.com/joelgrayson/audio/*': '/audio/*',
    'https://joelgrayson.wixsite.com/joelgrayson': ['/wix', '/old', '/wixsite']
};

export const permanent: redirects={ //301
    // Newest at top, oldest at bottom
    // Destination: source

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
    '/perspective/mindfully-travelling-to-school': '/perspective/my-three-hour-journey-to-school',
    'https://joels-secrets-vemwxlduba-uk.a.run.app': ['/secrets', '/sign', '/secret'],
    '/projects/art': '/art',
    '/projects/machines': '/machines',
    '/projects/performances': ['/performance', '/performances'],
    'https://calendar.google.com/calendar/u/0?cid=Y182MTYxMThmYmE5ZTY1YWI0YzlkODlmZjAyZDlkMTcxNjE1ZjQ2ZTIyMzlhNTI0MWY1MDBlNjQzZTAyZmRmODRlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20': '/software/day-number-calendar/google',
    '/software/day-number-calendar.ics': '/software/day-number-calendar/apple',
    '/software/days-until/': '/days-until',
    '/software/articlify/index.html': ['/software/articlify/', '/articlify'],
    '/image/combating-climate-change/*': ['/ccc/image/*', '/image/climate-change/*', '/image/projects/combating-climate/change/*', '/image/projects/ccc/*', '/image/projects/climate-change/*'],
    '/combating-climate-change': ['/ccc', '/climate-change', '/projects/combating-climate/change', '/projects/ccc', '/projects/climate-change'],
    '/programs': ['/tools', '/tool'],
    '/to-be-finder/index.html': ['/to-be', '/to-be-verb', '/to-be-finder', '/to-be-verb-finder', '/be-verb'],
    '/audio': ['/sfx', '/sound', '/sound-effects', '/thelunarsquad-audio'],
    '/projects/slaphappy': ['/Slaphappy', '/slaphappy'],
    '/perspective': ['/the-perspective', '/joels-perspective', '/blog'],
    '/open-in-new-tab-wix-code': ['/wix-code-new-tab', /open-in-new-tab(-using)?(-wix-code)?-velo/],
    '/onedrive-download-link-generator': [
        '/download-link-generator-onedrive', '/onedrive-download-link', '/onedrive-link-generator',
        '/onedrive-download-generator', '/onedrive-download-generator-link'
    ],
    '/joel-case': ['/jcase', '/joelcase'],
    'https://w.joelgrayson.com/kiosk': ['/kiosk', '/muffin'],
    '/favicon-fetcher': '/favicon',
    'https://w.joelgrayson.com/electric-school-buses': '/electric-school-buses',
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
    'https://w.joelgrayson.com/bus-info-kiosk': '/bus-info-kiosk',
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
    '/pablo-neruda/index.html': '/pablo-neruda',
    '/software/canvas-circles/index.html': '/software/canvas-circles',
    '/rise/index.html': '/rise',
};
