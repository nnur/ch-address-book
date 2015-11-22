/**
 * Top Level Controller
 * @param {Object} jsonReader - gets the contact data from the json file
 */
function MainController(jsonReader, baseURL) {
    // in left hand bar
    this.displayedList = [];


    // required for use with promises
    var self = this;

    /** Sets the currently displayed contact */
    this.updateContactCard = function(contact) {
        self.selectedContact = contact;
    };

    /**
     * Initialize lists to be displayed
     * @param  {Array} contactArray : All data from contacts.json
     */
    this.initContactLists = function(contactArray) {
        self.contactList = contactArray;
        //initially display all contacts in left bar
        self.displayedList = contactArray;
        // initially display first contact on right-hand card
        self.selectedContact = self.displayedList[0];
    };

    // Get contact data from the file
    jsonReader.getJsonData(baseURL + '/assets/contacts.json')
        .then(function(res) {
            self.initContactLists(res.data.contacts);
        });
}
