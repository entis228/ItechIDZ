<?php
$input=json_decode(array_key_first($_POST));
$cUID=$input->succes;
if(isset($cUID)&&$cUID!="null"){
    include('session.html');
    
}else{
    include('auth.html');
}
#var clog=document.querySelector('input[name="login"]');
#clog.addEventListener('blur', sendLogin, false);