/**
 * Parallax
 * Content box
 * Counter
 * Sidebar Toggle
 * Lightbox
 * Preloader
 * Show Pass
 * Button Quantity
 * Input file
 * Delete image
 * Handle Search Form
 * Datepicker
 * One Page
 * Handle dashboard
 * Go Top
 * Cursor
 */

// import PhotoSwipeLightbox from ('photoswipe-lightbox.esm.min.js');
// import PhotoSwipeLightbox from 'photoswipe-lightbox.esm.min.js';
// import {PhotoSwipe} from ('photoswipe.esm.min.js');
// import PhotoSwipe from 'photoswipe.esm.min.js';

(function ($) {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  /* selectImages
  -------------------------------------------------------------------------------------*/
  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");
      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            "<img src='%i'/> %s"
              .replace(/%i/, imgURL)
              .replace(/%s/, selectOption.text())
          );
        }
      });
      selectIMG.selectpicker();
    }
  };

  /* Parallax
  -------------------------------------------------------------------------------------*/
  var parallax = function () {
    if ($().parallax && isMobile.any() == null) {
      $(".parallax").parallax("50%", 0.2);
    }
  };
  /* Content box
  -------------------------------------------------------------------------------------*/
  var flatContentBox = function () {
    $(window).on("load resize", function () {
      var mode = "desktop";
      if (matchMedia("only screen and (max-width: 1199px)").matches)
        mode = "mobile";
      $(".themesflat-content-box").each(function () {
        var margin = $(this).data("margin");
        if (margin) {
          if (mode === "desktop") {
            $(this).attr("style", "margin:" + $(this).data("margin"));
          } else if (mode === "mobile") {
            $(this).attr("style", "margin:" + $(this).data("mobilemargin"));
          }
        }
      });
    });
  };
  /* Counter
  -------------------------------------------------------------------------------------*/
  var flatCounter = function () {
    if ($(document.body).hasClass("counter-scroll")) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(".tf-counter").offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
          if ($().countTo) {
            $(".tf-counter")
              .find(".number")
              .each(function () {
                var to = $(this).data("to"),
                  speed = $(this).data("speed"),
                  dec = $(this).data("dec");
                $(this).countTo({
                  to: to,
                  speed: speed,
                  decimals: dec,
                });
              });
          }
          a = 1;
        }
      });
    }
  };

  // new WOW().init();

  /* Sidebar Toggle 
  -------------------------------------------------------------------------------------*/
  var sidebarToggle = function () {
    var args = { duration: 500 };

    $(".btn-show-advanced").click(function () {
      $(this).parent(".inner-filter").find(".wd-amenities").slideDown(args);
      $(".inner-filter").addClass("active");
    });
    $(".btn-hide-advanced").click(function () {
      $(this).parent(".inner-filter").find(".wd-amenities").slideUp(args);
      $(".inner-filter").removeClass("active");
    });

    $(".btn-show-advanced-mb").click(function () {
      $(this)
        .parent(".inner-filter")
        .find(".wd-show-filter-mb")
        .slideToggle(args);
    });
  };
  /* Lightbox
  -------------------------------------------------------------------------------------*/
  var popUpLightBox = function () {
    if ($(".lightbox-image").length) {
      $(".lightbox-image").fancybox({
        openEffect: "fade",
        closeEffect: "fade",
        helpers: {
          media: {},
        },
      });
    }
  };
  /* Preloader
  -------------------------------------------------------------------------------------*/
  var preloader = function () {
    setTimeout(function () {
      $(".preload").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 200);
  };

  /* Scroll process
  -------------------------------------------------------------------------------------*/
  var scrollProgress = function () {
    $(".scroll-snap").on("scroll", function () {
      var val = $(this).scrollLeft();
      $(".value-process").css("width", `max(30%,${val}%)`);
    });
  };

  /* tab animation
  -------------------------------------------------------------------------------------*/
  var flatAnimateTab = function () {
    if ($(".flat-animate-tab").length > 0) {
      $(".flat-animate-tab")
        .find(".tab-pane")
        .css({ transform: "translateY(19px)", opacity: "0" });
      $(".flat-animate-tab")
        .find(".tab-pane.active")
        .css({ transform: "translateY(0px)", opacity: "1" });
      $(".nav-tab-item").on("click", function () {
        $(".flat-animate-tab").find(".tab-pane").css({
          transform: "translateY(19px)",
          opacity: "0",
        });

        $(".flat-animate-tab").find(".tab-pane.active").css({
          transform: "translateY(0px)",
          opacity: "1",
        });
      });
    }
  };

  /* Show Pass
  -------------------------------------------------------------------------------------*/
  var showPass = function () {
    $(".show-pass").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field").attr("type") == "password") {
        $(".password-field").attr("type", "text");
      } else if ($(".password-field").attr("type") == "text") {
        $(".password-field").attr("type", "password");
      }
    });

    $(".show-pass2").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field2").attr("type") == "password") {
        $(".password-field2").attr("type", "text");
      } else if ($(".password-field2").attr("type") == "text") {
        $(".password-field2").attr("type", "password");
      }
    });
    $(".show-pass3").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field3").attr("type") == "password") {
        $(".password-field3").attr("type", "text");
      } else if ($(".password-field3").attr("type") == "text") {
        $(".password-field3").attr("type", "password");
      }
    });
  };
  /* Button Quantity
  -------------------------------------------------------------------------------------*/
  var btnQuantity = function () {
    $(".minus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 0) {
        value = value - 1;
      }

      $input.val(value);
    });

    $(".plus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > -1) {
        value = value + 1;
      }

      $input.val(value);
    });
  };

  /* Input file 
  -------------------------------------------------------------------------------------*/
  var flcustominput = function () {
    $("input[type=file]").change(function (e) {
      $(this)
        .parents(".uploadfile")
        .find(".file-name")
        .text(e.target.files[0].name);
    });
  };

  /* Delete image 
  -------------------------------------------------------------------------------------*/
  var delete_img = function (e) {
    $(".remove-file").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.closest(".file-delete").remove();
    });
  };
  /* Handle Search Form   
  -------------------------------------------------------------------------------------*/
  var clickSearchForm = function () {
    const widgetSearchForm = $(".wd-search-form");
    if (widgetSearchForm.length) {
      $(".pull-right").on("click", function () {
        widgetSearchForm.toggleClass("show");
      });
      $(document).on(
        "click.pull-right, click.offcanvas-backdrop",
        function (a) {
          if (
            $(a.target).closest(".pull-right, .wd-search-form").length === 0
          ) {
            widgetSearchForm.removeClass("show");
          }
        }
      );
    }
  };
  /* Datepicker  
  -------------------------------------------------------------------------------------*/
  var datePicker = function () {
    if ($("#datepicker1").length > 0) {
      $("#datepicker1").datepicker({
        firstDay: 1,
        dateFormat: "dd/mm/yy",
      });
    }
    if ($("#datepicker2").length > 0) {
      $("#datepicker2").datepicker({
        firstDay: 1,
        dateFormat: "dd/mm/yy",
      });
    }
    if ($("#datepicker3").length > 0) {
      $("#datepicker3").datepicker({
        firstDay: 1,
        dateFormat: "dd/mm/yy",
      });
    }
    if ($("#datepicker4").length > 0) {
      $("#datepicker4").datepicker({
        firstDay: 1,
        dateFormat: "dd/mm/yy",
      });
    }
  };

  /* One Page 
  -------------------------------------------------------------------------------------*/
  var onepageSingle = function () {
    if ($(".cate-single-tab").length) {
      var top_offset = $(".main-header").height() - 10;
      $(".cate-single-tab").onePageNav({
        currentClass: "active",
        scrollOffset: top_offset,
      });
    }
  };

  /* Handle dashboard
  -------------------------------------------------------------------------------------*/
  var showHideDashboard = function () {
    $(".button-show-hide").on("click", function () {
      $(".layout-wrap").toggleClass("full-width");
    });
    $(".mobile-nav-toggler,.overlay-dashboard").on("click", function () {
      $(".layout-wrap").removeClass("full-width");
    });
  };

  /* Go Top
  -------------------------------------------------------------------------------------*/
  var goTop = function () {
    if ($("div").hasClass("progress-wrap")) {
      var progressPath = document.querySelector(".progress-wrap path");
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
      var updateprogress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateprogress();
      $(window).scroll(updateprogress);
      var offset = 200;
      var duration = 550;
      jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
          jQuery(".progress-wrap").addClass("active-progress");
        } else {
          jQuery(".progress-wrap").removeClass("active-progress");
        }
      });
      jQuery(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, duration);
        return false;
      });
    }
  };

  /* color swatch product
  -------------------------------------------------------------------------*/
  var swatchColor = function () {
    if ($(".card-product").length > 0) {
      $(".color-swatch").on("click, mouseover", function () {
        var swatchColor = $(this).find("img").attr("src");
        var imgProduct = $(this).closest(".card-product").find(".img-product");
        imgProduct.attr("src", swatchColor);
        $(this)
          .closest(".card-product")
          .find(".color-swatch.active")
          .removeClass("active");

        $(this).addClass("active");
      });
    }
  };

  /* change value
  ------------------------------------------------------------------------------------- */
  var changeValue = function () {
    if ($(".tf-dropdown-sort").length > 0) {
      $(".select-item").click(function (event) {
        $(this).closest(".tf-dropdown-sort").find(".text-sort-value").text($(this).find(".text-value-item").text());
       
        $(this)
          .closest(".dropdown-menu")
          .find(".select-item.active")
          .removeClass("active");

        $(this).addClass("active");
      });
    }
  };

  /* footer
  -------------------------------------------------------------------------*/
  var footer = function () {
    var args = { duration: 250 };
    $(".footer-heading-moblie").on("click", function () {
      $(this).parent(".footer-col-block").toggleClass("open");
      if (!$(this).parent(".footer-col-block").is(".open")) {
        $(this).next().slideUp(args);
      } else {
        $(this).next().slideDown(args);
      }
    });
  };

  /* close announcement bar
  -------------------------------------------------------------------------*/
  var closeAnnouncement = function () {
    $(".close-announcement-bar").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $height = $(".announcement-bar").height() + "px";
      $this.closest(".announcement-bar").css("margin-top", `-${$height}`);

      $(".announcement-bar").fadeOut("slow", function () {
        $this.closest(".announcement-bar").remove();
      });
    });
  };

  /* sidebar_mb
  -------------------------------------------------------------------------*/
  var sidebar_mb = function () {
    if ($(".wrap-sidebar-mobile").length > 0) {
      var sidebar = $(".wrap-sidebar-mobile").html();
      $(".sidebar-mobile-append").append(sidebar);
      // $(".wrap-sidebar-mobile").remove();
    }
  };

  /* lookbook
  -------------------------------------------------------------------------*/
  var lookbook = function () {
    if ($(".lookbook-item").length) {
      $(".tf-pin-btn").on("click", function (e) {
        // $(this).closest(".wrap-lookbook").find(".lookbook-item").removeClass("active");
        $(this).closest(".lookbook-item").toggleClass("active");
      });
    }
  };

  /* tabs
  -------------------------------------------------------------------------*/
  var tabs = function () {
    $(".widget-tabs").each(function () {
      $(this)
        .find(".widget-menu-tab")
        .children(".item-title")
        .on("click", function () {
          var liActive = $(this).index();
          var contentActive = $(this)
            .siblings()
            .removeClass("active")
            .parents(".widget-tabs")
            .find(".widget-content-tab")
            .children()
            .eq(liActive);
          contentActive.addClass("active").fadeIn("slow");
          contentActive.siblings().removeClass("active");
          $(this)
            .addClass("active")
            .parents(".widget-tabs")
            .find(".widget-content-tab")
            .children()
            .eq(liActive)
        });
    });
  };

  /* flatAccordion
  -------------------------------------------------------------------------*/
  var flatAccordion = function (class1, class2) {
    var args = { duration: 200 };

    $(class2 + " .toggle-title.active")
      .siblings(".toggle-content")
      .show();
    $(class1 + " .toggle-title").on("click", function () {
      $(class1 + " " + class2).removeClass("active");
      $(this).closest(class2).toggleClass("active");

      if (!$(this).is(".active")) {
        // $(this)
        //   .closest(class1)
        //   .find(".toggle-title.active")
        //   .toggleClass("active")
        //   .next()
        //   .slideToggle(args);
        $(this).toggleClass("active");
        $(this).next().slideToggle(args);
      } else {
        $(class1 + " " + class2).removeClass("active");
        $(this).toggleClass("active");
        $(this).next().slideToggle(args);
      }
    });
  };

  /* btn_wishlist
  -------------------------------------------------------------------------*/
  var btn_wishlist = function () {
    if ($(".btn-icon-action").length) {
      $(".btn-icon-action").on("click", function (e) {
        $(this).toggleClass("active");
      });
    }
  };

  /* btn_loading
  -------------------------------------------------------------------------*/
  var btn_loading = function () {
    if ($(".tf-btn-loading").length) {
      $(".tf-btn-loading").on("click", function (e) {
        $(this).addClass("loading");
        var $this = $(this);
        setTimeout(function () {
          $this.removeClass("loading");
        }, 600);
      });
    }
  };

  /* variant_picker
  -------------------------------------------------------------------------*/
  var variant_picker = function () {
    if ($(".variant-picker-item").length) {
      $(".variant-picker-item label").on("click", function (e) {
        $(this)
          .closest(".variant-picker-item")
          .find(".variant-picker-label-value")
          .text($(this).data("value"));
      });
    }
  };

  /* switch layout
  -------------------------------------------------------------------------*/
  var switchLayout = function () {
    if ($(".tf-control-layout").length > 0) {
      $(".tf-view-layout-switch").on("click", function () {
        var value = $(this).data("value-grid");
        $(".grid-layout").attr("data-grid", value);
        // $(".grid-layout").find(".card-product").addClass("active");
        // setTimeout(() => {
        //   $(".grid-layout").find(".card-product").removeClass("active");
        // }, 2000);
        $(this)
          .closest(".tf-control-layout")
          .find(".tf-view-layout-switch.active")
          .removeClass("active");

        $(this).addClass("active");
      });
      if (matchMedia("only screen and (max-width: 1150px)").matches) {
        $(".tf-view-layout-switch.active").removeClass("active");
        $(".sw-layout-3").addClass("active");
      }
      if (matchMedia("only screen and (max-width: 768px)").matches) {
        $(".tf-view-layout-switch.active").removeClass("active");
        $(".sw-layout-2").addClass("active");
      }
    }
  };
  // new WOW().init();

  /* item_checkox
  -------------------------------------------------------------------------*/
  var item_checkox = function () {
    if ($(".item-has-checkox").length) {
      $(".item-has-checkox input:checkbox").on("click", function (e) {
        // $(this).closest(".wrap-lookbook").find(".lookbook-item").removeClass("active");
        $(this).closest(".item-has-checkox").toggleClass("check");
      });
    }
  };

  var infiniteScroll = function () {
    $(".fl-item").slice(0, 8).show();
    $(".fl-item2").slice(0, 8).show();
    $(".fl-item3").slice(0, 8).show();

    if ($(".scroll-loadmore").length > 0) {
      $(window).scroll(function () {
        if (
          $(window).scrollTop() >=
          $(document).height() - $(window).height()
        ) {
          setTimeout(() => {
            $(".fl-item:hidden").slice(0, 4).show();
            if ($(".fl-item:hidden").length == 0) {
              $(".view-more-button").hide();
            }
          }, 0);
        }
      });
    }
    if ($(".loadmore-item").length > 0) {
      $(".btn-loadmore").on("click", function () {
        setTimeout(() => {
          $(".fl-item:hidden").slice(0, 4).show();
          if ($(".fl-item:hidden").length == 0) {
            $(".view-more-button").hide();
          }
        }, 600);
      });
    }
    if ($(".loadmore-item2").length > 0) {
      $(".btn-loadmore2").on("click", function () {
        setTimeout(() => {
          $(".fl-item2:hidden").slice(0, 4).show();
          if ($(".fl-item2:hidden").length == 0) {
            $(".view-more-button2").hide();
          }
        }, 600);
      });
    }
    if ($(".loadmore-item3").length > 0) {
      $(".btn-loadmore3").on("click", function () {
        setTimeout(() => {
          $(".fl-item3:hidden").slice(0, 4).show();
          if ($(".fl-item3:hidden").length == 0) {
            $(".view-more-button3").hide();
          }
        }, 600);
      });
    }
  };
  /* stagger_wrap
  -------------------------------------------------------------------------*/
  var stagger_wrap = function () {
    if ($(".stagger-wrap").length) {
      var count = $(".stagger-item").length;
      // $(".stagger-item").addClass("stagger-finished");
      for (var i = 1, time = 0.2; i <= count; i++) {
        $(".stagger-item:nth-child(" + i + ")")
          .css("transition-delay", time * i + "s")
          .addClass("stagger-finished");
      }
    }
  };

  /* clickModalSecond
  -------------------------------------------------------------------------*/
  var clickModalSecond = function () {
    $(".btn-choose-size").click(function () {
      $("#find_size").modal("show");
    });
    $(".btn-show-quickview").click(function () {
      $("#quick_view").modal("show");
    });

    $(".btn-add-note").click(function () {
      $(".add-note").addClass("open");
    });
    $(".btn-add-gift").click(function () {
      $(".add-gift").addClass("open");
    });
    $(".btn-estimate-shipping").click(function () {
      $(".estimate-shipping").addClass("open");
    });
    $(".tf-mini-cart-tool-close ,.tf-mini-cart-tool-close .overplay").click(
      function () {
        $(".tf-mini-cart-tool-openable").removeClass("open");
      }
    );
  };

  // Dom Ready
  $(function () {
    selectImages();
    flatContentBox();
    popUpLightBox();
    parallax();
    flatCounter();
    flcustominput();
    btnQuantity();
    delete_img();
    clickSearchForm();
    sidebarToggle();
    onepageSingle();
    showHideDashboard();
    goTop();
    showPass();
    datePicker();
    closeAnnouncement();
    preloader();
    // cursor();
    sidebar_mb();
    lookbook();
    tabs();
    flatAccordion(".flat-accordion", ".flat-toggle");
    flatAccordion(".flat-accordion1", ".flat-toggle1");
    flatAccordion(".flat-accordion2", ".flat-toggle2");
    swatchColor();
    changeValue();
    footer();
    btn_wishlist();
    btn_loading();
    variant_picker();
    switchLayout();
    item_checkox();
    infiniteScroll();
    stagger_wrap();
    clickModalSecond();
    scrollProgress();
    // flatAnimateTab();
  });
})(jQuery);
