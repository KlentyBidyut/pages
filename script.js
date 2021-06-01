

const k_trigger = document.querySelectorAll('.k-main-nav .k-navlinkhover');

const k_background = document.querySelector('.k-dropdownBackground');
const k_nav = document.querySelector('.k-container-wrapper');



function handleEnter(){
    this.classList.add('k-trigger-enter');
    setTimeout(() => this.classList.contains('k-trigger-enter') && this.classList.add('k-trigger-enter-active'), 200);

    k_background.classList.add('open');


    
  const dropdown = this.querySelector('.k-dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = k_nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

   k_background.style.setProperty('width', `${coords.width}px`);
   k_background.style.setProperty('height', `${coords.height}px`);
   k_background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);


}

function handleLeave(){
    this.classList.remove('k-trigger-enter', 'k-trigger-enter-active');
    k_background.classList.remove('open');
}

k_trigger.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
k_trigger.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));


$(document).ready(function() {
  $('.k-nav-btn-mobile').click(function() {
      $(".k-nav-mobile-container").addClass('k-mob-display');
      console.log('click')
      setTimeout(() =>  $(".k-nav-mobile-container").addClass('k-mob-opacity'), 1);
  });
  $('.k-nav-mobile-cross').click(function() {
    $(".k-nav-mobile-container").removeClass('k-mob-display');
    setTimeout(() =>  $(".k-nav-mobile-container").removeClass('k-mob-opacity'), 1);
});
  

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        console.log('navbar shadow add');
       $(".k-navbar").addClass("k-add-nav-shadow");
    } else {
       $(".k-navbar").removeClass("k-add-nav-shadow");
    }
 });


 
});




