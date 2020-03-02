// SUMO SELECT

$(function () {
    $('select').SumoSelect();
});

$('#search_test').SumoSelect({search: true, searchText: 'Enter here.'});

// ADVANCED SLIDE DOWN
$(function () {
    $(".advanced-slide").on("click",function () {
        $(".advanced-div").slideToggle();

        $(this).text($(this).text() === 'cancel' ? 'advanced' : 'cancel');
    });
});

// ADVANCED SEARCH
$(function () {
    $(".advanced-search").on("click",function () {
        $('#advanced-search').toggle(300);
        $('body').toggleClass('no-scroll');
    });

    $('.advanced-close').on("click",function () {
        $('#advanced-search').fadeOut(300);
        $('body').removeClass('no-scroll');
    });
});

// NEWSLETTER MODAL ON LOAD

$(window).on('load', function () {
    setTimeout(function () {
        $('#newsletter-modal').modal('show');
    }, 3000);
});


// COOKIE POLICY ON LOAD
$(function () {
    $('#cookie-policy').fadeIn(300);
});

$('.close-cookie-bottom, .close-cookie').on("click",function () {
    $('#cookie-policy').fadeOut(300);
});

// HAMBURGER MENU

// noinspection ES6ConvertVarToLetConst
var $hamburger = $(".hamburger");
// noinspection JSUnusedLocalSymbols
$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
});

$('#login-modal-post-add').on('hide.bs.modal', function () {
    $('.hamburger').removeClass('is-active');
});

$('#logged-in-menu').on('hide.bs.modal', function () {
    $('.hamburger').removeClass('is-active');
});

// SINGLE PAGE PROMOTE IT TOGGLE AND QUICK EMAIL

$(function () {
    $('#add-content .promote-it').on("click", function () {
        $(".promote-it-toggle").toggle(300);
    });

    // QUICK EMAIL

    // noinspection ES6ConvertVarToLetConst
    var windowSize = $(window).width();

    $('.quick-email-toggle-button').on("click", function () {
        $(".quick-email-toggle").toggle(300);

        if (windowSize < 576) {
            $('body').addClass('no-scroll');
        }
    });

    $('.cancel').on("click", function () {
        $(".quick-email-toggle").toggle(300);

        if (windowSize < 576) {
            $('body').removeClass('no-scroll');
        }
    });
});

// SEARCH RESULTS TOGGLE FILTER


$(function () {
    $('.filter-toggler, .advanced-close-search-results').on("click", function () {
        $("#result-filter-toggled").toggle(300);
        $(".reset-filter").fadeToggle(300);

        // noinspection ES6ConvertVarToLetConst
        var filterToggler = $(".filter-toggler");

        $(filterToggler).text($(filterToggler).text() === 'apply filter' ? 'filter' : 'apply filter');


    });

    // SEARCH RESULTS COLUMN PICKER
    // noinspection ES6ConvertVarToLetConst
    var addColumn = $(".addcolumn");

     $('.column').on("click",function () {
            if ($(addColumn).hasClass('col-12')) {
                $(addColumn).addClass('col-6');
                $(addColumn).removeClass('col-12');
                $(".column").html('<img src="img/one-column.svg" class="img-fluid column-selector">');
            } else {
                $(addColumn).removeClass('col-6');
                $(addColumn).addClass('col-12');
                $(".column").html('<img src="img/two-column.svg" class="img-fluid column-selector">');
            }
        });

        if ($(addColumn).hasClass('col-12')) {
            $(".column").html('<img src="img/two-column.svg" class="img-fluid column-selector">');
        } else {
            $(".column").html('<img src="img/one-column.svg" class="img-fluid column-selector">');
        }
});

// MY ADVERTS PROMOTE IT TOGGLE

$(function () {
    $('#my-adverts .promote-it-1').on("click", function () {
        $(".promote-it-toggle-adverts-1").toggle(300);
    });

    $('#my-adverts .promote-it-2').on("click", function () {
        $(".promote-it-toggle-adverts-2").toggle(300);
    });

    $('#my-adverts .promote-it-3').on("click", function () {
        $(".promote-it-toggle-adverts-3").toggle(300);
    });

    $('#my-adverts .promote-it-4').on("click", function () {
        $(".promote-it-toggle-adverts-4").toggle(300);
    });
});

// SETTINGS PAGE

$(function () {
    $('#settings .promote-it-settings').on("click", function () {
        $(".paying-method").toggle(300);
    });
});

    // PULSATING RADIO BUTTON

$(function () {
    $('.test').on('change', function () {
        if ($('#removeSecond').is(":checked")) {
            $(".remove-pulse").addClass('pulse');
            $(".remove-pulse1").addClass('bg-pulse');
        } else if ($('#removeFirst').is(":checked")) {
            $(".remove-pulse").removeClass('pulse');
            $(".remove-pulse1").removeClass('bg-pulse');
        }
    });
});

// DATE PICKER

$(function () {
    // noinspection JSUnresolvedFunction
    $("#datepicker").datepicker();
});

// BLOG PAGE

// CK Editor

$(function () {
    // noinspection JSUnresolvedFunction
    $("#datepicker2").datepicker();
});

$(function () {
    // noinspection JSUnresolvedFunction
    $("#datepicker3").datepicker();
});

$(function () {
    // noinspection JSUnresolvedFunction
    $("#datepicker4").datepicker();
});

// noinspection JSUnresolvedVariable
CKEDITOR.replace( 'editor1' );

$('#blog .checkbox-container').on('click',function () {
    if ($('.tak-checked').is(':checked')) {
        $(".tak-toggled").css("display", "block");
    } else {
        $(".tak-toggled").css("display", "none");
    }
});















