

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

$('#crmValue').click(function(){
  var value = $('select#aioConceptName option:selected').val();
//   // var e=document.getElementById("aioConceptName");
//   // var value=e.value;
//   var $option = $(this).find('option:selected');
//   var value = $option.val();
  console.log("value",value);
})

// us map javascipt
$('.checkboxStyle,.buttonCity').click(function(){
  var cityName = $(this).attr('aria-cityName');
  console.log(cityName,"cityName")
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


// countries
$('.subStates').removeClass("show");
$('.emeaContainer').addClass("show");
$('.globecheckboxStyle').click(function(){
  var countrySelected = $(this).attr('aria-cityName');
  console.log("countrySelected",countrySelected);
  switch(countrySelected){
    case "namer":
      $('.subStates').removeClass("show");
      $('.namerContainer').addClass("show");
      break;
    case "emea":
      $('.subStates').removeClass("show");
      $('.emeaContainer').addClass("show");
      break;
    case "apac":
      $('.subStates').removeClass("show");
      $('.apacContainer').addClass("show");
      break;
    case "latam":
      $('.subStates').removeClass("show");
      $('.latamContainer').addClass("show");
      break;
  }
})


// substates
$('.salesSalaries-globe-country-container-emea,.salesSalaries-globe-country-container-namer,.salesSalaries-globe-country-container-apac,.salesSalaries-globe-country-container-latam').click(function(){
  var country=$(this).attr('aria-country');
  switch(country){
    case 'france':
      $('.salesSalaries-globe-country-container-emea').removeClass('active');
      $('.france').addClass('active');
      $('.first-para').text("Average base salary for sales representatives in France would be €46,000 ($48,597.85) per year and this may range between €29,000 ($30,637.78) and €85,000 ($89,800.38) per annum.");
      $('.sec-para').text("Sales managers will typically draw around €53,800 ($56,838.36) every year on average, with the lowest range salary being around €35,000 ($38,033.10) and highest around €100,000 ($105,647.50) per year.");
      break;
    case 'germany':
      $('.salesSalaries-globe-country-container-emea').removeClass('active');
      $('.germany').addClass('active');
      $('.first-para').text("Sales reps in Germany earn €55,000 ($58,111.35) annually as average base pay, which could range between €34,000 ($35,923.38) and as high as €91,000 ($96,147.87) per year.");
      $('.sec-para').text("When it comes to sales managers, the average salary would be around €60,000 ($63,394.20) per year and the range may be between €36,000 ($38,036.52) and €100,000 ($105,647.50) per year.");
      break;
    case 'nigeria':
      $('.salesSalaries-globe-country-container-emea').removeClass('active');
      $('.nigeria').addClass('active');
      $('.first-para').text("With the largest population and economy in the African continent, Nigeria’s average salary for sales representatives is around NGN 75,000 ($179.01) per month. Its range is between NGN 30,000 ($71.60) and NGN 200,000 ($477.36).");
      $('.sec-para').text("Sales managers in Nigeria make around NGN 151,000 ($​​360.41) per month as their average base pay, which could range from NGN 55,000 ($131.28) to NGN 500,000 ($1,193.41) per month.");
      break;
    case 'egypt':
      $('.salesSalaries-globe-country-container-emea').removeClass('active');
      $('.egypt').addClass('active');
      $('.first-para').text("Egypt’s sales representatives make around EGP 4,000 ($213.28) per month on average as the lowest average pay is EGP 2,000 ($106.64) and the highest average pay is EGP 8,000 ($426.56) per month.");
      $('.sec-para').text("Sales managers draw an average salary of EGP 15,000 ($799.80) per month and the salary range may be between EGP 5,000 ($266.60) and EGP 36,000 (​​$1,919.52) per month.");
      break;
    case 'southafrica':
      $('.salesSalaries-globe-country-container-emea').removeClass('active');
      $('.southafrica').addClass('active');
      $('.first-para').text("Sales representatives in South Africa make around ZAR 12,500 ($790.26) per month on average, which could range from ZAR 5,000 ($316.11) to ZAR 30,000 ($1,896.63) per month.");
      $('.sec-para').text("Meanwhile, the average salary of sales managers is around ZAR 30,000 ($1,896.63) per month and could range between ZAR 14,000 ($885.10) and ZAR 65,000 ($4,109.37) per month.");
      break;
    case 'israel':
      $('.salesSalaries-globe-country-container-emea').removeClass('active');
      $('.israel').addClass('active');
      $('.first-para').text("Average salary of a sales representative in Israel is estimated to be around ILS 9,000 ($2,639.07) per month and this could range from ILS 6,000 ($1,759.38) to ILS 16,000 ($4,691.68) per month.");
      $('.sec-para').text("For sales managers, average base pay is around ILS 16,000 ($4,691.68) per month, which varies between ILS 8,000 ($2,345.84) and ILS 27,000 ($7,917.20) per month.");
      break;
    case 'uae':
      $('.salesSalaries-globe-country-container-emea').removeClass('active');
      $('.uae').addClass('active');
      $('.first-para').text("Sales representatives in the UAE would typically draw an average salary of around AED 5,000 ($1,361.25) per month and the salaries would typically range from AED 3,000 ($816.75) to AED 11,000 ($2,994.75) per month.");
      $('.sec-para').text("Sales managers earn an average base pay of around AED 14,500 ($3,947.73) per month. Their average salaries would range from AED 6,000 ($1,633.54) to AED 30,000 ($8,167.72) per month.");
      break; 

    case 'usa':
      $('.salesSalaries-globe-country-container-namer').removeClass('active');
      $('.usa').addClass('active');
      $('.first-para').text("For a sales representative, the average base pay would be around $50,000 per year and the salary would typically range between $27,000 and $92,000.");
      $('.sec-para').text("The average base pay of a sales manager in the United States would be $69,000 per year and ranges between $36,000 and $100,000.");
      break; 
    case 'brazil':
      $('.salesSalaries-globe-country-container-namer').removeClass('active');
      $('.brazil').addClass('active');
      $('.first-para').text("Sales representatives in Brazil would likely make around R$5,500 ($1,049.80) in a year as their average base pay and their salaries might range from R$2,000 ($381.75) to R$13,000 ($2,481.34) per year.");
      $('.sec-para').text("Sales manager salary would be around R$14,000 ($2,672.22) per year on average and may range from R$6,000 ($1,145.23) to R$26,000 ($4,962.69).");
      break; 
    case 'canada':
      $('.salesSalaries-globe-country-container-namer').removeClass('active');
      $('.canada').addClass('active');
      $('.first-para').text("A sales representative in Canada would likely get around CA$46,000 ($35,440.70) as the average base pay every year and the salaries would range between CA$26,000 ($20047.56) and CA$81,000 ($62455.86) per year.");
      $('.sec-para').text("In the case of sales managers in Argentina, they would make around ARS 260,000 ($2,094.69) per month and the range would be from ARS 100,000 ($805.65) to ARS 500,000 ($4028.24) per month.");
      break; 
    case 'argentina':
      $('.salesSalaries-globe-country-container-namer').removeClass('active');
      $('.argentina').addClass('active');
      $('.first-para').text("Sales representative salaries could be around ARS 200,000 ($1,611.81) per month on average and it could range from ARS 54,000 ($435.19) to ARS 300,000 ($2416.95) per month.");
      $('.sec-para').text("For a sales manager, average base salary is estimated to be around CA$66,000 ($50889.96) per year and the salary range would be from CA$37,000 ($28529.22) to CA$100,000 ($77112) per year.");
      break;

    case 'china':
      $('.salesSalaries-globe-country-container-apac').removeClass('active');
      $('.china').addClass('active');
      $('.first-para').text("In China, sales representatives would be making around CN¥8,000 ($1,194.51) per month as the average base salary, which could range from CN¥5,000 ($746.57) to CN¥16,000 ($2,389.02) per month.");
      $('.sec-para').text("Sales managers draw around CN¥15,000 ($2,239.71) every month on average and their salary could range from CN¥5,000 ($746.57) to CN¥30,000 ($4,479.42) per month.");
      break; 
    case 'japan':
      $('.salesSalaries-globe-country-container-apac').removeClass('active');
      $('.japan').addClass('active');
      $('.first-para').text("Average sales rep salary in Japan may be around JP¥5,100,000 ($37,761.93) per year, which could range from JP¥3,500,000 ($25,915.05) to JP¥9,900,000 ($73,302.57) per year.");
      $('.sec-para').text("For sales managers, the average base salary could be JP¥8,100,000 ($59,974.83) per year and their annual salaries could range from JP¥4,800,000 ($35,540.64) to JP¥10,000,000 ($74,043).");
      break;
    case 'australia':
      $('.salesSalaries-globe-country-container-apac').removeClass('active');
      $('.australia').addClass('active');
      $('.first-para').text("On average, sales representatives in Australia make around A$65,000 ($44,948.80) per year. The average base salaries they draw in a year could range from A$50,000 ($34,576) to A$100,000 ($69,152) per year.");
      $('.sec-para').text("Sales managers draw A$100,000 ($69,152) as their average base salaries in a year, which could range from A$63,000 ($43,565.76) to A$200,000 ($138,304) per year.");
      break;
    case 'india':
      $('.salesSalaries-globe-country-container-apac').removeClass('active');
      $('.india').addClass('active');
      $('.first-para').text("The average base salary for sales representatives in India could be around ₹20,000 ($255.50) per month and their monthly salaries might range from ₹12,000 ($153.30) to ₹50,000 ($638.75).");
      $('.sec-para').text("On the other hand, sales managers make around ₹61,000 ($779.27) per month as their base salary. The average starting salary would be around ₹27,000 ($344.92) and the highest salaries could touch ₹150,000 ($1,916.24) per month.");
      break;
    case 'singapore':
      $('.salesSalaries-globe-country-container-apac').removeClass('active');
      $('.singapore').addClass('active');
      $('.first-para').text("Sales representatives in Singapore would earn around SGD 3,000 ($2,160.87) per month as the average base pay. This could range from SGD 2,000 ($1,444.53) to SGD 6,000 ($4,333.59) per month.");
      $('.sec-para').text("In the case of sales managers, the average pay could be around SGD 5,000 ($3,609.70) per month and may range from SGD 3,000 ($1,440.58) to SGD 8,000 ($5,762.32) per month.");
      break;
    
    case 'brazil':
      $('.salesSalaries-globe-country-container-latam').removeClass('active');
      $('.brazil').addClass('active');
      $('.first-para').text("Sales representatives in Brazil would likely make around R$5,500 ($1,049.80) in a year as their average base pay and their salaries might range from R$2,000 ($381.75) to R$13,000 ($2,481.34) per year");
      $('.sec-para').text("Sales manager salary would be around R$14,000 ($2,672.22) per year on average and may range from R$6,000 ($1,145.23) to R$26,000 ($4,962.69).");
      break;
    case 'latamargentina':
      $('.salesSalaries-globe-country-container-latam').removeClass('active');
      $('.latamargentina').addClass('active');
      $('.first-para').text("Sales representative salaries could be around ARS 200,000 ($1,611.81) per month on average and it could range from ARS 54,000 ($435.19) to ARS 300,000 ($2416.95) per month.");
      $('.sec-para').text("For a sales manager, average base salary is estimated to be around CA$66,000 ($50889.96) per year and the salary range would be from CA$37,000 ($28529.22) to CA$100,000 ($77112) per year.");
      break;
    default:
      $('.salesSalaries-globe-country-container-emea').removeClass('active');
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



