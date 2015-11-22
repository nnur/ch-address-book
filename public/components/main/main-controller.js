/**
 * Top Level Controller
 * @param {Object} jsonReader - gets the contact data from the json file
 */
function MainController($scope, jsonReader, baseURL) {

    this.displayedList = [];

    // required for use with promises
    var self = this;

    this.updateContactCard = function(contact) {
        self.selectedContact = contact;
        console.log(contact);
    };

    // evaluating promise
    jsonReader.getJsonData(baseURL + '/assets/contacts.json')
        .then(function(res) {
            self.contactList = res.data.contacts;
            //initially display all contacts
            self.displayedList = res.data.contacts;

            self.selectedContact = self.displayedList[0];
        });


}
