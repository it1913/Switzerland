$(function () {
    $(".deleni").on("click", function () {
        $(this).nextAll().slideToggle();
    });
    $("h4").on("click", function () {
        $(this).nextAll().toggle();
    });
        $("#varovani").hide();
    $("#simulace").on("click", function(){
        $("#varovani").toggle();
    });
    $("#blue").on("click", function(){
        $("h2").css("background-color", "rgb(36, 87, 255)");
        $("h5").css("color", "rgb(36, 87, 255)");
        $(".pozadi").css("background-color", "rgb(36, 87, 255)");
        $("span").css("background-color", "rgb(36, 87, 255)");
        $("button").css("background-color", "rgb(36, 87, 255)");
        $("#vlajka").attr("src","img/vlajka2.png");
        $("#statni_znak").attr("src","img/statni_znak2.png");
        $(".logo").attr("src","img/vlajka2.png");
        $("#cervena").css("color", "rgb(36, 87, 255)").text("modrý kříž");  
        $("#varovani").removeClass("alert-danger");
        $("#varovani").addClass("alert-primary");
    });
    $("#red").on("click", function(){
        $("h2").css("background-color", "rgb(219, 0, 0)");
        $("h5").css("color", "rgb(219, 0, 0)");
        $(".pozadi").css("background-color", "rgb(219, 0, 0)");
        $("span").css("background-color", "rgb(219, 0, 0)");
        $("button").css("background-color", "rgb(219, 0, 0)");
        $("#vlajka").attr("src","img/vlajka.png");
        $("#statni_znak").attr("src","img/statni_znak.png");
        $(".logo").attr("src","img/vlajka.png");
        $("#cervena").css("color", "rgb(219, 0, 0)").text("červený kříž");  
        $("#varovani").removeClass("alert-primary");
        $("#varovani").addClass("alert-danger");
    });
});