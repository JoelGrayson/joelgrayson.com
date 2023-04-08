import { redirects } from './parts/types';

export const temporary: redirects={ //302
    // Polyfill the old wix website
    // TODO: replace wixsitejoelgrayson with whatever the free wix site hosting, such as joelgrayson.wixsite.com
    'https://wixsitejoelgrayson.com/onedrive-download-link-generator': '/onedrive-download-link-generator',
    'https://wixsitejoelgrayson.com/drive-download-link-generator': '/drive-download-link-generator',
    'https://wixsitejoelgrayson.com/box-download-link-generator': '/box-download-link-generator',
    'https://wixsitejoelgrayson.com/big-sur-sounds': '/big-sur-sounds',
    'https://wixsitejoelgrayson.com/zoom-sfx': '/zoom-sfx',
    'https://wixsitejoelgrayson.com/dropbox-download-link-generator': '/dropbox-download-link-generator',
    'https://wixsitejoelgrayson.com/zoom-timers': '/zoom-timers', // test with parameters e.g., zoom-timers?color=white'
    'https://wixsitejoelgrayson.com/open-in-new-tab-wix-code': '/open-in-new-tab-wix-code',
    'https://wixsitejoelgrayson.com/jeopardy-theme': '/jeopardy-theme',
    'https://wixsitejoelgrayson.com/joel-case': '/joel-case',
    'https://wixsitejoelgrayson.com/projects': '/projects',
    'https://wixsitejoelgrayson.com/big-sur-icons': '/big-sur-icons',
    'https://wixsitejoelgrayson.com/the-perspective': '/the-perspective',
    'https://wixsitejoelgrayson.com/audio/:slug*': '/audio/:slug*' // /audio/*
};

export const permanent: redirects={ //301
    // Newest at top, oldest at bottom
    // Destination: source

    'https://raw.githubusercontent.com/JoelGrayson/create-joel-app/main/jredirects.tgz': '/software/create-joel-app/jredirects.tgz',
    'https://raw.githubusercontent.com/JoelGrayson/create-joel-app/main/files-to-transfer.tgz': '/software/create-joel-app/files-to-transfer.tgz',
    '/favicon-fetcher/index.html': '/favicon-fetcher',
    '/terms-and-conditions/index.html': '/terms-and-conditions',
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
    '/to-be-finder': ['/to-be', '/to-be-verb', '/to-be-verb-finder', '/be-verb'],
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
    'https://thejoelgrayson.wixsite.com/mysite': '/2019-campaign',
};

