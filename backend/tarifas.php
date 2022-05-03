<?php
require 'db.php';

$con = connectionDB("laravel_capri", "root", "");
$sentencia = $con->prepare("SELECT * FROM `tarifas` ORDER BY fecha DESC, limite_inferior");
$sentencia->execute();
$datos = $sentencia->fetchAll();
echo json_encode($datos);
?>