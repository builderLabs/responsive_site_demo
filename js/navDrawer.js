window.onload = function(){

  var menu = document.querySelector('#menu');
  var main = document.querySelector('.container');
  var drawer = document.querySelector('.nav');

  menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
  });
  main.addEventListener('click', function() {
    drawer.classList.remove('open');
  });

};