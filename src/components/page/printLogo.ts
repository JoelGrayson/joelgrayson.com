export default function printLogo() {
    const bgStyle='text-shadow: #84d8f0 1px 1px 3px';
    const textStyle='text-shadow: #5ceded .3px .3px 1.5px; font-weight: bold';
    console.log(`%c┏---------------------------------------┓
|                                       |
|            jjjjjjjjj                  |
|        jjjjjjjjjjjjjjj                |
|     jjjjjjjjjjjjjjjjjjj               |
|    jjjjjjjjj      jjjjj   jjjjjjjjj   |
|    jjjjj          jjjjjjjjjjjjjjjjj   |
|                  jjjjjjjjjjjjj        |
|              jjjjjjjjjj               |
|           jjjjjjjjjjjj   jjjj   jjjj  |
|        jjjjjjjjjjjjjj   jjjjjj jjjjjj |
|      jjjjjjjjjjjjjjjj    jjjj   jjjj  |
|    jjjjjjjj   jjjjjj         jjjj     |
|   jjjjjj    jjjjjjj         jjjjjj    |
|  jjjjj    jjjjjjjj           jjjj     |
|  jjjjj  jjjjjjjj                      |
|  jjjjjjjjjjjj                         |
|   jjjjjjjj           %cjoelgrayson.com%c  |
|                                       |
┖---------------------------------------┛`, bgStyle, textStyle, bgStyle);
}

