$(document).ready(function() {
    const $carousel = $(".carousel");
    const $slides = $(".carousel-slide");
    let currentIndex = 0;
    
    function showSlide(index) {
        if (index < 0) {
            currentIndex = $slides.length - 1;
        } else if (index >= $slides.length) {
            currentIndex = 0;
        }
        $carousel.css("transform", `translateX(-${currentIndex * 100}%)`);
    }
    
    setInterval(function() {
        currentIndex++;
        showSlide(currentIndex);
    }, 3000);
});

links = Array.from(document.querySelectorAll('a'));

links.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
        link.classList.add('active');
    }
});

$(document).ready(function() {
    $('.subnav-link').removeClass('active');
    $('.subnav-link:first').addClass('active');

    $('.subnav-link').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
  
        $('.subnav-link').removeClass('active');
        $(this).addClass('active');
  
        $('.subnav-content').hide();
        $(target).fadeIn();
    });
});
  
if(window.location.pathname.endsWith("index.html")){
    $(document).ready(function(){
        $("#read-more").click(function(){
            $("#short-intro").hide();
            $("#read-more").hide();
            $("#long-intro").show();
            $("#read-less").show();
        });
        $("#read-less").click(function(){
            $("#long-intro").hide();
            $("#read-less").hide();
            $("#short-intro").show();
            $("#read-more").show();
        });
    });
}

function validate() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let zip = document.getElementById("zip");
    let checkbox = document.getElementById("sms-checkbox");

    let emailLength = email.value.length;
    let emailLengthValid = emailLength > 5 && emailLength < 70;

    let isNumeric = /^\d+$/.test(phone.value);

    let zipValid = zip.value.length === 5 && zip.value.match(/^\d{5}$/);

    let validity = document.getElementById("validity-msg");
    let failed = false;

    if(!isNumeric && phone.value.length > 0){
        validity.innerHTML = "Please enter a valid phone number"
        failed = true;
    }
    if(!emailLengthValid){
        validity.innerHTML = "Please enter a valid email address"
        failed = true;
    }
    if(!zipValid && zip.value.length > 0){
        validity.innerHTML = "Please enter a valid zip code"
        failed = true;
    }
    if(!name.checkValidity() || !email.checkValidity()){
        validity.innerHTML = "Please fill out all required fields"
        failed = true;
    }
    
    if(!failed){
        validity.innerHTML = "Form submitted successfully";
        name.value = "";
        email.value = "";
        phone.value = "";
        zip.value = "";
        checkbox.checked = false;
        setTimeout(function(){
            validity.innerHTML = "";
        }, 2000);
    }
}

async function getWeather() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=40.4406&longitude=-79.9959&daily=rain_sum&current=rain&forecast_days=1&temperature_unit=fahrenheit");
    const data = await response.json();
    const rain = data.daily.rain_sum;
    console.log("rain: " + rain);

    if(rain > 0){
        document.getElementById("weather-msg").innerHTML = "Chance of rain today, bring an umbrella!";
    }
    else{
        document.getElementById("weather-msg").innerHTML = "No rain today, come enjoy the sunshine!";
    }
    document.getElementById("weather-btn").style.display = "none";

}
