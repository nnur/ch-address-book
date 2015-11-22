/**
 * Top Level Controller
 * @param {Object} jsonReader - gets the contact data from the json file
 */
function MainController($scope, jsonReader, baseURL) {
    var searchService = {
        searchByName: function(term, dataToSearch) {

            _.each(dataToSearch, function(val, key) {
                _.each(val, function(innerVal, innerKey) {
                    if (_(innerVal).contains(term)) {
                        console.log("found it");
                    }
                });
            });

        }
    };



    this.searchQuery = "";
    this.displayedList = [];

    // required for use with promises
    var self = this;

    // evaluating promise
    jsonReader.getJsonData(baseURL + '/assets/contacts.json')
        .then(function(res) {
            self.contactList = res.data.contacts;
        });


}
