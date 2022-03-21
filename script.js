/*eslint-env browser*/
/* eslint-env es6 */
/* eslint-disable */

//document.addEventListener('DOMContentLoaded', function (event) ) 
//{
//
//    // setTimeout(function () {
//    //     $("#loaderBg").fadeOut();
//    // }, 2000)
//
//    $("#loaderBg").fadeOut();
//
//
//    function getTargetTop(elem) {
//        var id = elem.attr("href");
//        var offset = 60;
//        return $(id).offset().top - offset;
//    }
//
//
//    $(window).scroll(function (e) {
//        isSelected($(window).scrollTop())
//    });
//}

$(document).ready(function () {
            $(".menu-icon").on("click", function () {
                  $("nav ul").toggleClass("showing");
            });
      });


//            $(".menu-icon").on("click", function () {
//                  $("nav ul").removeClass("showing");
//            });
//      });

      // Scrolling Effect

      $(window).on("scroll", function () {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })



/// FAQ dropdowns
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}