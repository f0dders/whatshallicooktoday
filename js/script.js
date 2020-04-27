$(document).ready(function () {
	$(".food-selector").on("select2:select", function (e) {
		$(':input[type="submit"]').removeAttr("disabled");
	});
	// Not working yet:
	// $(".food-selector").on("select2:clear", function (e) {
	//     // Do something
	//     $(':input[type="submit"]').attr('disabled', 'disabled');
	// });
	if (new URLSearchParams(window.location.search).has("q") == false) {
		$("#results-wrapper").css("display", "none");
		$("#form-wrapper").css("height", "70vh");
	}

	if (new URLSearchParams(window.location.search).has("q") == true) {
		$("#homepage-h2-title").css("display", "none");
		$(':input[type="submit"]').removeAttr("disabled");
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

//TAKE 2. Easier to just append a dash to each option before appending to URL parameter?

function clearResults() {
	$(".food-selector").val(null).trigger("change");
}

// Thank you w3schools...

var loadSpinnerTime;

function loadSpinner() {
	loadSpinnerTime = setTimeout(showPage, 500);
}

function showPage() {
	$("#content-loader").css("display", "none");
	$("#content-wrapper").css("display", "block");
}
