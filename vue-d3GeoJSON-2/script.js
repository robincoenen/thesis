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

// Component

Vue.component('state', {
    data: function () {
        return {
            isSelected: false
        }
    },
    props: {
        name: '',
        geometry: []
    },
    computed: {
        defaultGeoPath: function() {
            return `M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z`
        }
    },
    template: '#state-template'
})