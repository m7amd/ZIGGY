$(document).ready(function () {


  // Scroll To Top 

  $(window).on('scroll', function () {

    if ($(this).scrollTop() > 1000) {

      $('#btn').show();

    } else {

      $('#btn').hide();

    }

    $('#btn').on('click', function () {

      $('body, html').animate({

        scrollTop: 0

      }, 1000);

    });

  });

  

});