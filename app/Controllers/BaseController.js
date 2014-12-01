controllers.BaseController = function($scope, $routeParams, BaseFactory){
    function init(){
        $scope.relations = [];
        $scope.relations = BaseFactory.getRelations();
        
        $scope.authors = [];
        $scope.authors = BaseFactory.getAuthors($routeParams.id);
        
        $scope.books = [];
        $scope.books = BaseFactory.getBooks($routeParams.id);
    }

    init();
    
    
    $scope.addRelation = function(){
        BaseFactory.addRelation($scope.relation.author, $scope.relation.book);
    };
    
    $scope.removeRelation = function(id){
        if(confirm("Are you sure?"))
            BaseFactory.removeRelation(id);
    };
    
};