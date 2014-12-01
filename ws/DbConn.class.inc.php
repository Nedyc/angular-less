<?php
class DbConn{
    public $db_host = "localhost";
    public $db_user = "dorigotest";
    public $db_pswd = "";
    public $db_name = "my_dorigotest";
    
    public $conn;
    public $errors = array();
    
    // Create connection
    public function connect(){
        $this->conn = mysql_connect($this->db_host, $this->db_user, $this->db_pswd)
            or array_push($this->errors[], mysql_error());
        
        $this->selectDb();
    }
    
    
    //Select db
    public function selectDb(){
        $selected = mysql_select_db($this->db_name,$this->conn)
        or array_push($this->errors, mysql_error());
    }
    
    //Action
    public function action($query, $hasReturn = false){
        $this->connect();
        
        $action = mysql_query($query) or $this->errors[] =  mysql_error()."\n".$query;
        $returnObj = array();
        if($hasReturn){
            while ($row = mysql_fetch_array($action, true)) {
                array_push($returnObj, $row);
            }
            
            return $returnObj;
        }
        
        $this->dbClose();
    }
    
    public function dbClose(){
        mysql_close($this->conn);
    }
}
?>