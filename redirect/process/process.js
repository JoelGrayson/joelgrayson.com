const getType=require('./getType');

function process(
    input, //: object of data
    permanent // :Boolean
) {
    const output=[];
    Object.entries(input).forEach(([key, val])=>{
        switch (getType(val)) {
            case 'string':
                output.push({
                    source: key,
                    destination: val,    
                    permanent
                });
                break;
            case 'regex':
                output.push({
                    source: key,
                    destination: val.toString(),
                    permanent
                })
                break;
            case 'array':
                val.forEach(singleVal=>{ //val is an array of singleVals
                    output.push({
                        source: key,
                        destination: singleVal,
                        permanent
                    });
                });
                break;
            default:
                throw new TypeError('value must be string, regex, or array');
        }
    })
    return output;
}


module.exports=process;
