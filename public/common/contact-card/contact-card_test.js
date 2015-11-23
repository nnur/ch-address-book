describe('contact card directive', function() {
    var rootScope, compile, scope, compiledElement;

    beforeEach(module('addbook.common.contactCard'));
    beforeEach(module('addbook.templates'));

    beforeEach(inject(function($compile, $rootScope) {
        compile = $compile;
        scope = $rootScope.$new();
    }));

    function create() {
        element = angular.element('<contact-card></contact-card>');
        compiledElement = compile(element)(scope);
        scope.$digest();
    }

    it('should toggle editMode', function() {
        // create our directive
        create();
        var isolateScope = compiledElement.isolateScope();
        isolateScope.editMode = 'save';
        isolateScope.toggleEditMode();

        expect(isolateScope.editMode).toEqual('edit');
    });
});
