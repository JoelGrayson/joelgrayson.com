function getType(val) {
    if (typeof val==='string')
        return 'string';
    if (val instanceof RegExp)
        return 'regex';
    if (val instanceof Array)
        return 'array';
}

module.exports=getType;