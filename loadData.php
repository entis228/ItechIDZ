<?php
$input=json_decode(array_key_first($_POST));
$cUID=$input->cUID;
$id=intval($cUID)-228;

require 'vendor/autoload.php';
$client = new MongoDB\Client;#('mongodb://localhost:27017');
$db = $client->idz;
if(isset($cUID)&&$cUID!="null"){
    #$id=intval($cUID)-228;
    if(!isset($input->filter)|| $input->filter==""){
    $res=$db->userdata->find(
        [
            'idUser' => $id,
        ],
        [
            
        ]);
    foreach($res as $it){
        foreach($it as $key => $value){
            if($key != '_id' && $key!= 'idUser'){
                $idval=$key.'1';
                echo '<input type="text" id="',$key,'" value="',$key,'" onchange="sendKey(\'',$key,'\')">';
                $ii=0;
                foreach($value as $v){
                    echo '<input type="text" id="',$idval.$ii,'" value="',$v,'" onchange="sendVal(\'',$idval.$ii,'\',\'',$key,'\',\'',$ii,'\')">';
                    echo '<input type="button" id="',$idval.$ii."b",'" value="-" onclick="removeFieldInd(\'',$key,'\',\'',$ii,'\')">';
                    $ii++;
                }
                echo '<input type="button" value="+" onclick="addFieldInd(\'',$key,'\')">';
                echo '<input type="button" value="Удалить поле" onclick="removeField(\'',$key,'\')">';
                echo "<p></p>";
                }
            }
        }
        
    }
    else{
        #var_dump($_POST);
        $res=$db->userdata->find(
            [
                'idUser' => $id,
            ],
            [
                
            ]);
        $filter=$input->filter;
        foreach($res as $it){
            foreach($it as $key => $value){

                $rb=FALSE;
                if($key != '_id' && $key!= 'idUser'){
                    
                    if(strpos($key,$filter)!=FALSE){
                        $rb=TRUE;
                    }else{
                        foreach($value as $v){
                            if(strpos($v,$filter)!=FALSE){
                                $rb=TRUE;
                                break;
                            }
                        }
                    }
                    
                
                if($rb==TRUE){
                    $idval=$key.'1';
                    echo '<input type="text" id="',$key,'" value="',$key,'" onchange="sendKey(\'',$key,'\')">';
                    $ii=0;
                    foreach($value as $v){
                        echo '<input type="text" id="',$idval.$ii,'" value="',$v,'" onchange="sendVal(\'',$idval.$ii,'\',\'',$key,'\',\'',$ii,'\')">';
                        echo '<input type="button" id="',$idval.$ii."b",'" value="-" onclick="removeFieldInd(\'',$key,'\',\'',$ii,'\')">';
                        $ii++;
                    }
                    echo '<input type="button" value="+" onclick="addFieldInd(\'',$key,'\')">';
                    echo '<input type="button" value="Удалить поле" onclick="removeField(\'',$key,'\')">';
                    echo "<p></p>";
                }
                
            }
            }
        }
    }
}


