var ajList ={
    
    1: [2,5],
    2: [1],
    3: [4,5],
    4: [3],
    5: [1,5],

}


let fs = require('fs')
let list = {}
fs.readFile('./neighbours.json', (err, data) => {
   data = JSON.parse(data)
   for (key in data){
       let maritime = data[key]
       if(!list.hasOwnProperty(maritime.Country)){
           list[maritime.Country] =[]
       } 
       list[maritime.Country].push(maritime.Neighbour);
       
      if(!list.hasOwnProperty(maritime.Neighbour)){
          list[maritime.Neighbour] =[]
      } 
        list[maritime.Neighbour].push(maritime.Country);
   }
    console.log(list);
})