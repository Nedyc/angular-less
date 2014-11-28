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
                    controller: "BaseController",
                    templateUrl:"app/Partials/books.html"
                }
            )
            .when("/books/:id",
                {
                    controller: "BaseController",
                    templateUrl:"app/Partials/book.html"
                }
            )
            .when("/authors",
                {
                    controller: "BaseController",
                    templateUrl:"app/Partials/authors.html"
                }
            )
            .when("/authors/:id",
                {
                    controller: "BaseController",
                    templateUrl:"app/Partials/authors.html"
                }
            )
            .otherwise({redirectTo:"/"})
});