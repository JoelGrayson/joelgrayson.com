const process=require('./process');

test('works on example', ()=>{
    expect(JSON.stringify(process({ //check if two objects are equal with JSON.stringify
        '/old': ['/new', '/new-2']
    }, true))).toEqual(JSON.stringify([
        {
            source: '/old',
            destination: '/new',
            permanent: true,
        },
        {
            source: '/old',
            destination: '/new-2',
            permanent: true,
        }
    ]));
})