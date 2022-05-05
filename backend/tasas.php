<?php
require 'db.php';

$con = connectionDB("laravel_capri", "root", "");
$sentencia = $con->prepare("SELECT * FROM `tasas` ORDER BY fecha DESC, tasa DESC LIMIT 1");
$sentencia->execute();
$datos = $sentencia->fetch();
echo json_encode($datos);
?>