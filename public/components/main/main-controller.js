/**
 * Top Level Controller
 * @param {Object} jsonReader - gets the contact data from the json file
 */
function MainController(jsonReader, baseURL) {
    jsonReader.getJsonData(baseURL + '/assets/contacts.json');
}
