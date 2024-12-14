// 1

let div = $("#addHtml");

div.append("<h1> New Element </h1>");

// 2

$("#addHtml").hide();

// 3

$("#section").detach();

// 4

$("#div").addClass("addClass");
$(".addClass").append("Lumos Maxima");
$(".addClass").css({
    background: "#f66668",
    "border-radius": "50% 0 50% 0",
    width: "200px",
    height: "120px",
    "line-height": "80px",
    "text-align": "center"
});