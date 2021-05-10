<?php
$input=json_decode(array_key_first($_POST));
$cUID=$input->cUID;
$id=intval($cUID)-228;
function array_first($array, $default = null)
{
   foreach ($array as $item) {
       return $item;
   }
   return $default;
}
require 'vendor/autoload.php';
$client = new MongoDB\Client;#('mongodb://localhost:27017');
$db = $client->idz;
if(isset($cUID)&&$cUID!="null"){
    $res=$db->userdata->find(
        [
            'idUser' => $id,
        ],
        [
            
        ]);
    $ind=0;
    $first = array_first($res);
    for($i=0;;$i++){
        if(!isset($first['name'.$i])){
            $ind=$i;
            break;
        }
    }
    var_dump($first['name']);
    #$db->userdata->deleteOne(['idUser'=>$id]);
    $db->userdata->updateOne(
        ['idUser'=>$id],
        ['$set'=> ['name'.$ind=>['']]]
    );
}