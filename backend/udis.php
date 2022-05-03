<?php
//SELECT * FROM `udis` WHERE fecha BETWEEN '2021-01-01' AND '2021-12-31' ORDER BY fecha
require 'db.php';

$year = date('Y');
$from = "$year-01-01";
$to = "$year-12-31";
$con = connectionDB("laravel_capri", "root", "");
$sentencia = $con->prepare("SELECT * FROM `udis` WHERE fecha BETWEEN :inicio AND :fin ORDER BY fecha");
$sentencia->bindParam(':inicio', $from);
$sentencia->bindParam(':fin', $to);
$sentencia->execute();
$datos = $sentencia->fetchAll();
echo json_encode($datos);

?>