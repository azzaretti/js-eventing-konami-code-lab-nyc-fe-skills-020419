const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let tracker = 0
function init(){
  function onKeyDown(event){
   let key = parseInt(event.which)
    console.log(event.which);
  
    if (key === code[tracker]){
      tracker++
   }
   if (tracker === code.length){
      alert("Nice Job!")
      tracker = 0;

   } else{
   tracker === 0;
   }
  }

  document.addEventListener('keydown', onKeyDown)
  }

init()

