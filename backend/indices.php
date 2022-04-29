<?php
require 'db.php';

$con = connectionDB("laravel_capri", "root", "");
$sentencia = $con->prepare("SELECT * FROM `indices` ORDER BY fecha DESC, `year` DESC");
$sentencia->execute();
$datos = $sentencia->fetchAll();
echo json_encode($datos);
?>