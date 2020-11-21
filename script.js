var header = document.querySelector('.page-header');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100 ){
    header.classList +=' small'
  } else{
    header.classList='page-header'
  }
})
