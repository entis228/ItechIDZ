<?php
$input=json_decode(array_key_first($_POST));
$login=$input->curLogin;
function array_first($array, $default = null)
{
   foreach ($array as $item) {
       return $item;
   }
   return $default;
}
if(isset($login)){
    require 'vendor/autoload.php';
    $client = new MongoDB\Client;#('mongodb://localhost:27017');
    $db = $client->idz;
    $res=$db->users->find(
        [
            'name' => $login,
        ],
        [
            
        ]);
    $user=array_first($res);
    if(!isset($user)){
        echo "Данный пользователь свободен, введите пароль для регистрации";
    }
}