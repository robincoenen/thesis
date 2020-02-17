
//immediate evoked function expression
(async () => {
    
const fs = require('fs')

createArray(1000);

var myData = await loadSomething();
console.log(myData);
console.log("finished loeading");


function createArray(number){
for (var x=0;x<number;x++){
        console.log(1+x);
    } 
    console.log("test");
}

function loadSomething(){
       return new Promise (resolve =>{
            fs.readFile('states.json', (err, data) => {
                if (err) console.log(err);
                resolve(JSON.parse(data));
            });
         });
    }

})();