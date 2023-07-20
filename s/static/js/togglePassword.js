$(document).ready(function() {
    $("#togglePassword").click(function() {
        var input = $("#password");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
            $(this).removeClass("fa-eye");
            $(this).addClass("fa-eye-slash");
        } else {
            input.attr("type", "password");
            $(this).removeClass("fa-eye-slash");
            $(this).addClass("fa-eye");
        }
    });
});

