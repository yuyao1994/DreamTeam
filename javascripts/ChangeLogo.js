var lis=document.getElementById("menu").getElementsByTagName("li");
var logo=document.getElementById("logo");
    	 for(var i=0;i<lis.length;i++){
    	   lis[i].onclick=(function(a){
    	   	return function(){
    		logo.src="images/logo-"+a+".jpg";
    	}
    })(i+1);
}
