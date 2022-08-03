

const k_trigger = document.querySelectorAll('.k-main-nav .k-navlinkhover');

const k_background = document.querySelector('.k-dropdownBackground');
const k_nav = document.querySelector('.k-container-wrapper');


var cityThere = document.querySelector('input[name="country"]:checked').value;
if(cityThere == "newyork"){
  console.log("cityThere",cityThere);
}else if(cityThere == "seattle"){
  console.log("cityThere",cityThere);
}


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
  
// button style
$('.nrmlbutton_individual').click(function(){
  $('.nrmlbutton_consolidated').removeClass('active');
  $('.nrmlbutton_individual').addClass('active');
  $('.individualTab').removeClass('hideTab');
  $('.consolidatedTab').addClass('hideTab');
  $('.aws-logo-position,.dropbox-logo-position').css("display","block");
})
$('.nrmlbutton_consolidated').click(function(){
  $('.nrmlbutton_individual').removeClass('active');
  $('.nrmlbutton_consolidated').addClass('active');
  $('.individualTab').addClass('hideTab');
  $('.consolidatedTab').removeClass('hideTab');
  $('.aws-logo-position,.dropbox-logo-position').css("display","none");
})

$('.salesSalaries-usHighestSales-stateButton,.salesSalaries-techCompanies-buttonDiv').click(function(){
  $('.stateSelectContainer').css("display","block !important").toggle();
})


// us map javascipt
$('.checkboxStyle,.buttonCity').click(function(){
  var cityName = $(this).attr('aria-cityName');
  $('.stateSelectContainer').css("display","none");
  switch(cityName){
    case "seattle":
      $('.salesSalaries-usHighestSales-info').removeClass('cityinfo_show');
      $('.seattle_city').addClass('cityinfo_show');
      $('input:radio[name=country]')[0].checked = true;
      break;
    case "boston":
      $('.salesSalaries-usHighestSales-info').removeClass('cityinfo_show');
      $('.boston_city').addClass('cityinfo_show');
      $('input:radio[name=country]')[2].checked = true;
      break;
    case "philadelphia":
      $('.salesSalaries-usHighestSales-info').removeClass('cityinfo_show');
      $('.philadelphia_city').addClass('cityinfo_show');
      $('input:radio[name=country]')[3].checked = true;
      break; 
    case "washington":
      $('.salesSalaries-usHighestSales-info').removeClass('cityinfo_show');
      $('.washington_city').addClass('cityinfo_show');
      $('input:radio[name=country]')[4].checked = true;
      break; 
    case "atlanta":
      $('.salesSalaries-usHighestSales-info').removeClass('cityinfo_show');
      $('.atlanta_city').addClass('cityinfo_show');
      $('input:radio[name=country]')[5].checked = true;
      break; 
    case "florida":
      $('.salesSalaries-usHighestSales-info').removeClass('cityinfo_show');
      $('.florida_city').addClass('cityinfo_show');
      $('input:radio[name=country]')[6].checked = true;
      break;
    case "losangeles":
      $('.salesSalaries-usHighestSales-info').removeClass('cityinfo_show');
      $('.losangeles_city').addClass('cityinfo_show');
      $('input:radio[name=country]')[7].checked = true;
      break; 
    case "sanfrancisco":
      $('.salesSalaries-usHighestSales-info').removeClass('cityinfo_show');
      $('.sanfrancisco_city').addClass('cityinfo_show');
      $('input:radio[name=country]')[8].checked = true;
      break;
    case "lakecity":
      $('.salesSalaries-usHighestSales-info').removeClass('cityinfo_show');
      $('.lakecity_city').addClass('cityinfo_show');
      $('input:radio[name=country]')[9].checked = true;
      break;
    default:
      $('.salesSalaries-usHighestSales-info').removeClass('cityinfo_show');
      $('.newyork_city').addClass('cityinfo_show');
      $('input:radio[name=country]')[1].checked = true;
      break;
  }
})

// Graph Section

$('.companyNameSelect').click(function(){
  var company = $(this).attr('aria-company');
  $('.stateSelectContainer').css("display","none");
  console.log($(this).text);
  switch(company){
    case 'lucidsoftware':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.lucid-active-logo-position').addClass('logoActive');
      $('.lucid-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("Lucid Software");
      $('.graphImg').addClass('hidegraph');
      $('.lucid').removeClass('hidegraph');
      break;
    case 'paloaltonetworks':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.paloalto-active-logo-position').addClass('logoActive');
      $('.paloalto-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("Palo Alto Networks");
      $('.graphImg').addClass('hidegraph');
      $('.paloalto').removeClass('hidegraph');
      break;
  }
})


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




