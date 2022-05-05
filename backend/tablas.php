<?php

require 'db.php';

$con = connectionDB("laravel_capri", "root", "");
$peticion = $con->prepare("SELECT fecha FROM `tabla_ajuste` GROUP BY fecha ORDER BY fecha DESC LIMIT 1");
$peticion->execute();
$ultimaFecha = $peticion->fetch();
$sentencia = $con->prepare("SELECT * FROM `tabla_ajuste` WHERE fecha=:ultimaFecha ORDER BY fecha DESC, `year`");
$sentencia->bindParam(":ultimaFecha", $ultimaFecha['fecha']);
$sentencia->execute();
$datos = $sentencia->fetchAll();
echo json_encode($datos);

?>