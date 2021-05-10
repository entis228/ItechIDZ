var ajax = new XMLHttpRequest();
    function auth(){
        var zn = {"login":document.getElementById('login').value,"pass":document.getElementById('pass').value};
        //var cUID=localStorage.getItem('cUID');
        //localStorage.setItem('login',zn);
        //console.log(zn);
        ajax.open('POST','load.php/login');
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.onreadystatechange=function(){
            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    console.log(ajax);
                    var res1=document.getElementById('msg');
                    res1.innerHTML=ajax.response;
                }
            }
        }
        //if(cUID!=null){
        ajax.send(JSON.stringify(zn));
        //}else{
          //  ajax.send(JSON.stringify({"succes":cUID}));
        //}
    }
    function sendLogin(){
        var zn = {"curLogin":document.getElementById('login').value};
        if(zn!=""){
        //console.log(zn);
        ajax.open('POST','sendLogin.php');
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.onreadystatechange=function(){
            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    console.log(ajax);
                    var res1=document.getElementById('msg1');
                    res1.innerHTML=ajax.response;
                }
            }
        }
        ajax.send(JSON.stringify(zn));
    }
    }
    function generatePage(){
        var cUID = localStorage.getItem('cUID');
        var ajax1 = new XMLHttpRequest();
        ajax1.open('POST','generatePage.php');
        ajax1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax1.onreadystatechange=function(){
        if(ajax1.readyState == 4){
            if(ajax1.status == 200){
                console.log(ajax1);
                var res1=document.getElementById('page');
                res1.innerHTML=ajax1.response;
            }
        }
    }
    ajax1.send(JSON.stringify({"succes":cUID}));
    }
    generatePage();
    function logOut(){
        localStorage.setItem('cUID',null);
        location.reload();
    }
    function logIn(id){
        localStorage.setItem('cUID',id);
        location.reload();
    }
    function printName(){
        //if(document.getElementById('name')!=null){
        var cUID = localStorage.getItem('cUID');
        var ajax1 = new XMLHttpRequest();
        ajax1.open('POST','printName.php');
        ajax1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax1.onreadystatechange=function(){
        if(ajax1.readyState == 4){
            if(ajax1.status == 200){
                if(document.getElementById('name')!=null){
                console.log(ajax1);               
                var res1=document.getElementById('name');
                res1.innerHTML=ajax1.response;
                }
                }
            }
        }
    ajax1.send(JSON.stringify({"cUID":cUID}));
    }
//}
printName();

function loadData(){   
    var zn=localStorage.getItem('cUID');
    var filter=document.getElementById('filter').value;
    ajax.open('POST','loadData.php');
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange=function(){
        if(ajax.readyState == 4){
            if(ajax.status == 200){
                if(document.getElementById('info')!=null){
                    console.log(ajax);
                    var res1=document.getElementById('info');
                    res1.innerHTML=ajax.response;
                }
            }
        }
    }
    ajax.send(JSON.stringify({"cUID":zn,"filter":filter}));
}
loadData();
function addField(){
    var cUID = localStorage.getItem('cUID');
    var ajax1 = new XMLHttpRequest();
    ajax1.open('POST','addField.php');
    ajax1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax1.onreadystatechange=function(){
    if(ajax1.readyState == 4){
        if(ajax1.status == 200){
            console.log(ajax1);               
            //var res1=document.getElementById('msg');
            //res1.innerHTML=ajax1.response;
            loadData();
            }
        }
    }
ajax1.send(JSON.stringify({"cUID":cUID}));
}
function addFieldInd(key){
    var cUID = localStorage.getItem('cUID');
    var ajax1 = new XMLHttpRequest();
    ajax1.open('POST','addFieldInd.php');
    ajax1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax1.onreadystatechange=function(){
    if(ajax1.readyState == 4){
        if(ajax1.status == 200){
            console.log(ajax1);               
            //var res1=document.getElementById('msg');
            //res1.innerHTML=ajax1.response;
            loadData();
            }
        }
    }
ajax1.send(JSON.stringify({"cUID":cUID,"key":key}));
}
function removeField(key){
    //console.log(key); 
    var cUID = localStorage.getItem('cUID');
    var ajax1 = new XMLHttpRequest();
    ajax1.open('POST','removeField.php');
    ajax1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax1.onreadystatechange=function(){
    if(ajax1.readyState == 4){
        if(ajax1.status == 200){
            console.log(ajax1);
                          
            //var res1=document.getElementById('msg');
            //res1.innerHTML=ajax1.response;
            loadData();
            }
        }
    }
ajax1.send(JSON.stringify({"delKey":key,"cUID":cUID}));
}
function removeFieldInd(key,index){
    var cUID = localStorage.getItem('cUID');
    var ajax1 = new XMLHttpRequest();
    ajax1.open('POST','removeFieldInd.php');
    ajax1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax1.onreadystatechange=function(){
    if(ajax1.readyState == 4){
        if(ajax1.status == 200){
            console.log(ajax1);             
            var res1=document.getElementById('msg');
            res1.innerHTML=ajax1.response;
            loadData();
            }
        }
    }
ajax1.send(JSON.stringify({"delKey":key,"cUID":cUID,"index":index}));
}
function sendKey(idelem){
    var text=document.getElementById(idelem).value;
    var cUID = localStorage.getItem('cUID');
    var ajax1 = new XMLHttpRequest();
    ajax1.open('POST','changeKey.php');
    ajax1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax1.onreadystatechange=function(){
    if(ajax1.readyState == 4){
        if(ajax1.status == 200){
            console.log(ajax1);             
            //var res1=document.getElementById('msg');
            //res1.innerHTML=ajax1.response;
            loadData();
            }
        }
    }
ajax1.send(JSON.stringify({"sendKey":text,"cUID":cUID,"oldkey":idelem}));
}
function sendVal(idelem,key,index){
    var text=document.getElementById(idelem).value;
    var cUID = localStorage.getItem('cUID');
    var ajax1 = new XMLHttpRequest();
    ajax1.open('POST','changeVal.php');
    ajax1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax1.onreadystatechange=function(){
    if(ajax1.readyState == 4){
        if(ajax1.status == 200){
            console.log(ajax1);             
            //var res1=document.getElementById('msg');
            //res1.innerHTML=ajax1.response;
            loadData();
            }
        }
    }
ajax1.send(JSON.stringify({"sendVal":text,"cUID":cUID,"key":key,"index":index}));
}
