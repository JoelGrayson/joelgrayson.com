import processRedirects from './processRedirects';

test('works on example', ()=>{
    expect(JSON.stringify(processRedirects({ //check if two objects are equal with JSON.stringify
        '/new': ['/old', '/old-2']
    }, true))).toEqual(JSON.stringify([
        {
            source: '/old',
            destination: '/new',
            permanent: true,
        },
        {
            source: '/old-2',
            destination: '/new',
            permanent: true,
        }
    ]));

    console.log(processRedirects({
        '/onedrive-download-link-generator': [/\/onedrive-download-generator(-link)?/, '/download-link-generator-onedrive', '/onedrive-download-link', '/onedrive-link-generator']
    }, true))
})