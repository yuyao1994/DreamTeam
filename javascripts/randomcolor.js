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
