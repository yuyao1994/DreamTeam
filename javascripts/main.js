window.onload = function(){  
    randomcolor();  
    ChangeLogo();
    hidden();
}; 
console.log('这里是梦之队');
/**颜色渐变**/
function randomcolor(){
  var span=document.getElementsByTagName("span");
  var getRandomColor = function(){    

  return (function(m,s,c){    
    return (c ? arguments.callee(m,s,c-1) : '#') +    
      s[m.floor(m.random() * 16)]    
  })(Math,'0123456789abcdef',5)    
} 

function ChangeColor(){
   for(var i=0,len=span.length;i<len;i++){
      
          span[i].style.color= getRandomColor();

  }
setTimeout('ChangeColor()',2000); 
}
ChangeColor();
  
}
/**改变logo**/
function ChangeLogo(){
    var lis=document.getElementById("menu").getElementsByTagName("li");
    var logo=document.getElementById("logo");
    	 for(var i=0;i<lis.length;i++){
    	   lis[i].onclick=(function(a){
    	   	return function(){
    		logo.src="images/logo-"+a+".jpg";
    	}
    })(i+1);
}
}
/**隐藏**/


