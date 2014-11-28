var controllers = {};
controllers.BaseController = function($scope, BaseFactory){
    $scope.persons = [];
    function init(){
        $scope.persons = BaseFactory.getPersons();
    }

    init();

    $scope.addPerson = function(){BaseFactory.addPerson($scope.newPerson.name, $scope.newPerson.surname);}
};