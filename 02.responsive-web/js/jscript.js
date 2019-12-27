// 접을 때 펼 때
$(".btn").click(function(e) {
  e.preventDefault();
  $(".nav").slideToggle();
  $(".btn").toggleClass("open");

  if ($(".btn").hasClass("open")) {
    // open이 있을 때
    $(".btn")
      .find("i")
      .attr("class", "fa fa-angle-up");
  } else {
    // open이 없을 때
    $(".btn")
      .find("i")
      .attr("class", "fa fa-angle-down");
  }
});

$(window).resize(function() {
  var wWidth = $(window).width();
  if (wWidth > 600) {
    $(".nav").removeAttr("style");
  }
});
