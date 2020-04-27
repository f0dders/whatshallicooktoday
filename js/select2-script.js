$(document).ready(function () {
	var data = [
		"Banana",
		"Orange",
		"Apple",
		"Mango",
		"Pasta",
		"Onion",
		{
			id: "Chopped-Tomatoes",
			text: "Chopped Tomatoes",
		},
		"Pepper",
	];

	$(".food-selector").select2({
		data: data,
		tags: true,
		tokenSeparators: [","],
		placeholder: "Start typing...",
		allowClear: true,
		width: "resolve",
	});

	let searchParams = new URLSearchParams(window.location.search);
	let searchParamsString = searchParams.get("q");
	if (searchParams.has("q") == true) {
		let searchParamsArray = searchParamsString.split(" ");
		$(".food-selector").val(searchParamsArray);
		$(".food-selector").trigger("change");
	}
});
