describe('list pane directive', function() {
    var rootScope, compile, scope, compiledElement;

    beforeEach(module('addbook.common.sidebar'));
    beforeEach(module('addbook.templates'));

    beforeEach(inject(function($compile, $rootScope) {
        compile = $compile;
        scope = $rootScope.$new();
    }));

    function create() {
        element = angular.element('<list-pane on-selected="mockSelected"></list-pane>');
        compiledElement = compile(element)(scope);
        scope.$digest();
    }

    it('should toggle editMode', function() {
        var mockItem = "mockItem";

        scope.mockSelected = jasmine.createSpy('mockSelected');
        // create our directive
        create();
        var isolateScope = compiledElement.isolateScope();

        isolateScope.onclick(mockItem);

        expect(scope.mockSelected).toHaveBeenCalledWith(mockItem);
    });
});
