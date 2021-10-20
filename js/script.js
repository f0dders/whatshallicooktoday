$(document).ready(function () {
	$(".food-selector").on("select2:select", function (e) {
		$(':input[type="submit"]').removeAttr("disabled");
	});
	$(".food-selector").on("select2:clear", function (e) {
		$(':input[type="submit"]').attr("disabled", "disabled");
	});
	if (new URLSearchParams(window.location.search).has("q") == false) {
		$("#results-wrapper").css("display", "none");
		$("#form-wrapper").css("height", "50vh");
	}
	if (new URLSearchParams(window.location.search).has("q") == true) {
		let urlParams = new URLSearchParams(window.location.search).get("q");
		let urlParamsArray = urlParams.split(" ");
		$("#homepage-h2-title").css("display", "none");
		$(':input[type="submit"]').removeAttr("disabled");
		$(".food-selector").val(urlParamsArray).trigger("change");
	}
});

function appendResults() {
	let selector = $(".food-selector").select2("data");
	let str = "";
	for (var i = 0; i < selector.length; i++) {
		str += selector[i].id + " ";
	}
	let params = new URLSearchParams(window.location.search);
	params.set("q", str.trim(str));
	window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
	location.reload();
}

function clearResults() {
	$(".food-selector").val(null).trigger("change");
}

// function formatFood() {
// 	let selector = $(".food-selector").select2("data");
// 	for (var i = 0; i < selector.length; i++) {
// 		selector[i] = selector[i].id.replace("-", " ");
// 	}
// }

// NOT WORKING YET. REPLACE DASHES WITH SPACES IN OPTION TEXT?

// function formatFood(food) {
// 	if (!food.id) {
// 		return food.text;
// 	}
// 	var foods = $(food.text.replace("-", " "));
// 	return foods;
// }

// Thank you w3schools...

var loadSpinnerTime;

function loadSpinner() {
	loadSpinnerTime = setTimeout(showPage, 500);
}

function showPage() {
	$("#content-loader").css("display", "none");
	$("#content-wrapper").css("display", "flex");
}
