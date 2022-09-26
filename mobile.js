const btnMenu=document.getElementById('btn-Menu');

function inserir(){
    const nav=document.getElementById('nav');
    nav.classList.toggle('acao')

}
  
btnMenu.addEventListener('click', inserir)

