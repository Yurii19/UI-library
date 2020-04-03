
let show = document.getElementById('showmenu');
let close = document.getElementById('closemenu');
let menu = document.getElementById('menu-list');

menu.classList.add('hide');
close.classList.add('removed');

close.addEventListener('click', () => {
  menu.classList.add('hide');
  close.classList.add('removed');
  show.classList.remove('removed');
})

show.addEventListener('click', () => {
  menu.classList.remove('hide');
  close.classList.remove('removed');
  show.classList.add('removed');
})
