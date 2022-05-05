<?php
require 'db.php';

$con = connectionDB("laravel_capri", "root", "");
$peticion = $con->prepare("SELECT fecha FROM `tarifas` GROUP BY fecha ORDER BY fecha DESC LIMIT 1");
$peticion->execute();
$ultimaFecha = $peticion->fetch();
$sentencia = $con->prepare("SELECT * FROM `tarifas` WHERE fecha = :ultimaFecha ORDER BY fecha DESC, limite_inferior");
$sentencia->bindParam(':ultimaFecha', $ultimaFecha['fecha']);
$sentencia->execute();
$datos = $sentencia->fetchAll();
echo json_encode($datos);
?>