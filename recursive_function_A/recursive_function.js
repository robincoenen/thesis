const fs = require('fs')
 
fs.readFile('message.json', function(err,data) {
    myOwnFunctionName(JSON.parse(data))
});
 
 
 
//starter code
function myOwnFunctionName(myOwnJson){
    for ( let x in myOwnJson){
        if(!Array.isArray(myOwnJson)){
            console.log(x);
        }
        if (typeof myOwnJson[x] == 'object' && typeof myOwnJson[x] != null){
            myOwnFunctionName(myOwnJson[x]);
        } else {
            //console.log(x);
            console.log(myOwnJson[x]);
            }
        }
}