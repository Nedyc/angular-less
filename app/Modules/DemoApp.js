var demoApp = angular.module("demoApp", ["ngRoute"])
        .factory("BaseFactory", baseFactory);




demoApp.controller(controllers);

demoApp.config(function($routeProvider){
    $routeProvider
            .when("/",
                {
                    controller: "BaseController",
                    templateUrl:"app/Partials/index.html"
                }
            )
            .when("/books",
                {
                    controller: "BooksController",
                    templateUrl:"app/Partials/books.html"
                }
            )
            .when("/book/:id",
                {
                    controller: "BooksController",
                    templateUrl:"app/Partials/book.html"
                }
            )
            .when("/authors",
                {
                    controller: "AuthorsController",
                    templateUrl:"app/Partials/authors.html"
                }
            )
            .when("/author/:id",
                {
                    controller: "AuthorsController",
                    templateUrl:"app/Partials/author.html"
                }
            )
            .otherwise({redirectTo:"/"});
    
});