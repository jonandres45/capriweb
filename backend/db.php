<?php

function connectionDB($name, $usuario, $contra){
    try{
        $conexion = new PDO("mysql:host=localhost;dbname=$name", $usuario, $contra);
        return $conexion;
    }catch(PDOExceotion $e){
        echo "Error $e->getMessage";
        die();        
    }
}

?>