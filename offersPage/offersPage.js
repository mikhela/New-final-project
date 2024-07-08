$(".content").click(function (e) {
  e.preventDefault();
  $(".Promocode__modal").show();
  $("footer").hide();
});
$("#close").click(function (e) {
  e.preventDefault();
  $(".Promocode__modal").hide();
});

$("#buttonClick").click(function (e) {
  e.preventDefault();
  $(".myInPut").val("");
  $("#gamochndi").show();
});

var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  navbar.classList.toggle("fixed", window.scrollY > 0);
});
