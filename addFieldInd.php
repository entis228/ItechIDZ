<?php
$input=json_decode(array_key_first($_POST));
$cUID=$input->cUID;
$id=intval($cUID)-228;
$key=$input->key;
require 'vendor/autoload.php';
$client = new MongoDB\Client;#('mongodb://localhost:27017');
$db = $client->idz;
$db->userdata->updateOne(
    ['idUser'=>$id],
    ['$push'=> [$key=>""]],
);