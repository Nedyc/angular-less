var controllers = {};
var transReq = function(obj) {
    var str = [];
    for(var p in obj)
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
};

var baseFactory = function($http, $location){
    var factory = {};
    
    //Set http basic parameters
    var req = {
            method: 'POST',
            url: "http://www.dorigotest.altervista.org/web_services/",
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
    
    
    
    
    
    /**********BOOKS**********/
    var books = [];

    factory.addBook = function(title, description){
        req.data = {action: "addBook", book: '{"title": "'+title+'", "description": "'+description+'"}'};
       req.transformRequest = transReq;
       
        $http(req).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else
                window.location.reload();
            
        });
        
        
        
        
        
        
    };
    
    
    


    factory.editBook = function(id, title, description){
        req.data = {action: "editBook", book: '{"id": "'+id+'", "title": "'+title+'", "description": "'+description+'"}'};
       req.transformRequest = transReq;
       
        $http(req).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else{$location.path("/books");}
                
        });
        
    };
    
    
    
    
    
    
    factory.deleteBook = function(id){
        req.data = {action: "deleteBook", id: id};
       req.transformRequest = transReq;
       
        $http(req).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else{$location.path("/books");}
                
        });
        
    };
    
    
    
    
    
    
    

    factory.getBooks = function(id){
       books = [];
       req.data = {action: "getBooks", id: id}; 
       req.transformRequest = transReq;
       
       $http(req).success(function (data) {
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
        req.data = {action: "addAuthor", author: '{"name": "'+name+'", "surname": "'+surname+'"}'};
       req.transformRequest = transReq;
       
        $http(req).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else window.location.reload();
            
        });
        
        
        
        
        
        
    };
    
    
    


    factory.editAuthor = function(id, name, surname){
        req.data = {action: "editAuthor", author: '{"id": "'+id+'", "name": "'+name+'", "surname": "'+surname+'"}'};
       req.transformRequest = transReq;
       
        $http(req).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else{$location.path("/authors");}
                
        });
        
    };
    
    
    
    
    
    
    factory.deleteAuthor = function(id){
        req.data = {action: "deleteAuthor", id: id};
       req.transformRequest = transReq;
       
        $http(req).success(function (data) {
            if(data.errors != "")
                alert(data.errors);
            else{$location.path("/authors");}
                
        });
        
    };
    
    
    
    
    
    
    

    factory.getAuthors = function(id){
       authors = [];
       req.data = {action: "getAuthors", id: id};
       req.transformRequest = transReq;
       
       $http(req).success(function (data) {
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
        req.data = {action: "add_author_book", author_id: author, book_id: book};
       req.transformRequest = transReq;
       
       $http(req).success(function (data) {
            if(data.errors != "")
                alert("Error: "+ data.errors);
            else $location.path("/#");
        });
    };
    
    
    
    
    factory.removeRelation = function(id){
        req.data = {action: "delete_author_book", id: id};
       req.transformRequest = transReq;
       
       $http(req).success(function (data) {
            if(data.errors != "")
                alert("Error: "+ data.errors);
            else $location.path("/#");
        });
    };
    
    
    
    
    factory.getRelations = function(id){
       relations = [];
       req.data = {action: "get_author_books"};
       req.transformRequest = transReq;
       
       $http(req).success(function (data) {
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