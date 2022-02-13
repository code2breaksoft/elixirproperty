<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$json = file_get_contents('php://input');
$data = json_decode($json, true);
error_log($json);
file_put_contents("meta.json",json_encode($data));
?>