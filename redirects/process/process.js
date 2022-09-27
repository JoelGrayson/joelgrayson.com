const getType=require('./getType');

function process(
    input, //: object of data
    permanent // :Boolean
) {
    const output=[];
    Object.entries(input).forEach(([key, val])=>{
        switch (getType(val)) {
            case 'array':
                for (let singleVal of val) { //array of singleVals
                    output.push(packageIntoObj(key, singleVal, permanent));
                }
                break;
            default: //any other valid single item
                output.push(packageIntoObj(key, val, permanent));
        }
    })
    return output;
}

function packageIntoObj(key, val, permanent) { //converts key and value -> obj for redirect
    switch (getType(val)) {
        case 'string':
            return { //key is the destination, value is the src so it can be an array, regex, etc.
                source: val,
                destination: key,
                permanent
            };
        case 'regex':
            return {
                source: val,
                destination: key,
                permanent
            };
        default:
            throw new TypeError('Value must be a string, regex, or array');
    }
}

module.exports=process;
