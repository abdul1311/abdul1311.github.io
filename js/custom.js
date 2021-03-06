// Custom Script
// Developed by: Samson.Onna
var customScripts = {
    profile: function () {
        // portfolio
        if ($('.isotopeWrapper').length) {
            var $container = $('.isotopeWrapper');
            var $resize = $('.isotopeWrapper').attr('id');
            // initialize isotope
            $container.isotope({
                itemSelector: '.isotopeItem',
                resizable: false, // disable normal resizing
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
            $("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
            $('.navbar-inverse').on('click', 'li a', function () {
                $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
            });
            $('#filter a').click(function () {
                $('#filter a').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'easeOutQuart',
                        queue: false
                    }
                });
                return false;
            });
            $(window).smartresize(function () {
                $container.isotope({
                    // update columnWidth to a percentage of container width
                    masonry: {
                        columnWidth: $container.width() / $resize
                    }
                });
            });
        }
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                //I get fired when the animation is ending
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
            }
        });
    },
    slider: function () {
        $('#da-slider').cslider({
            autoplay: true,
            bgincrement: 0
        });
    },
    owlSlider: function () {
        var owl = $("#owl-demo");
        owl.owlCarousel();
        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
    },
    bannerHeight: function () {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox();
        customScripts.slider();
        customScripts.owlSlider();
        customScripts.bannerHeight();
    }
}
// To mail from default mail id of sender.
// $('document').ready(function () {
//     customScripts.init();
//     $('#submit').click(function() {
//         $('#contactfrm').attr('action',
//                        'mailto:abdulrazzakshaikh9@gmail.com?subject=' +
//                        $('#name').val() + '&body=' + $('#comments').val());
//         $('#contactfrm').submit();
//     });
// });
function validateForm() {
    let x = document.forms["contactfrm"]["subject"].value;
    let y = document.forms["contactfrm"]["text"].value;
    let z = document.forms["contactfrm"]["name"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    } else if (y == "") {
        alert("Enter some text in message box.");
        return false;
    }
    else if (z == "") {
        alert("Enter your name.");
        return false;
    }
}

$(document).ready(function () {
    var clickScroll = false; //ADDED
    
        $('.nav-item').click(function () {
        clickScroll = true; //ADDED
            $(".nav-item").removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: $($(this).children().attr('href')).offset().top
            }, 800, function(){
                clickScroll = false; //After the animation is finished set the varriable back to false
            });
            return false;
        });
    
        //Active Link
    
        $(window).scroll(function () {
            var scrollbarLocation = $(this).scrollTop();
            //console.log(scrollbarLocation);
            $('.nav-link').each(function () {
    
                var sectionOffset = $($(this).attr('href')).offset().top;
    
                if (sectionOffset <= scrollbarLocation && !clickScroll) { //ADDED
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            })
        })
    
    });
