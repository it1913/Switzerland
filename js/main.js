$(function(){
$(".deleni").on("click", function () {
    $(this).nextAll().toggle();
});
$("h4").on("click", function () {
    $(this).nextAll().toggle();
});
});