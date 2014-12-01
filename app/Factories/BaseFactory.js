var controllers = {};
var baseFactory = function($http, $location){
    var factory = {};
    
    
    
    /**********BOOKS**********/
    var books = [];

    factory.addBook = function(title, description){
        $http({
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {action: "addBook", book: '{"title": "'+title+'", "description": "'+description+'"}'}
        }).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else
                window.location.reload();
            
        });
        
        
        
        
        
        
    };
    
    
    


    factory.editBook = function(id, title, description){
        
        $http({
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {action: "editBook", book: '{"id": "'+id+'", "title": "'+title+'", "description": "'+description+'"}'}
        }).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else{$location.path("/books");}
                
        });
        
    };
    
    
    
    
    
    
    factory.deleteBook = function(id){
        
        $http({
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {action: "deleteBook", id: id}
        }).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else{$location.path("/books");}
                
        });
        
    };
    
    
    
    
    
    
    

    factory.getBooks = function(id){
       books = [];
        
       $http({
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {action: "getBooks", id: id}
        }).success(function (data) {
            if(data.errors != "")
                alert("Error: "+ data.errors);
            else{
                data = data.values;
                for(var i = 0; i < data.length; i++) {
                    var obj = data[i];
                    
                    books.push(obj);
                }
            }
        });
        
        
        return books;
    };
    
    
    
    
    
    
    
    
    
    
    
    
    /**********AUTHORS**********/
    var authors = [];

    factory.addAuthor = function(name, surname){
        
        $http({
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {action: "addAuthor", author: '{"name": "'+name+'", "surname": "'+surname+'"}'}
        }).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else window.location.reload();
            
        });
        
        
        
        
        
        
    };
    
    
    


    factory.editAuthor = function(id, name, surname){
        
        $http({
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {action: "editAuthor", author: '{"id": "'+id+'", "name": "'+name+'", "surname": "'+surname+'"}'}
        }).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else{$location.path("/authors");}
                
        });
        
    };
    
    
    
    
    
    
    factory.deleteAuthor = function(id){
        $http({
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {action: "deleteAuthor", id: id}
        }).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else{$location.path("/authors");}
                
        });
        
    };
    
    
    
    
    
    
    

    factory.getAuthors = function(id){
       authors = [];
       
       $http({
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {action: "getAuthors", id: id}
        }).success(function (data) {
            if(data.errors != "")
                alert("Error: "+ data.errors);
            else{
                data = data.values;
                
                for(var i = 0; i < data.length; i++) {
                    var obj = data[i];
                    
                    authors.push(obj);
                }
            }
        });
        
        
        return authors;
    };
    
    
    
    
    
    
    /*******AUTHORS_BOOKS*******/
    var relations = [];
    factory.addRelation = function(author, book){
       $http({
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {action: "add_author_book", author_id: author, book_id: book}
        }).success(function (data) {
            if(data.errors != "")
                alert("Error: "+ data.errors);
            else $location.path("/#");
        });
    };
    
    
    
    
    factory.removeRelation = function(id){
       $http({
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {action: "delete_author_book", id: id}
        }).success(function (data) {
            if(data.errors != "")
                alert("Error: "+ data.errors);
            else $location.path("/#");
        });
    };
    
    
    
    
    factory.getRelations = function(id){
       relations = [];
       
       $http({
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {action: "get_author_books"}
        }).success(function (data) {
            if(data.errors != "")
                alert("Error: "+ data.errors);
            else{
                data = data.values;
                
                for(var i = 0; i < data.length; i++) {
                    data[i]["books"] = eval(data[i]["books"]);
                    var obj = data[i];
                    
                    relations.push(obj);
                }
                
            }
            
        });
        
        
        return relations;
    };
    
    
    


    return factory;
}