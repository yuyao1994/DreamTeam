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
function hidden(){
var lis=document.getElementById("menu").getElementsByTagName("li");
var divs=document.querySelectorAll("div .section");
    	for(var i=0;i<lis.length;i++){
    		lis[i].id=i;
    		lis[i].onclick=function(){
    			for(var j=0;j<divs.length;i++){
                    lis[j].className="";
    				divs[j].style.display="none";
    			};
    			this.className="select";
    			divs[this.id].style.display="block";
    		}
    	}
    	 }
/**window共享事件**/
function addLoadEvent(func){  
    var oldonload = window.onload;  
    if (typeof window.onload !='function') {  
        window.onload= func;  
    }else{window.onload=function(){  
        oldonload();  
        func();  
        }  
    };  
};  
addLoadEvent(randomcolor());
addLoadEvent(ChangeLogo());
addLoadEvent(hidden());
