$("#banner-slider").owlCarousel({
  navigation: !0,
  animateOut: "fadeOut",
  singleItem: !0,
  nav: !0,
  margin: 0,
  items: 1,
  animateIn: "flipInX",
  autoplay: !0,
  autoplayTimeout: 5000,
  dots: !0,
  loop: !1,
  smartSpeed: 1000,
});
function backToTop() {
  var offset = 20;
  var duration = 400;
  if ($(this).scrollTop() > offset) {
    $(".back-to-top").slideDown(duration);
  } else {
    $(".back-to-top").slideUp(duration);
  }
}
function scrollAddClass() {
  if ($(this).scrollTop() > 10) {
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }
}
$(document).ready(function () {
  jQuery("div.inner-box ul.sub-menu li#menu-item-714 a").attr(
    "target",
    "_blank"
  );
  jQuery("div.links ul#menu-footer-expertise li#menu-item-731 a").attr(
    "target",
    "_blank"
  );
  jQuery(".wpforms-page-next").append(
    '<svg class="arrow" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.09846 19.2357C5.45043 19.7384 6.14327 19.8605 6.64594 19.5086L19.0113 10.8502L17.567 19.0408C17.4605 19.6452 17.864 20.2215 18.4684 20.3281C19.0727 20.4346 19.6489 20.0311 19.7556 19.4268L21.6656 8.59436C21.7721 7.99011 21.3686 7.41383 20.7644 7.3072L9.93194 5.39723C9.32761 5.29065 8.75133 5.69417 8.64478 6.29851C8.5382 6.90284 8.94172 7.47912 9.54606 7.58567L17.7367 9.0299L5.37132 17.6882C4.86865 18.0402 4.74649 18.733 5.09846 19.2357Z"></path></svg>'
  );
  jQuery(".wpforms-page-prev").append(
    '<svg class="arrow" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.09846 19.2357C5.45043 19.7384 6.14327 19.8605 6.64594 19.5086L19.0113 10.8502L17.567 19.0408C17.4605 19.6452 17.864 20.2215 18.4684 20.3281C19.0727 20.4346 19.6489 20.0311 19.7556 19.4268L21.6656 8.59436C21.7721 7.99011 21.3686 7.41383 20.7644 7.3072L9.93194 5.39723C9.32761 5.29065 8.75133 5.69417 8.64478 6.29851C8.5382 6.90284 8.94172 7.47912 9.54606 7.58567L17.7367 9.0299L5.37132 17.6882C4.86865 18.0402 4.74649 18.733 5.09846 19.2357Z"></path></svg>'
  );
  jQuery(".project-base-submit-btn").append(
    '<svg class="arrow" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.09846 19.2357C5.45043 19.7384 6.14327 19.8605 6.64594 19.5086L19.0113 10.8502L17.567 19.0408C17.4605 19.6452 17.864 20.2215 18.4684 20.3281C19.0727 20.4346 19.6489 20.0311 19.7556 19.4268L21.6656 8.59436C21.7721 7.99011 21.3686 7.41383 20.7644 7.3072L9.93194 5.39723C9.32761 5.29065 8.75133 5.69417 8.64478 6.29851C8.5382 6.90284 8.94172 7.47912 9.54606 7.58567L17.7367 9.0299L5.37132 17.6882C4.86865 18.0402 4.74649 18.733 5.09846 19.2357Z"></path></svg>'
  );
  jQuery("#wpforms-form-28237 .wpforms-page-prev").addClass(
    " common-btn aos-init aos-animate previous-btn"
  );
  jQuery("#wpforms-form-28237 .wpforms-page-next").addClass(
    "common-btn aos-init aos-animate"
  );
  jQuery("#wpforms-form-28237 .project-base-submit-btn").addClass(
    "common-btn aos-init aos-animate"
  );
  jQuery("#library_pagination .page-numbers li").addClass("page-item");
  scrollAddClass();
  backToTop();
  $("#testimonials-slider").owlCarousel({
    margin: 50,
    items: 1.7,
    autoplay: !0,
    dots: !1,
    nav: !0,
    loop: !0,
    autoplay: 3000,
    smartSpeed: 1000,
    responsive: {
      1920: { items: 1.7 },
      1440: { items: 1.4, margin: 30 },
      1280: { items: 1.3, margin: 20 },
      1024: { items: 1.2, margin: 20 },
      768: { items: 1, margin: 0 },
      640: { items: 1, margin: 0 },
      480: { items: 1, margin: 0 },
      360: { items: 1, margin: 0 },
      320: { items: 1, margin: 0 },
    },
  });
  $("#clients-partners-logo").owlCarousel({
    items: 7.4,
    loop: !0,
    margin: 30,
    nav: !1,
    dots: !1,
    autoplay: !0,
    slideTransition: "linear",
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    responsive: {
      1920: { items: 7.4 },
      1440: { items: 6.4 },
      1366: { items: 6.4 },
      1280: { items: 6.2 },
      1024: { items: 5.1, margin: 20 },
      768: { items: 4.1, margin: 20 },
      640: { items: 3.8, margin: 15 },
      320: { items: 2.8, margin: 10 },
    },
  });
  $("#clients-partners-logo-secound").owlCarousel({
    items: 7.6,
    loop: !0,
    margin: 30,
    nav: !1,
    dots: !1,
    autoplay: !0,
    slideTransition: "linear",
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    responsive: {
      1920: { items: 7.4 },
      1440: { items: 6.4 },
      1366: { items: 6.4 },
      1280: { items: 6.2 },
      1024: { items: 5.1, margin: 20 },
      768: { items: 4.1, margin: 20 },
      640: { items: 3.8, margin: 15 },
      320: { items: 2.8, margin: 10 },
    },
  });
  $("#staffQuotesSlider").owlCarousel({
    loop: !0,
    margin: 30,
    nav: !1,
    dots: !1,
    autoplay: !0,
    slideTransition: "linear",
    autoplaySpeed: 8000,
    mouseover: !0,
    autoplayHoverPause: !0,
    responsive: {
      1920: { items: 2.5 },
      1440: { items: 2.4 },
      1366: { items: 2.3 },
      1280: { items: 2.3 },
      1024: { items: 2.2, margin: 20 },
      768: { items: 2.1, margin: 20 },
      640: { items: 1.2, margin: 15 },
      320: { items: 1, margin: 10 },
    },
  });
  $("#latestevents").owlCarousel({
    navigation: !0,
    slideSpeed: 10000,
    smartSpeed: 3000,
    margin: 0,
    items: 1,
    nav: !0,
    dots: !1,
    loop: !0,
    autoHeight: !0,
    autoplayHoverPause: !0,
  });
  $("#theConversation").owlCarousel({
    navigation: !0,
    slideSpeed: 10000,
    smartSpeed: 3000,
    margin: 0,
    items: 1,
    autoplay: 2000,
    nav: !0,
    dots: !1,
    loop: !0,
    autoHeight: !0,
    autoplayHoverPause: !0,
  });
  function scrollAddClass() {
    if ($(this).scrollTop() > 10) {
      $("header").addClass("shrink");
    } else {
      $("header").removeClass("shrink");
    }
  }
  $("body").on("click", ".back-to-top", function (event) {
    var duration = 400;
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, duration);
    return !1;
  });
  $(".menu-btn").on("click", function () {
    $("body").toggleClass("menu-open");
  });
  $(".close-btn").on("click", function () {
    $("body").removeClass("menu-open");
  });
  $(".nav-wraaper-box .inner-box li").on("click", function () {
    $("body").removeClass("menu-open");
  });
  $(document).on("click", ".plus", function () {
    var addMinus = !0;
    if ($(this).hasClass("minus")) {
      addMinus = !1;
    }
    $(".plus").removeClass("minus");
    if (addMinus) {
      $(this).addClass("minus");
    }
    $(".all-data").removeClass("open");
    if (addMinus) {
      $("." + $(this).attr("ID")).addClass("open");
    }
  });
  $(document).on("click", ".boxes .plus-minus", function () {
    var ShowMinus = !0;
    if ($(this).hasClass("show")) {
      ShowMinus = !1;
    }
    $(".plus-minus").removeClass("show");
    if (ShowMinus) {
      $(this).addClass("show");
    }
    $(".boxes").removeClass("open");
    if (ShowMinus) {
      $("." + $(this).attr("ID")).addClass("open");
    }
  });
  $("nav ul.left-box li.inner-li a").click(function (e) {
    $("nav ul li").removeClass("active");
    $(this).parent("li.inner-li").addClass("active");
  });
  $(".inner-li").on("click", function () {
    $(this).toggleClass("show");
  });
  $(".content").mCustomScrollbar({
    theme: "dark",
    scrollButtons: { scrollType: "stepped" },
    live: "on",
  });
  $(".content").mCustomScrollbar({
    theme: "dark",
    scrollButtons: { scrollType: "stepped" },
    live: "on",
  });
  $(".num").counterUp({ delay: 50, time: 4000 });
  $(".f-title").on("click", function (e) {
    if ($(this).hasClass("menushow")) {
      remove_styles();
      $(this).removeClass("menushow");
      $(this).next("ul").removeClass("menushowtoggle");
      if ($(this).next("ul").next("ul").length) {
        $(this).next("ul").next("ul").removeClass("menushowtoggle");
      }
    } else {
      remove_styles();
      $(this).addClass("menushow");
      $(this).next("ul").addClass("menushowtoggle");
      if ($(this).next("ul").next("ul").length) {
        $(this).next("ul").next("ul").addClass("menushowtoggle");
      }
    }
  });
  function remove_styles() {
    $(".f-title").each(function () {
      $(this).removeClass("menushow");
      $(this).next("ul").removeClass("menushowtoggle");
      if ($(this).next("ul").next("ul").length) {
        $(this).next("ul").next("ul").removeClass("menushowtoggle");
      }
    });
  }
  $(".wpforms-field-required").addClass("form-control");
  $("#wpforms-28237-field_19").addClass("form-control");
  $(".wpforms-page-indicator").addClass("nav");
  $(".wpforms-page-indicator").addClass("nav-tabs");
  $(".wpforms-page-indicator").addClass("process-model");
  $(".wpforms-page-indicator").addClass("more-icon-preocess");
  $(".wpforms-page-1").addClass("tab-pane");
  $(".wpforms-page-2").addClass("tab-pane");
  $(".wpforms-page-3").addClass("tab-pane");
  $("ul.wpforms-field-required").removeClass("form-control");
  $(".page-id-7 .banner-section #banner-slider .custom-container")
    .eq(0)
    .attr("id", "video-slider");
  $(
    ".page-id-28190 #wpcf7-f34852-o1 form .subscribe-details-section .list .box .checkbox-box input"
  ).attr("aria-labelledby", "LbloptDataInsights InstructoptDataInsights");
  $(".subscribe").append(
    '<svg class="arrow" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.09846 19.2357C5.45043 19.7384 6.14327 19.8605 6.64594 19.5086L19.0113 10.8502L17.567 19.0408C17.4605 19.6452 17.864 20.2215 18.4684 20.3281C19.0727 20.4346 19.6489 20.0311 19.7556 19.4268L21.6656 8.59436C21.7721 7.99011 21.3686 7.41383 20.7644 7.3072L9.93194 5.39723C9.32761 5.29065 8.75133 5.69417 8.64478 6.29851C8.5382 6.90284 8.94172 7.47912 9.54606 7.58567L17.7367 9.0299L5.37132 17.6882C4.86865 18.0402 4.74649 18.733 5.09846 19.2357Z"></path></svg>'
  );
  $("#wpcf7-f34852-o1 .wpcf7-response-output").css("display", "none");
  $("#wpcf7-f34852-o1 .custom-container")
    .eq(2)
    .append(
      '<div class="wpcf7-response-output" aria-hidden="true">One or more fields have an error. Please check and try again.</div>'
    );
});
$(window).scroll(function () {
  scrollAddClass();
  backToTop();
});
$(function () {
  $(".flag-option").on("click", function (e) {
    $(".flag-select").toggleClass("show");
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".flag-select") === !1) {
      $(".flag-select").removeClass("show");
    }
  });
});
jQuery(".page-numbers li").addClass("page-item");
jQuery(".pagination .page-numbers li").addClass("page-item");
$(".simplefavorites-clear").click(function () {
  setTimeout(myTimeFunction, 700);
});
function myTimeFunction() {
  document.location.reload(!0);
}
jQuery("#apply-filter").on("click", function (e) {
  jQuery(".filter-open-area").hide();
  jQuery(".search-type a").removeClass("minus");
});
jQuery(".filter-plus-icon").on("click", function (e) {
  jQuery(".filter-open-area").show();
});
jQuery(".btn-filter-reset").on("click", function (e) {
  jQuery(".filter-open-area").hide();
  jQuery(".search-type a").removeClass("minus");
});
$(".list").find("label").attr("id", "labelsubscribe");
$('.checkbox-box input[type="checkbox"]').change(function () {
  if ($(this).is(":checked")) {
    $(this).parents("#labelsubscribe").addClass("label-selected");
  } else {
    $(this).parents("#labelsubscribe").removeClass("label-selected");
  }
});
jQuery(document).ready(function () {
  jQuery("#job_search").keyup(function () {
    var re = new RegExp($(this).val(), "i");
    jQuery(".all-job").each(function () {
      var text = $(this).text(),
        matches = !!text.match(re);
      jQuery(this).toggle(matches);
    });
  });
  jQuery("#Locations").on("change", function () {
    var re = new RegExp($(this).val(), "i");
    jQuery(".all-job").each(function () {
      var text = $(this).text(),
        matches = !!text.match(re);
      jQuery(this).toggle(matches);
    });
  });
  jQuery("#Contracts").on("change", function () {
    var re = new RegExp($(this).val(), "i");
    jQuery(".all-job").each(function () {
      var text = $(this).attr("id"),
        matches = !!text.match(re);
      jQuery(this).toggle(matches);
    });
  });
});
jQuery(document).ready(function () {
  if (jQuery(".common-tabs-box").length > 0) {
    jQuery(".common-tabs-box").easyResponsiveTabs({
      type: "default",
      width: "auto",
      fit: !0,
      tabidentify: "hor_1",
    });
  }
  jQuery(".meet-team-section .team-box").slice(0, 2).appendTo(".first-box");
});
jQuery("#search-bar-header").on("click", function () {
  jQuery(".search-area").toggleClass("show");
});
jQuery(document).ready(function () {
  jQuery(".ppjs__img-btn").height(100);
  jQuery(".ppjs__img-btn").width(100);
  jQuery(".ppjs__img-wrapper").css({ width: "100px", margin: "0 20px 0 0" });
  jQuery(".ppjs__head-container").css({
    display: "flex",
    "flex-direction": "row",
    "flex-basis": "100%",
    "align-items": "center",
    "justify-content": "flex-start",
  });
});
jQuery(document).ready(function ($) {
  var page = 1;
  var totalPosts = $("#load-more-projects").data("total");
  $("#load-more-projects").on("click", function () {
    var button = $(this);
    var post_id = ajax_params.post_id;
    $.ajax({
      url: ajax_params.ajax_url,
      type: "POST",
      data: {
        action: "load_more_signature_projects",
        post_id: post_id,
        page: page,
      },
      beforeSend: function () {
        button.text("Loading...");
      },
      success: function (response) {
        if (response.success) {
          $("#signature-projects-list").append(response.data.html);
          page++;
          if (response.data.has_more) {
            button.text("View More");
          } else {
            jQuery(".load-more-container").remove();
          }
        } else {
          button.text("No More Projects");
        }
      },
    });
  });
});
jQuery(document).ready(function ($) {
  var page = 1;
  var totalPosts = $("#load-more-publications").data("total");
  $("#load-more-publications").on("click", function () {
    var button = $(this);
    var post_id = button.data("postid");
    $.ajax({
      url: ajax_params.ajax_url,
      type: "POST",
      data: {
        action: "load_more_key_publications",
        page: page,
        post_id: post_id,
      },
      beforeSend: function () {
        button.text("Loading...");
      },
      success: function (response) {
        if (response.success) {
          $("#publication-list").append(response.data.html);
          page++;
          if (response.data.has_more) {
            button.text("View More");
          } else {
            jQuery("#remove-container").remove();
          }
        } else {
          button.text("No More Projects");
        }
      },
    });
  });
});
$(document).on("click", ".toggle-arrow ", function () {
  isOpen = 0;
  if ($(this).parents(".h-link").find(".h-title").hasClass("menushow")) {
    isOpen = 1;
  }
  $(this)
    .parents(".inner-li")
    .find(".h-link")
    .each(function () {
      $(this).find(".h-title").removeClass("menushow");
      $(this).find(".header-col-data").removeClass("menushowtoggle");
    });
  $(this).parents(".inner-li").addClass("show");
  if (isOpen == 0) {
    $(this).parents(".h-link").find(".h-title").addClass("menushow");
    $(this)
      .parents(".h-link")
      .find(".header-col-data")
      .addClass("menushowtoggle");
  }
});
$("#panelists-slider").owlCarousel({
  margin: 30,
  nav: !1,
  dots: !0,
  mouseover: !0,
  autoplayHoverPause: !1,
  responsive: {
    1920: { items: 4 },
    1440: { items: 4 },
    1366: { items: 4 },
    1280: { items: 3 },
    1024: { items: 3, margin: 20 },
    768: { items: 3, margin: 20 },
    640: { items: 2, margin: 15 },
    360: { items: 1, margin: 15 },
    320: { items: 1, margin: 10 },
  },
});
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("wpcf7submit", function (event) {
    const form = event.target;
    const btn = form.querySelector('[type="submit"]');
    if (
      event.detail.status === "mail_sent" ||
      event.detail.status === "mail_failed"
    ) {
      if (btn) {
        btn.disabled = !0;
        btn.style.opacity = "0.6";
        btn.style.cursor = "not-allowed";
      }
    } else {
      if (btn) {
        btn.disabled = !1;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) {
      const headerHeight = document.querySelector("header").offsetHeight;
      setTimeout(() => {
        window.scrollTo({
          top: el.offsetTop - headerHeight,
          behavior: "smooth",
        });
      }, 200);
    }
  }
});
jQuery(function ($) {
  function updateFirstBannerClass() {
    var isFirstBannerActive = $("#banner-slider .owl-item.active .item")
      .first()
      .hasClass("slider-1");
    $("body").toggleClass("first-banner-visible", isFirstBannerActive);
  }
  $("#banner-slider").on(
    "initialized.owl.carousel translated.owl.carousel changed.owl.carousel refreshed.owl.carousel",
    function () {
      setTimeout(updateFirstBannerClass, 50);
    }
  );
  setTimeout(updateFirstBannerClass, 300);
});
