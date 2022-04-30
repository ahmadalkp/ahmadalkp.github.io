$(document).ready(function () {
    $("#send_message").click(function () {
        var name = $("#name").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        window.location = "mailto:ahmadalkp@gmail.com?subject=" + subject
            + "&body=" + "Hi, i'm " + name + "%0D%0A%0D%0A"
            + message
    });
});