describe('main controller', function() {

    var MainController;

    beforeEach(function() {
        module('addbook.components.main');
    });

    beforeEach(function() {
        module(function($provide) {
            $provide.value('baseURL', 'testUrl');
        });
    });

    beforeEach(inject(function($controller, $q) {
        MainController = $controller('MainController');
    }));

    describe('updateContactCard', function() {
        it('should set the displayed contact', function() {
            MainController.updateContactCard('testContact');
            expect(MainController.selectedContact).toEqual('testContact');
        });
    });

    describe('initContactLists', function() {
        it('should initialize lists', function() {
            var mockContactArray = ['testContact'];
            MainController.initContactLists(mockContactArray);

            expect(MainController.contactList).toEqual(mockContactArray);
            expect(MainController.displayedList).toEqual(mockContactArray);
            expect(MainController.selectedContact).toEqual('testContact');
        });
    });
});
