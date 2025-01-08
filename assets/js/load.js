var runninLogEl = document.querySelector('.running-log');

anime({
  targets: '.running-demo .square.el',
  translateX: 270,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
});

anime({
  targets: '.running-demo .circle.el',
  translateX: 270,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutCirc'
});

anime({
  targets: '.running-demo .triangle.el',
  translateX: 270,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  loop: true,
  update: function() {
    runninLogEl.innerHTML = 'There are currently ' + anime.running.length + ' instances running';
  }
});

// Cambiare lo sfondo a grigio chiaro dopo 5 secondi
setTimeout(function() {
  document.body.style.backgroundColor = '#d3d3d3'; // Grigio chiaro
}, 5000);

// Fermare le animazioni dopo 5 secondi
setTimeout(function() {
  anime.remove('.running-demo .el'); // Rimuove tutte le animazioni
}, 5000);
