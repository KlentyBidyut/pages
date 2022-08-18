

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
  console.log('check',company);
  $('.stateSelectContainer').css("display","none");
  switch(company){
    case 'lucidsoftware':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.lucid-active-logo-position').addClass('logoActive');
      $('.lucid-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("Lucid Software");
      $('.graphImg').addClass('hidegraph').removeClass('showgraph');
      $('.lucid').removeClass('hidegraph');
      $('.lucid').addClass('showgraph');
      break;
    case 'paloaltonetworks':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.paloalto-active-logo-position').addClass('logoActive');
      $('.paloalto-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("Palo Alto Networks");
      $('.graphImg').addClass('hidegraph').removeClass('showgraph');
      $('.paloalto').removeClass('hidegraph');
      $('.paloalto').addClass('showgraph');
      break;
    case 'google':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.google-active-logo-position').addClass('logoActive');
      $('.google-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("Google");
      $('.graphImg').addClass('hidegraph').removeClass('showgraph');
      $('.google').removeClass('hidegraph');
      $('.google').addClass('showgraph');
      break;
    case 'redhat':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.redhat-active-logo-position').addClass('logoActive');
      $('.redhat-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("Red Hat");
      $('.graphImg').addClass('hidegraph').removeClass('showgraph');
      $('.redhat').removeClass('hidegraph');
      $('.redhat').addClass('showgraph');
      break;
    case 'adobe':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.adobe-active-logo-position').addClass('logoActive');
      $('.adobe-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("Adobe");
      $('.graphImg').addClass('hidegraph').removeClass('showgraph');
      $('.adobe').removeClass('hidegraph');
      $('.adobe').addClass('showgraph');
      break;
    case 'appdynamics':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.appdynamics-active-logo-position').addClass('logoActive');
      $('.appdynamics-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("AppDynamics");
      $('.graphImg').addClass('hidegraph').removeClass('showgraph');
      $('.appdynamics').removeClass('hidegraph');
      $('.appdynamics').addClass('showgraph');
      break;
    case 'microsoft':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.microsoft-active-logo-position').addClass('logoActive');
      $('.microsoft-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("Microsoft");
      $('.graphImg').addClass('hidegraph').removeClass('showgraph');
      $('.microsoft').removeClass('hidegraph');
      $('.microsoft').addClass('showgraph');
      break;
    case 'twilio':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.twilio-active-logo-position').addClass('logoActive');
      $('.twilio-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("Twilio");
      $('.graphImg').addClass('hidegraph').removeClass('showgraph');
      $('.twilio').removeClass('hidegraph');
      $('.twilio').addClass('showgraph');
      break;
    case 'aws':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.aws-active-logo-position').addClass('logoActive');
      $('.aws-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("Amazon Web Services");
      $('.graphImg').addClass('hidegraph').removeClass('showgraph');
      $('.aws').removeClass('hidegraph');
      $('.aws').addClass('showgraph');
      break;
    case 'dropbox':
      $('.company-logo').removeClass('logoActive').removeClass('logoHide');
      $('.dropbox-active-logo-position').addClass('logoActive');
      $('.dropbox-logo-position').addClass('logoHide');
      $('.salesSalaries-techCompanies-button').text("Dropbox");
      $('.graphImg').addClass('hidegraph').removeClass('showgraph');
      $('.dropbox').removeClass('hidegraph');
      $('.dropbox').addClass('showgraph');
      break;
  }
})

// globe section country select js

$('.salesSalaries-globe-country-container').click(function(){
  var country=$(this).attr('aria-country');
  switch(country){
    case 'france':
      $('.salesSalaries-globe-country-container').removeClass('active');
      $('.france').addClass('active');
      $('.first-para').text("Average base salary for sales representatives in France would be €46,000 ($48,597.85) per year and this may range between €29,000 ($30,637.78) and €85,000 ($89,800.38) per annum.");
      $('.sec-para').text("Sales managers will typically draw around €53,800 ($56,838.36) every year on average, with the lowest range salary being around €35,000 ($38,033.10) and highest around €100,000 ($105,647.50) per year.");
      break;
    case 'germany':
      $('.salesSalaries-globe-country-container').removeClass('active');
      $('.germany').addClass('active');
      $('.first-para').text("Sales reps in Germany earn €55,000 ($58,111.35) annually as average base pay, which could range between €34,000 ($35,923.38) and as high as €91,000 ($96,147.87) per year.");
      $('.sec-para').text("When it comes to sales managers, the average salary would be around €60,000 ($63,394.20) per year and the range may be between €36,000 ($38,036.52) and €100,000 ($105,647.50) per year.");
      break;
    case 'nigeria':
      $('.salesSalaries-globe-country-container').removeClass('active');
      $('.nigeria').addClass('active');
      $('.first-para').text("With the largest population and economy in the African continent, Nigeria’s average salary for sales representatives is around NGN 75,000 ($179.01) per month. Its range is between NGN 30,000 ($71.60) and NGN 200,000 ($477.36).");
      $('.sec-para').text("Sales managers in Nigeria make around NGN 151,000 ($​​360.41) per month as their average base pay, which could range from NGN 55,000 ($131.28) to NGN 500,000 ($1,193.41) per month.");
      break;
    case 'egypt':
      $('.salesSalaries-globe-country-container').removeClass('active');
      $('.egypt').addClass('active');
      $('.first-para').text("Egypt’s sales representatives make around EGP 4,000 ($213.28) per month on average as the lowest average pay is EGP 2,000 ($106.64) and the highest average pay is EGP 8,000 ($426.56) per month.");
      $('.sec-para').text("Sales managers draw an average salary of EGP 15,000 ($799.80) per month and the salary range may be between EGP 5,000 ($266.60) and EGP 36,000 (​​$1,919.52) per month.");
      break;
    case 'southafrica':
      $('.salesSalaries-globe-country-container').removeClass('active');
      $('.southafrica').addClass('active');
      $('.first-para').text("Sales representatives in South Africa make around ZAR 12,500 ($790.26) per month on average, which could range from ZAR 5,000 ($316.11) to ZAR 30,000 ($1,896.63) per month.");
      $('.sec-para').text("Meanwhile, the average salary of sales managers is around ZAR 30,000 ($1,896.63) per month and could range between ZAR 14,000 ($885.10) and ZAR 65,000 ($4,109.37) per month.");
      break;
    case 'israel':
      $('.salesSalaries-globe-country-container').removeClass('active');
      $('.israel').addClass('active');
      $('.first-para').text("Average salary of a sales representative in Israel is estimated to be around ILS 9,000 ($2,639.07) per month and this could range from ILS 6,000 ($1,759.38) to ILS 16,000 ($4,691.68) per month.");
      $('.sec-para').text("For sales managers, average base pay is around ILS 16,000 ($4,691.68) per month, which varies between ILS 8,000 ($2,345.84) and ILS 27,000 ($7,917.20) per month.");
      break;
    case 'uae':
      $('.salesSalaries-globe-country-container').removeClass('active');
      $('.uae').addClass('active');
      $('.first-para').text("Sales representatives in the UAE would typically draw an average salary of around AED 5,000 ($1,361.25) per month and the salaries would typically range from AED 3,000 ($816.75) to AED 11,000 ($2,994.75) per month.");
      $('.sec-para').text("Sales managers earn an average base pay of around AED 14,500 ($3,947.73) per month. Their average salaries would range from AED 6,000 ($1,633.54) to AED 30,000 ($8,167.72) per month.");
      break;  
    default:
      $('.salesSalaries-globe-country-container').removeClass('active');
      $('.uk').addClass('active');
      $('.first-para').text("In the United Kingdom, the average base salary of sales representatives is around £28,000 ($34,386.38) per year, which couldvary between £15,000 ($18,421.27) and £53,000 ($65,088.50) per year.");
      $('.sec-para').text("For sales managers, around £42,000 ($51,579.57) per year would be the average base pay. The starting sales manager salary could be around £24,000 ($29,474.04) and could go as high as £75,000 ($92,106.37) per year.");
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


