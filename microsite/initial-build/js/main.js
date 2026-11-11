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

  // Close the menu with the Escape key
  $(document).on("keydown", function (event) {
    if (event.key === "Escape" && $nav.hasClass("is-open")) {
      $toggle.trigger("click").trigger("focus");
    }
  });

  // 2. Contact form (no server yet, so just show a thank-you message)
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
