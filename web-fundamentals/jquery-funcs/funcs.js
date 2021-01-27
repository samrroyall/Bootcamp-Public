$(document).ready( function() {
    $("#click").click( function () { 
        $(this).toggleClass("bg-dark"); 
        $(this).toggleClass("text-light"); 
    });
    $("#hide").click( function () {
        $(this).hide();
    });
    $("#show").click( function () {
        $("#hide").show();
    });
    $("#toggle").click( function () {
        $("#toggle p").toggle();
    });
    $("#slide-up").click( function () {
        $("#slide-up img").slideUp();
    });
    $("#slide-down").click( function () {
        $("#slide-down img").slideDown();
    });
    $("#slide-toggle").click( function () {
        $("#slide-toggle img").slideToggle();
    });
    $("#fade-out").click( function() {
        $(this).fadeOut();
    });
    $("#fade-in").click( function() {
        $("#fade-out").fadeIn();
    });
    $("#add-class").click( function() {
        $(this).addClass("col-5");
    })
    $("#remove-class").click( function() {
        $("#add-class").removeClass("col-5");
    })
    $("#before").click( function() {
        $("#before p").before("<strong>something </strong>");
    });
    $("#after").click( function() {
        $("#after p").after("<strong>something </strong>");
    });
    $("#prepend").click( function() {
        $("#prepend p").prepend("<strong>something </strong>");
    });
    $("#append").click( function() {
        $("#append p").append("<strong>something </strong>");
    });

    $("#html").click( function () {
        $("#html p").html(`
            <p class="card-text">
              <strong>
                Click on me to change my HTML so I can be bold!
              </strong>
            </p>
        `);
    });
    $("#css").click( function () {
        $(this).css("text-align", "justify");
    });
    $("#text").click( function () {
        $("#text p").text("CLICK ON ME TO MAKE ME ALL CAPS!");
    });

    $("#hover").hover( function() {
        $("#hover").toggleClass("bg-dark");
        $("#hover").toggleClass("text-light");
    });
    $("#attr").click( function() {
        var id = $(this).attr("id");
        $("#attr p").after("<strong><code>" + id + " </code></strong>");
    });
    $("#val p").click( function() {
        var v = $("#val select").val();
        $("#val span").append("<strong>" + v + " </strong>");
    });
});