var lis=document.getElementById("menu").getElementsByTagName("li");
var logo=document.getElementById("logo");

         for(var i=0;i<lis.length;i++){
    	   lis[i].addEventListen("click" (function(a){
    	   	return function(){
    		logo.src="images/logo-"+a+".jpg";
        }
    })(i+1););
   /* var fun=lis[i].onclick=(function(a){
    	   	return function(){
    		logo.src="images/logo-"+a+".jpg";
        }
    })(i+1);)
    lis[i].addEventListen("click" fun)*/
    
}

