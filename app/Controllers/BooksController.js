controllers.BooksController = function($scope, $routeParams, BaseFactory){
    
    function init(){
        $scope.books = [];
        $scope.books = BaseFactory.getBooks($routeParams.id);
    }

    init();

    $scope.addBook = function(){BaseFactory.addBook($scope.newBook.title, $scope.newBook.description);};
    $scope.editBook = function(){
        BaseFactory.editBook($scope.books[0].id, $scope.books[0].title, $scope.books[0].description);
    };
    
    
    $scope.deleteBook = function(){
        if(confirm("Are you sure?"))
            BaseFactory.deleteBook($scope.books[0].id);
    };
};