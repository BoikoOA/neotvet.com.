document.getElementById('photoContainer').addEventListener('click', function() {
  document.getElementById('overlay').classList.add('active');
});
document.getElementById('overlay').addEventListener('click', function() {
  this.classList.remove('active');
});
