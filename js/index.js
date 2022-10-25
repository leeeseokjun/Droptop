$("document").ready(function(){

    $(".nav > ul li").click(function(){ 
        $(".nav-box").slideToggle();
    });

    

    $(".content-swiper .banner").click(function(){
        let i = $(this).index()
        
        console.log(i)
        if(i === 0){
            $(".menu-content .menu1").show()
            $(".menu-content .menu2").hide()
            $(".menu-content .menu3").hide()
        }else if(i === 1){
            $(".menu-content .menu1").hide()
            $(".menu-content .menu2").show()
            $(".menu-content .menu3").hide()
        }else{
            $(".menu-content .menu1").hide()
            $(".menu-content .menu2").hide()
            $(".menu-content .menu3").show()
        }


    });


    for(let i = 0; i < $(".food-content .food-img").length; i++){
        console.log(i)
        if(i === 0){
            $(".food-content .food-img").removeClass("on").eq(i).addClass("on")
            $(".food-content .food-txt").css("transform", "translateX(0)")
        }
    }
    for(let i = 0; i < $(".cake-content .cake-img").length; i++){
        console.log(i)
        if(i === 0){
            $(".cake-content .cake-img").removeClass("on").eq(i).addClass("on")
            $(".cake-content .cake-txt").css("transform", "translateX(0)")
        }
    }


    const swiper = new Swiper(".swiper.content-swiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        }
    });    

    const swiper2 = new Swiper(".swiper.food-content", {
        slidesPerView: 'auto',
        spaceBetween: 25,
        loop: true,
    });

    const swiper3 = new Swiper(".swiper.cake-content", {
        slidesPerView: 'auto',
        spaceBetween: 25,
        loop: true,
    });  
    const swiper4 = new Swiper(".swiper.store-content", {
        loop: true,
        slidesPerView: 4,
        pagination: {
            clickable: true,
        },
    });
})