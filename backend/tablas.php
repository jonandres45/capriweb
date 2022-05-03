<?php

require 'db.php';

$con = connectionDB("laravel_capri", "root", "");
$sentencia = $con->prepare("SELECT * FROM `tabla_ajuste` ORDER BY fecha DESC, `year`");
$sentencia->execute();
$datos = $sentencia->fetchAll();
echo json_encode($datos);

?>