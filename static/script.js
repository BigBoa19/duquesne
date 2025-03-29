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

links.forEach(element => {
    console.log(element.href);
    console.log(window.location.pathname);
    if(element.href.includes(window.location.pathname)){
        element.classList.add('active');
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