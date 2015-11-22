describe('search bar directive', function() {
    var rootScope, compile;

    beforeEach(module('addbook.common.sidebar'));
    beforeEach(module('addbook.templates'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        compile = _$compile_;
        rootScope = _$rootScope_;
    }));


    it('should create the template', function() {
        rootScope.original = [];
        rootScope.displayList = [];

        element = angular.element('<search-bar></search-bar>');
        var compiled = $compile(element)(rootScope);
        rootScope.$digest();
    });

    // set the search term


    // expect displayList to be altered in some way


});
