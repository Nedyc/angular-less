<?php
//REST WEB SERVICE
require 'DbConn.class.inc.php';

$dbConn = new DbConn();

$returnObj = array();
$values = array();



/*ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(-1);*/

if(isset($_POST["action"]))
    $_POST["action"]();


/*-------books------*/
function getBooks(){
    global $dbConn, $values, $errors;
    $query = "SELECT * FROM books";
    
    if(isset($_POST["id"]) && $_POST["id"] != "undefined"){ $query.=" WHERE id = ".$_POST["id"];}
    
    $query.= " ORDER by title";
    $values = $dbConn->action( $query , true);
}

function addBook(){
    global $dbConn, $errors;
    
    if(isset($_POST["book"])){
        
        $book = json_decode(stripslashes($_POST["book"]));
        $dbConn->action("
                INSERT INTO
                    books(
                        title,
                        description
                    )
                    VALUES (
                        '{$book->title}',
                        '{$book->description}'
                    )
                ");
    }
    else
        $errors[] = "No book set";
}

function editBook(){
    global $dbConn, $values, $errors;
    
    if(isset($_POST["book"])){
        $book = json_decode(stripslashes($_POST["book"]));
        $dbConn->action("
            UPDATE
                books
            SET
                title = '{$book->title}',
                description = '{$book->description}'
            WHERE
                id = {$book->id}
                ");
    }
    else
        $errors[] = "No book set";
}

function deleteBook(){
    global $dbConn, $values, $errors;
    
    if(isset($_POST["id"]))
        $dbConn->action("DELETE FROM books WHERE id='{$_POST["id"]}'");
    else
        $errors[] = "No ID set";
}










/*------authors------*/
function getAuthors(){
    global $dbConn, $values, $errors;
    
    $query = "SELECT *, CONCAT(surname, ' ', name) AS fullname FROM authors";
    
    if(isset($_POST["id"]) && $_POST["id"] != "undefined"){ $query.=" WHERE id = ".$_POST["id"];}
    
    $query.= " ORDER by surname, name";
    $values = $dbConn->action( $query , true);
}

function addAuthor(){
    global $dbConn, $errors;
    
    if(isset($_POST["author"])){
        $author = json_decode(stripslashes($_POST["author"]));
        $dbConn->action("
            INSERT INTO
                authors(
                    name,
                    surname
                )
            VALUES(
                '{$author->name}',
                '{$author->surname}'
            )    
        ");
    }
    else
        $errors[] = "No author set";
}

function editAuthor(){
    global $dbConn, $errors;
    
    if(isset($_POST["author"])){
        $author = json_decode(stripslashes($_POST["author"]));
        $dbConn->action("
            UPDATE
                authors
            SET
                name = '{$author->name}',
                surname = '{$author->surname}'
            WHERE
                id = {$author->id}
                ");
    }
    else
        $errors[] = "No author set";
}

function deleteAuthor(){
    global $dbConn, $errors;
    if(isset($_POST["id"]))
        $dbConn->action("DELETE FROM authors WHERE id='{$_POST["id"]}'");
    else
        $errors[] = "No ID set";
}








/*-------authors_books------*/
function get_author_books(){
    global $dbConn, $values, $errors;
    
    $values = $dbConn->action("
        SELECT

            CONCAT(authors.name, \" \", authors.surname) AS fullname,
            CONCAT('[',
	            GROUP_CONCAT(CONCAT('{\"title\": \"',books.title,'\", \"id\": \"', authors_books.id,'\"}')), 
	            ']') AS books
        FROM
            authors_books
        LEFT JOIN
            books ON
                authors_books.id_book = books.id
        LEFT JOIN
            authors ON
                authors_books.id_author = authors.id
        
        GROUP BY
        	authors.id
        ORDER BY
            authors.surname,
            authors.name,
            books.title", true);
}

function add_author_book(){
    global $dbConn, $errors;
    
    if(isset($_POST["author_id"]) || isset($_POST["book_id"]))
        $dbConn->action("
            INSERT INTO
                authors_books(
                    id_book,
                    id_author
                )
                VALUES(
                    {$_POST["book_id"]},
                    {$_POST["author_id"]}
                )
                ");
    else
        $errors[] = "No ID set";
}


function delete_author_book(){
    global $dbConn, $errors;
    
    if(isset($_POST["id"]))
        $dbConn->action("DELETE FROM authors_books WHERE id='{$_POST["id"]}'");
    else
        $errors[] = "No ID set";
}





$returnObj["errors"] = $dbConn->errors;
$returnObj["values"] = $values;

echo json_encode($returnObj);
?>