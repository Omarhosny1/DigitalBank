let menutoggle = document.getElementById('menu-toggle');
let list = document.getElementById('list');

menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    list.classList.toggle('active');
}