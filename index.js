/*--------------------------------------------------------------------*/
//----Sticky---header-----Start------
$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
       }else{
           $('.navbar').removeClass("sticky");
       }

       //---Under---Scroll--Up--btn-----
       if(this.scrollY > 100){
           $('.scroll-up-btn').addClass("show");
       }else{
           $('.scroll-up-btn').removeClass("show");
       }
    });

    $(window).scroll(function(){
        navbar.classList.remove("active");
     });

     //---Side--Up--Script---
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
        });
    //----Sticky---header-----End------


    //----Click----Toggole---Navbar----Buton----Start-----
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //----Click----Toggole---Navbar----Buton----End-----
});

/*--------------------------------------------------------------------*/




  //---Types--Animation---Scripet----Star-----------
    var typed = new Typed(".auto-type", {
    strings: ["YouTuber..", "Developer..", "Blogger..", "Designer..", "Freelancer...?"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
 //---Types--Animation---Scripet----Star-----------




 //---Dark---Mood---Button-----Start-------
 let darkmood = document.querySelector('#darkmood');
 darkmood.onclick = () => {
     if(darkmood.classList.contains('fa-moon')){
         darkmood.classList.replace('fa-moon', 'fa-sun');
         document.body.classList.add('active');
     }else{
         darkmood.classList.replace('fa-sun', 'fa-moon');
         document.body.classList.remove('active');  
     }
 }
//---Dark---Mood---Button-----End-------




//Theme----------Colour--------Chocies--------Toogole-------Start---------//
let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () =>{
    ThemeToggle.classList.toggle("active");
    Menu.classList.remove("fa-times");
    Navbar.classList.remove("active"); 
};

window.onscroll = () =>{
    ThemeToggle.classList.remove("active");
}

document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) =>{
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main-colar", color);
  }
});
//Theme----------Colour--------Chocies--------Toogole-------Start---------//


