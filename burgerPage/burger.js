$(".verify").click(function (e) { 
    e.preventDefault();
    $(".verify__modal").show()
});

$("#cancel").click(function (e) { 
    e.preventDefault();
    $(".verify__modal").hide()
});

$("#verify_ur_email").click(function (e) { 
    e.preventDefault();
    $(".verify__modal").hide()
});

