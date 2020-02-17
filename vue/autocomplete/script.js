
//fetchStates("states.json");


let statesData
let myArray =[];

window.fetch('states.json')
.then(data => data.json())
    .then(data  => {
        console.log("fetched", data)
        

var vm1 = new Vue({
    el:'h1',
    data: {
        stateCount: data.length
    }
});

var vm2 = new Vue({
    el:'#autocomplete',
    data: { 
        states : data,
        statesVisible: false,
        filteredStates: data
    },
    watch: {
        search: function(){
            this.filteredStates = filteredStates.filter();//filter function JS//
        }
        
        
    },
    methods: {
        showStates : function(){
            this.statesVisible= true;
        },
        hideStates : function(){
            this.statesVisible= false;
        }
        
        
    }
});
  
  
});
    
    
