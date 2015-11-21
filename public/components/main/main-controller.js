/**
 * Top Level Controller
 * @param {Object} jsonReader - gets the contact data from the json file
 */
function MainController(jsonReader, baseURL) {
    // required for use with promises
    var self = this;

    // evaluating promise
    jsonReader.getJsonData(baseURL + '/assets/contacts.json')
        .then(function(res) {
            self.contactList = res.data.contacts;
        });


}
