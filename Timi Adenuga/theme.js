const root = document.documentElement;
const checkbox = document.getElementById('toggle');
if(!checkbox.checked){
  defaultTheme()
}


function defaultTheme(){
  root.style.setProperty('--theme-color', '243')
  root.style.setProperty('--opposing-color', '100%')
  root.style.setProperty('--highlight', '160')
  root.style.setProperty('--game-hover-color', '160');
}
checkbox.addEventListener('click', ()=>{
  if(checkbox.checked){
    root.style.setProperty('--theme-color', 'white');
    root.style.setProperty('--opposing-color', '0%');
    root.style.setProperty('--highlight', '240');
    root.style.setProperty('--game-hover-color', '240')
  } 
  else{
    defaultTheme;
  }
});



