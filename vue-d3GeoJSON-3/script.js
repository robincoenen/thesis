// load JSON file with list of US states
window.fetch('africa.geo.json')
    .then(data => data.json() )
    .then(states => {

        // Vue.js Form Autocomplete
        let form = new Vue({
            el: '#geojson',
            data: {
                // this is the value of the search field. auto-updated by Vue
                search: '',
                // a list of states for the suggestions. By default: all states in dataset
                filteredStates: states.features,
                // a toggle variable to show/hide suggestions
                statesVisible: false
            },
            watch: {
                // whenever input changes, this function will run
                // see also  v-model="search"  in the HTML !
                search: function () {
                    // update filteredStates variable
                    // states.filter produces a new array based on var states.
                    this.filteredStates = states.features.filter(state => {
                        // .filter() iterates over all elements in array and tests them for a condition
                        // in this case: does the current search term (this.search) match the first letter(s) of any respective state?
                        // values that return true are added to filteredStates.
                        return state.properties.name.toLowerCase().slice(0, this.search.length) === this.search.toLocaleLowerCase();
                    });
                    
                    // If the search term matches exactly one state, we don't need to display suggestions.
                    if(this.filteredStates.length === 1 && this.filteredStates[0].toLowerCase() === this.search.toLocaleLowerCase()) {
                        this.filteredStates = [];
                    }
                }
            },
            // we can define additional functions that we can then use in the Vue.js HTML
            methods: {
                // show suggestions. See HTML for trigger!
                showStates: function() {
                    this.statesVisible = true;
                },
                
                // hide suggestions. See HTML for trigger!
                hideStates: function() {
                    this.statesVisible = false;
                },
                
                // when we click a state button, we fill its value in the search field and empty the suggestions list
                complete: function(state) {
                    this.search = state;
                    this.filteredStates = [];
                }
            }
        });
    });

// d3 Geo

let projection = d3.geoEqualEarth() // https://github.com/d3/d3-geo/blob/master/README.md#geoEqualEarth


// Component

Vue.component('state', {
    data: function () {
        return {
            isSelected: false,
            svgWidth: 200,
            svgHeight: 200
        }
    },
    props: ['state'],
    directives: {
        path(el, binding) {
            // el: the svg element
            // binding: state features
            
            // fit path to svg width and height
            let projection = d3.geoIdentity().fitSize([el.getAttribute('width'),el.getAttribute('height')], binding.value.geometry)
            let path = d3.geoPath().projection(projection)

            d3.select(el).append("path")
                .datum({type: "MultiPolygon", coordinates: binding.value.geometry.coordinates})
                .attr("d", path(binding.value));
        }
    },
    template: '#state-template'
})