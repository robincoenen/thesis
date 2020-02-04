// element
// data


const vm = new Vue({
  el:'#app',
  data: {
    pageTitle: 'My Cool Bar Chart',
    pageSubTitle: 'Subtitltinggggg',
    chartHeight: 500,
    step:15,
    barData: [
      {label: "Rob", value: 1, color: 'blue'},
      {label: "Dan", value: 2, color: 'red'},
      {label: "Nour", value: 3, color: 'orange'},
      {label: "Mar", value: 4, color: 'white'},
      {label: "Neil", value: 5, color: 'black'},
      {label: "Rob", value: 1, color: 'blue'},
      {label: "Dan", value: 2, color: 'red'},
      {label: "Nour", value: 3, color: 'orange'},
      {label: "Mar", value: 4, color: 'white'},
      {label: "Neil", value: 5, color: 'black'},
      ]
  },
  computed: {
    chartWidth(){
      return this.barData.length *this.step;
    }
    
    
    
    
    
    
  },
  
  methods: {
    changeTitle(string){
      this.pageTitle = string;
    }
  }
  
  
  
  
});