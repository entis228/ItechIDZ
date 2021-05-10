<?php
$input=json_decode(array_key_first($_POST));
$cUID=$input->cUID;
$id=intval($cUID)-228;
$sendkey=$input->sendKey;
$oldkey=$input->oldkey;
//echo"'".$delkey."'";
require 'vendor/autoload.php';
$client = new MongoDB\Client;#('mongodb://localhost:27017');
$db = $client->idz;
$db->userdata->updateOne(
    ['idUser'=>$id],
    ['$rename'=> [$oldkey=>$sendkey]],
);