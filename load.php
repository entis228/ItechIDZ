<?php
require 'vendor/autoload.php';
$client = new MongoDB\Client;#('mongodb://localhost:27017');
$db = $client->idz;
function array_first($array, $default = null)
{
   foreach ($array as $item) {
       return $item;
   }
   return $default;
}
$input=json_decode(array_key_first($_POST));
$login = $input->login;
$password = $input->pass;
$access="FALSE";
if(isset($login)){
    $res=$db->users->find(
        [
            'name' => $login,
        ],
        [
            
        ]);
    $user=array_first($res);
    if(isset($user)){
        if($user['pass']==$password){
            $access="TRUE";
        }
        else{
            echo "Пользователь зарегестрирован, неверный пароль";
        }
    }
}
if($access=="TRUE"){
    $id=$user['_id'];
    $r=intval($id)+228;
    #echo'<input type="button" value="" onload="logIn(',$r,');">';
    echo '<img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" onload="logIn(',$r,')" width="100" height="132">';
}