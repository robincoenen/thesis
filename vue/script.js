/* global Vue */

var app = new Vue({
  // This is the id of our referenced div-element
  // only this element and everything in it
  // will be connected to the data
  el: '#bars',
  data: {
    chartTitle: "Robins first Vue js steps",
    svgHeight: 500,
    svgWidth: 800,
    data: [
      { name: "eins", val: 1 },
      { name: "zwei", val: 2 },
      { name: "drei", val: 3 },
      { name: "vier", val: 4 },
      { name: "fünf", val: 5 }
    ]
  },
  computed: {
    scale() {
      const x = d3
        .scaleBand()
        .domain(this.data.map(x => x.name))
        .rangeRound([0, this.svgWidth])
        .padding(0.15);
      const y = d3
        .scaleLinear()
        .domain([0, Math.max(...this.data.map(x => x.val))])
        .rangeRound([this.svgHeight, 0]);
      return { x, y };
    }
  }
})


