$(function(){
    $(document).ready(function() {
      $("#sp_navi_btn").click(function() {
        $(".sp_navi_li").slideToggle();
      });
    });

    // $(function() {
    //   $("#sidebtn").click(function() {
    //     $("#sidemenu_li").slideToggle();
    //     $("#sidebtn").toggleclass('active');
    //     if ($('#sidebtn').hasClass('active')) {
    //       $('#sidebtn img').attr('src', 'images/top/down_icon.png');
    //     }
    //     else {
    //       $('#sidebtn img').attr('src', 'images/top/next_icon.png');
    //     }
    //     return false;
    //   });
    // })
    
    $('.toggle').on('click',function(){
  	  $(this).next('ul').slideToggle();
  	  $(this).toggleClass('active');
  	 // if ($(this).hasClass('active')) {
    //     $(this).find('img').attr('src', 'images/top/down_icon.png');
    //   } else {
    //     $(this).find('img').attr('src', 'images/top/next_icon.png');
    //   }
  	});


    $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true
      });
    });
    
});

$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});