const getType=require('./getType');

test('can do proper types', ()=>{
    expect(getType(/regex/)).toBe('regex');
    expect(getType('string')).toBe('string');
    expect(getType(['a', 'b', 'c'])).toBe('array');
    expect(getType(/\/open-in-new-tab(-using)?(-wix-code)?-velo/)).toBe('regex');
});