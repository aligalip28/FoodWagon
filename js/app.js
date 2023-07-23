$(document).ready(function(){
    $('#header button').on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
})

$(function(){
    $('.owl-carousel0').owlCarousel({
      autoplay: true,
      autoplayhoverpause: true,
      autoplaytimeout: 200,
      items: 3,
      loop: true,
      layzload: true,
      stagePadding: 1,
      margin: 5,
      navText:['<i class="fa-solid fa-circle-chevron-left fa-lg text-warning"></i>','<i class="fa-solid fa-circle-chevron-right fa-lg text-warning" ></i>'],
      nav:true,
      dots:false,
      center: false,
      responsive:{
          0:{
              items:1
          },
          485:{
              items:1
          },
          728:{
              items:2
          },
          960 :{
            items:3
          },
          1200 :{
            items:5
        }
      }
    })
    });
    $(function(){
        $('.owl-carousel1').owlCarousel({
          autoplay: true,
          autoplayhoverpause: true,
          autoplaytimeout: 200,
          items: 3,
          loop: true,
          layzload: true,
          stagePadding: 1,
          margin: 5,
          navText:['<i class="fa-solid fa-circle-chevron-left fa-lg text-warning"></i>','<i class="fa-solid fa-circle-chevron-right fa-lg text-warning" ></i>'],
          nav:true,
          dots:false,
          center: false,
          responsive:{
              0:{
                  items:1
              },
              485:{
                  items:1
              },
              728:{
                  items:2
              },
              960 :{
                items:3
              },
              1200 :{
                items:6
            }
          }
        })
        });