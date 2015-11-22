describe('search bar directive', function() {
    var rootScope, compile, scope, compiledElement;

    beforeEach(module('addbook.common.sidebar'));
    beforeEach(module('addbook.templates'));

    beforeEach(inject(function($compile, $rootScope) {
        compile = $compile;
        scope = $rootScope.$new();
    }));

    function create() {
        element = angular.element('<search-bar original="mockContactList" results="mockDisplayedList"></search-bar>');
        compiledElement = compile(element)(scope);
        scope.$digest();
    }


    it('should use original data if provided', function() {
        scope.mockContactList = [{
            testKey: 'testVal'
        }];
        scope.mockDisplayedList = [{}];

        create();

        expect(compiledElement.isolateScope().originalData)
            .toBe(scope.mockContactList);

    });

    it('should update the results based on the search query', function() {

        scope.mockContactList = [{
            testKey: 'testVal'
        }];
        scope.mockDisplayedList = [];

        // create our directive
        create();

        // set the search query, ignore case
        compiledElement.isolateScope().searchQuery = 'testval';
        scope.$digest();

        // check our isolate scope
        expect(compiledElement.isolateScope().searchResults)
            .toEqual([{
                testKey: 'testVal'
            }]);

        // check that it affected our parent scope
        expect(scope.mockDisplayedList)
            .toEqual([{
                testKey: 'testVal'
            }]);
    });

    it('should set results to empty if no results are found', function() {

        scope.mockContactList = [{
            testKey: 'testVal'
        }];
        scope.mockDisplayedList = [{
            someKey: 'someVal'
        }];

        // create our directive
        create();

        // set the search query, ignore case
        compiledElement.isolateScope().searchQuery = 'a rediculous query';
        scope.$digest();

        expect(compiledElement.isolateScope().searchResults)
            .toEqual([]);
    });


});
