<?php
$input=json_decode(array_key_first($_POST));
$cUID=$input->cUID;
$id=intval($cUID)-228;
require 'vendor/autoload.php';
$client = new MongoDB\Client;#('mongodb://localhost:27017');
$db = $client->idz;
if(isset($cUID)&&$cUID!="null"){
    $id=intval($cUID)-228;
    $res=$db->users->find(
        [
            '_id' => $id,
        ],
        [
            
        ]);
    $name="";
    foreach($res as $it){
        $name=$it['name'];
        break;
    }
    if(isset($name)){
        echo "Приветствую, ",$name,'!';
        echo "<p></p>";
    }
}