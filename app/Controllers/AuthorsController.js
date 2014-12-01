controllers.AuthorsController = function($scope, $routeParams, BaseFactory){
    
    function init(){
        $scope.authors = [];
        $scope.authors = BaseFactory.getAuthors($routeParams.id);
        
    }

    init();

    $scope.addAuthor = function(){BaseFactory.addAuthor($scope.newAuthor.name, $scope.newAuthor.surname);};
    $scope.editAuthor = function(){
        BaseFactory.editAuthor($scope.authors[0].id, $scope.authors[0].name, $scope.authors[0].surname);
    };
    
    
    $scope.deleteAuthor = function(){
        if(confirm("Are you sure?"))
            BaseFactory.deleteAuthor($scope.authors[0].id);
    };
};