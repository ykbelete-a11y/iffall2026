// Carrying Home: small jQuery enhancements. The site still works without JavaScript.

$(function () {

  // 1. Mobile menu: show/hide the nav
  var $toggle = $(".nav-toggle");
  var $nav = $("#site-nav");

  $toggle.on("click", function () {
    var isOpen = $nav.hasClass("is-open");
    $nav.toggleClass("is-open", !isOpen);
    $toggle.attr("aria-expanded", String(!isOpen));
    $toggle.text(isOpen ? "Menu" : "Close");
  });

  $(document).on("keydown", function (event) {
    if (event.key === "Escape" && $nav.hasClass("is-open")) {
      $toggle.trigger("click").trigger("focus");
    }
  });

  // 2. Works: tap (or Enter) on an image shows its description over it.
  //    On a computer the description also shows on hover (in the CSS).
  $("button.overlay-wrap").on("click", function () {
    var $this = $(this);
    var isOpen = $this.hasClass("is-open");
    $("button.overlay-wrap").removeClass("is-open").attr("aria-expanded", "false");
    if (!isOpen) {
      $this.addClass("is-open").attr("aria-expanded", "true");
    }
  });

  // 3. Contact form (no server yet, so just show a thank-you message)
  $("#contact-form").on("submit", function (event) {
    event.preventDefault();
    if (!this.checkValidity()) {
      this.reportValidity();
      return;
    }
    var name = $.trim($("#name").val());
    $("#form-status").text("Thank you, " + name + ". Your message has been noted.");
    this.reset();
  });

});
